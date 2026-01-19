'use client';

import { Suspense, useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useDebounce } from '@/hooks/useDebounce';
import { fetchOrgRepos, fetchOrgMetadata } from '@/lib/api';
import { getStoredToken, setLastOrgSearch } from '@/lib/storage';
import { SearchInput } from '@/components/SearchInput';
import { RepoList } from '@/components/RepoList';
import { SortControls } from '@/components/SortControls';
import { SkeletonLoader } from '@/components/SkeletonLoader';
import { ErrorState } from '@/components/ErrorState';
import { InfiniteScrollTrigger } from '@/components/InfiniteScrollTrigger';
import { StatsSidebar } from '@/components/StatsSidebar';
import { TokenInput } from '@/components/TokenInput';
import type { SortOption } from '@/types/github';
import type { GitHubApiError, GitHubRepo } from '@/types/github';

const PER_PAGE = 10;

type SortOrder = 'asc' | 'desc';

function DashboardContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orgFromUrl = searchParams.get('org') || '';
  
  const [org, setOrg] = useState(orgFromUrl);
  const [token, setToken] = useState<string | null>(() => getStoredToken());
  const [sortBy, setSortBy] = useState<SortOption>('updated');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [selectedRepo, setSelectedRepo] = useState<GitHubRepo | null>(null);
  
  const debouncedOrg = useDebounce(org, 500);

  // Update URL when org changes (without triggering page re-render)
  useEffect(() => {
    if (debouncedOrg) {
      const params = new URLSearchParams(searchParams.toString());
      params.set('org', debouncedOrg);
      const newUrl = `?${params.toString()}`;
      
      // Use history.replaceState instead of router.push to avoid re-renders
      if (typeof window !== 'undefined') {
        window.history.replaceState({}, '', newUrl);
      }
      
      setLastOrgSearch(debouncedOrg);
    }
  }, [debouncedOrg, searchParams]);

  // Initialize org from URL on mount
  useEffect(() => {
    if (orgFromUrl && !org) {
      setOrg(orgFromUrl);
    }
  }, [orgFromUrl, org]);

  // Reset selected repo when org changes
  useEffect(() => {
    setSelectedRepo(null);
  }, [debouncedOrg]);

  const {
    data,
    error,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['org-repos', debouncedOrg, token],
    queryFn: ({ pageParam = 1 }) =>
      fetchOrgRepos(debouncedOrg, pageParam, PER_PAGE, token || undefined),
    enabled: debouncedOrg.length > 0,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < PER_PAGE) {
        return undefined;
      }
      return allPages.length + 1;
    },
  });

  const {
    data: orgData,
  } = useQuery({
    queryKey: ['org-metadata', debouncedOrg],
    queryFn: () => fetchOrgMetadata(debouncedOrg, token || undefined),
    enabled: debouncedOrg.length > 0,
  });

  const allRepos = data?.pages.flat() || [];

  const handleOrgChange = useCallback((newOrg: string) => {
    setOrg(newOrg);
    setSelectedRepo(null);
  }, []);

  const handleTokenChange = useCallback((newToken: string | null) => {
    setToken(newToken);
    setSelectedRepo(null);
  }, []);

  const handleRetry = useCallback(() => {
    if (debouncedOrg) {
      router.refresh();
    }
  }, [debouncedOrg, router]);

  const handleRepoClick = useCallback((repo: GitHubRepo) => {
    setSelectedRepo(repo);
  }, []);

  const handleCloseSidebar = useCallback(() => {
    setSelectedRepo(null);
  }, []);

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black font-sans">
      {/* Left content area with infinite scroll */}
      <div className="flex-1 max-w-4xl px-4 sm:px-6 lg:px-8 lg:mr-80 xl:mr-96">
        {/* Sticky header */}
        <div className="sticky top-0 z-40 bg-zinc-50 dark:bg-black pt-8 pb-6 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 border-b border-zinc-200 dark:border-zinc-800">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              GitHub Organization Dashboard
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              Explore repositories from any GitHub organization
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1">
              <SearchInput org={org} onOrgChange={handleOrgChange} token={token} />
            </div>
            <TokenInput onTokenChange={handleTokenChange} />
          </div>
        </div>

        {/* Sticky sort section */}
        {!isLoading && !isError && debouncedOrg && allRepos.length > 0 && (
          <div className="sticky top-[180px] z-30 bg-zinc-50 dark:bg-black -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 py-4 border-b border-zinc-200 dark:border-zinc-800">
            <SortControls 
              sortBy={sortBy} 
              sortOrder={sortOrder}
              onSortChange={setSortBy}
              onOrderChange={setSortOrder}
            />
          </div>
        )}

        <div className="py-6">
          {isLoading && !data && <SkeletonLoader />}

          {isError && error && (
            <ErrorState
              error={error as unknown as GitHubApiError}
              onRetry={handleRetry}
            />
          )}

          {!isLoading && !isError && debouncedOrg && (
            <>
              {allRepos.length > 0 && (
                <></>
              )}
              <RepoList
                repos={allRepos}
                sortBy={sortBy}
                sortOrder={sortOrder}
                onSortChange={setSortBy}
                selectedRepoId={selectedRepo?.id || null}
                onRepoClick={handleRepoClick}
              />
              
              {allRepos.length > 0 && (
                <InfiniteScrollTrigger
                  onIntersect={() => fetchNextPage()}
                  hasMore={hasNextPage || false}
                  isLoading={isFetchingNextPage}
                />
              )}
            </>
          )}

          {!debouncedOrg && !isLoading && (
            <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
              <p className="text-zinc-600 dark:text-zinc-400">
                Enter an organization name to get started
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Fixed right sidebar */}
      {debouncedOrg && !isLoading && !isError && (
        <div className="hidden lg:block fixed right-0 top-0 w-80 xl:w-96 h-screen overflow-y-auto">
          <StatsSidebar
            repos={allRepos}
            orgData={orgData || null}
            selectedRepo={selectedRepo}
            onClose={handleCloseSidebar}
          />
        </div>
      )}

      {/* Mobile sidebar - shows at bottom on small screens */}
      {debouncedOrg && !isLoading && !isError && (
        <div className="lg:hidden mt-8 border-t border-zinc-200 dark:border-zinc-800 pt-8 px-4">
          <StatsSidebar
            repos={allRepos}
            orgData={orgData || null}
            selectedRepo={selectedRepo}
            onClose={handleCloseSidebar}
          />
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<SkeletonLoader />}>
      <DashboardContent />
    </Suspense>
  );
}

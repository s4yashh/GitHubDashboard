import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000, // 10 minutes - keep data fresh longer
      gcTime: 15 * 60 * 1000, // 15 minutes (formerly cacheTime)
      retry: (failureCount, error) => {
        // Don't retry on 404 or 403 errors
        if (error && typeof error === 'object' && 'status' in error) {
          const status = (error as { status: number }).status;
          if (status === 404 || status === 403 || status === 401) {
            return false;
          }
        }
        // Retry only 1 time for other errors (network issues)
        return failureCount < 1;
      },
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchOnMount: false,
    },
  },
});

import { Star, GitFork, Calendar, Code2, Lock } from 'lucide-react';
import type { GitHubRepo } from '@/types/github';

interface RepoCardProps {
  repo: GitHubRepo;
  onClick?: () => void;
  isSelected?: boolean;
}

export function RepoCard({ repo, onClick, isSelected }: RepoCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div
      onClick={onClick}
      className={`border rounded-xl p-5 transition-all duration-200 cursor-pointer backdrop-blur-sm ${
        isSelected
          ? 'border-blue-400 dark:border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 shadow-lg shadow-blue-500/10'
          : 'border-zinc-200 dark:border-zinc-700 bg-white/50 dark:bg-zinc-900/30 hover:border-zinc-300 dark:hover:border-zinc-600 hover:shadow-md hover:shadow-zinc-400/5 dark:hover:shadow-black/20'
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 truncate">
              {repo.name}
            </h3>
            {repo.private && (
              <Lock className="w-4 h-4 text-amber-500 flex-shrink-0" />
            )}
          </div>
          {repo.description && (
            <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-4 line-clamp-2 leading-relaxed">
              {repo.description}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-600 dark:text-zinc-400">
            {repo.language && (
              <span className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/50">
                <Code2 className="w-3.5 h-3.5" />
                {repo.language}
              </span>
            )}
            <span className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Star className="w-4 h-4" />
              {repo.stargazers_count.toLocaleString()}
            </span>
            <span className="flex items-center gap-1 hover:text-green-600 dark:hover:text-green-400 transition-colors">
              <GitFork className="w-4 h-4" />
              {repo.forks_count.toLocaleString()}
            </span>
            <span className="flex items-center gap-1 ml-auto text-zinc-500 dark:text-zinc-500">
              <Calendar className="w-4 h-4" />
              {formatDate(repo.updated_at)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

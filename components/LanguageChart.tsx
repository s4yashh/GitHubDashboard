'use client';

import { useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import type { GitHubRepo } from '@/types/github';

interface LanguageChartProps {
  repos: GitHubRepo[];
}

const COLORS = [
  '#3b82f6', // blue
  '#ef4444', // red
  '#10b981', // emerald
  '#f59e0b', // amber
  '#a855f7', // purple
  '#06b6d4', // cyan
  '#ec4899', // pink
  '#8b5cf6', // violet
];

export function LanguageChart({ repos }: LanguageChartProps) {
  // Memoize the data calculation to avoid recalculating on every render
  const data = useMemo(() => {
    const languageCounts = repos.reduce((acc, repo) => {
      if (repo.language) {
        acc[repo.language] = (acc[repo.language] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    const totalRepos = repos.length;
    
    return Object.entries(languageCounts)
      .map(([name, value]) => ({ 
        name, 
        value,
        percentage: Math.round((value / totalRepos) * 100)
      }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 8);
  }, [repos]);

  // Custom tooltip component
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-2xl border border-zinc-200 dark:border-zinc-700 backdrop-blur-lg">
          <div className="flex items-center gap-3 mb-2">
            <div 
              className="w-4 h-4 rounded-full shadow-md"
              style={{ background: payload[0].payload.fill }}
            />
            <p className="font-bold text-zinc-900 dark:text-zinc-100">
              {payload[0].name}
            </p>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {payload[0].value} repositories
          </p>
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mt-1">
            {payload[0].payload.percentage}% of total
          </p>
        </div>
      );
    }
    return null;
  };

  // Custom legend component
  const renderLegend = (props: any) => {
    const { payload } = props;
    
    return (
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {payload.map((entry: any, index: number) => (
          <div
            key={`legend-${index}`}
            className="flex items-center gap-2 px-2 py-1 rounded text-xs"
          >
            <div 
              className="w-3 h-3 rounded-full"
              style={{ background: entry.color }}
            />
            <span className="text-zinc-700 dark:text-zinc-300">
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    );
  };

  if (data.length === 0) {
    return null;
  }

  return (
    <div className="relative overflow-hidden border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl p-6 w-full bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 shadow-lg">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
      
      {/* Header */}
      <div className="relative z-10 mb-6">
        <h3 className="text-lg font-bold bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent">
          Language Distribution
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
          Across {repos.length} repositories
        </p>
      </div>

      {/* Chart */}
      <div className="relative z-10" style={{ width: '100%', height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={75}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip 
              content={<CustomTooltip />}
              cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
            />
            <Legend 
              content={renderLegend}
              verticalAlign="bottom"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Stats footer */}
      <div className="relative z-10 mt-4 pt-4 border-t border-zinc-200/50 dark:border-zinc-700/50">
        <div className="flex items-center justify-between text-sm">
          <span className="text-zinc-600 dark:text-zinc-400">
            {data.length} languages
          </span>
          <span className="font-medium text-zinc-900 dark:text-zinc-100">
            Top: {data[0]?.name}
          </span>
        </div>
      </div>
    </div>
  );
}
'use client';

import { useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import type { GitHubRepo } from '@/types/github';

interface LanguageChartProps {
  repos: GitHubRepo[];
}

const COLORS = [
  '#3b82f6', // blue-500
  '#ef4444', // red-500
  '#10b981', // emerald-500
  '#f59e0b', // amber-500
  '#a855f7', // purple-500
  '#06b6d4', // cyan-500
  '#ec4899', // pink-500
  '#8b5cf6', // violet-500
  '#14b8a6', // teal-500
  '#f97316', // orange-500
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

    return Object.entries(languageCounts)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 8);
  }, [repos]);

  if (data.length === 0) {
    return null;
  }

  return (
    <div className="border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 w-full bg-white dark:bg-zinc-950">
      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
        Language Distribution
      </h3>
      <div style={{ width: '100%', height: 280, backgroundColor: 'transparent' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={70}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '2px solid #e4e4e7',
                borderRadius: '0.5rem',
                color: '#18181b',
                padding: '8px 12px',
              }}
              labelStyle={{ color: '#18181b', fontWeight: 'bold' }}
              formatter={(value) => `${value} repos`}
            />
            <Legend 
              wrapperStyle={{ fontSize: '12px', paddingTop: '10px', color: '#d4d4d8' }}
              iconType="circle"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

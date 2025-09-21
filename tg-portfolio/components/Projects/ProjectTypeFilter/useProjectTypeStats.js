// components/ProjectTypeFilter/useProjectTypeStats.js
import { useMemo } from 'react';
import { getDisplayProjectType } from '../../../utils/projectHelper';

export const useProjectTypeStats = (projects) => useMemo(() => {
  const counts = {};

  (projects || []).forEach((project) => {
    const type = getDisplayProjectType(project);
    if (!type) return;
    counts[type] = (counts[type] || 0) + 1;
  });

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([type, count]) => ({ type, count }));
}, [projects]);

import { useMemo } from 'react';

export const useProjectTagStats = (projects) => useMemo(() => {
  const tagCounts = {};

  (projects || []).forEach((project) => {
    const combinedTags = [
      ...(project.tags || []),
      ...(project.projectTypeGroup?.secondaryTags || []),
    ];

    combinedTags
      .filter(Boolean)
      .forEach((tag) => {
        const key = tag.toLowerCase();
        if (!tagCounts[key]) {
          tagCounts[key] = { label: tag, count: 0 };
        }
        tagCounts[key].count += 1;
      });
  });

  return Object.entries(tagCounts)
    .sort(([, a], [, b]) => b.count - a.count)
    .map(([tag, data]) => ({ tag, label: data.label, count: data.count }));
}, [projects]);

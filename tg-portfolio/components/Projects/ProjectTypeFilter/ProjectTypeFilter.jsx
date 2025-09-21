// components/ProjectTypeFilter/index.jsx
import React from 'react';
import ProjectTypeButton from './ProjectTypeButton';
import { useProjectTypeStats } from './useProjectTypeStats';

const ProjectTypeFilter = ({ projects, selectedType, onSelect }) => {
  const typeStats = useProjectTypeStats(projects);

  return (
    <div className="flex flex-wrap gap-2 py-4">
      <ProjectTypeButton
        type="all"
        count={projects?.length || 0}
        isSelected={selectedType === 'all'}
        onClick={onSelect}
      />
      {typeStats.map(({ type, count }) => (
        <ProjectTypeButton
          key={type}
          type={type}
          count={count}
          isSelected={selectedType === type}
          onClick={onSelect}
        />
      ))}
    </div>
  );
};

export default ProjectTypeFilter;

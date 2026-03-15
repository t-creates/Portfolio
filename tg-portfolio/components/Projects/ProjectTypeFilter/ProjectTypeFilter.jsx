// components/ProjectTypeFilter/index.jsx
import React from 'react';
import { motion } from 'framer-motion';
import ProjectTypeButton from './ProjectTypeButton';
import ProjectTagChip from './ProjectTagChip';
import { useProjectTypeStats } from './useProjectTypeStats';
import { useProjectTagStats } from './useProjectTagStats';
import { formatProjectTypeLabel } from '../../../utils/projectHelper';

const filterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ProjectTypeFilter = ({
  projects,
  selectedType,
  selectedTag,
  onSelectType,
  onSelectTag,
}) => {
  const typeStats = useProjectTypeStats(projects);
  const tagStats = useProjectTagStats(projects);
  const activeFilters = [
    selectedType !== 'all' ? { label: 'Type', value: formatProjectTypeLabel(selectedType) } : null,
    selectedTag !== 'all'
      ? {
        label: 'Focus',
        value: formatProjectTypeLabel(
          tagStats.find((tagStat) => tagStat.tag === selectedTag)?.label || selectedTag,
        ),
      }
      : null,
  ].filter(Boolean);
  const resetDisabled = !activeFilters.length;

  const handleReset = () => {
    onSelectType('all');
    onSelectTag('all');
  };

  return (
    <motion.div
      className="layered-card flex w-full flex-col gap-6 rounded-3xl border border-black/5 bg-white/80 p-6 shadow-xl backdrop-blur"
      variants={filterVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-black/60">Active filters</p>
          <div className="flex flex-wrap gap-2 pt-2 text-sm font-semibold text-black/70">
            {activeFilters.length ? activeFilters.map((filter) => (
              <span key={filter.value} className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1">
                <span className="text-[11px] uppercase tracking-[0.2em] text-black/50">{filter.label}</span>
                <span>{filter.value}</span>
              </span>
            )) : (
              <span className="rounded-full border border-dashed border-black/10 px-3 py-1 text-black/50">
                Showing all projects
              </span>
            )}
          </div>
        </div>
        <button
          type="button"
          className="self-start rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-black transition hover:border-black/40 hover:bg-black/5 disabled:opacity-50 disabled:hover:bg-transparent"
          disabled={resetDisabled}
          onClick={handleReset}
        >
          Reset filters
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-black/60">Project types</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <ProjectTypeButton
              type="all"
              count={projects?.length || 0}
              isSelected={selectedType === 'all'}
              onClick={onSelectType}
            />
            {typeStats.map(({ type, count }) => (
              <ProjectTypeButton
                key={type}
                type={type}
                count={count}
                isSelected={selectedType === type}
                onClick={onSelectType}
              />
            ))}
          </div>
        </div>

        {tagStats.length ? (
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-black/60">Focus areas</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <ProjectTagChip
                tag="all"
                count={projects?.length || 0}
                isSelected={selectedTag === 'all'}
                onClick={onSelectTag}
                label="All tags"
              />
              {tagStats.map(({ tag, count, label }) => (
                <ProjectTagChip
                  key={tag}
                  tag={tag}
                  label={label}
                  count={count}
                  isSelected={selectedTag === tag}
                  onClick={onSelectTag}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};

export default ProjectTypeFilter;

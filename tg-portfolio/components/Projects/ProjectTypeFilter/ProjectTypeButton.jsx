// components/ProjectTypeFilter/ProjectTypeButton.jsx
import React from 'react';
import { formatProjectTypeLabel } from '../../../utils/projectHelper';

const ProjectTypeButton = ({
  type,
  count,
  isSelected,
  onClick,
}) => (
  <button
    type="button"
    onClick={() => onClick(type)}
    aria-pressed={isSelected}
    className={`group relative flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-semibold transition-all duration-200
      ${isSelected
    ? 'border-green-600/70 bg-gradient-to-r from-green-600 via-emerald-500 to-green-400 text-white shadow-lg shadow-green-500/30'
    : 'border-black/10 bg-white/80 text-black hover:border-black/30 hover:bg-white'}`}
  >
    <span>{formatProjectTypeLabel(type)}</span>
    <span className={`inline-flex h-5 min-w-[2rem] items-center justify-center rounded-full text-xs font-bold tracking-wide ${isSelected ? 'bg-white/20 text-white' : 'bg-black/5 text-black/70'}`}>
      {count}
    </span>
    <span className={`absolute inset-x-3 bottom-1 h-px rounded-full transition-all ${isSelected ? 'bg-white/40 opacity-100' : 'bg-green-500/30 opacity-0 group-hover:opacity-100'}`} />
  </button>
);

export default ProjectTypeButton;

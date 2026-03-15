import React from 'react';
import { formatProjectTypeLabel } from '../../../utils/projectHelper';

const ProjectTagChip = ({
  tag,
  label,
  count,
  isSelected,
  onClick,
}) => (
  <button
    type="button"
    onClick={() => onClick(tag)}
    aria-pressed={isSelected}
    className={`group flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all duration-200
      ${isSelected
      ? 'border-emerald-500/80 bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
      : 'border-black/10 bg-white/70 text-black hover:border-black/30 hover:bg-white'}`}
  >
    <span className="tracking-wide">{tag === 'all' ? label : formatProjectTypeLabel(label)}</span>
    <span className={`inline-flex h-4 min-w-[1.5rem] items-center justify-center rounded-full text-[10px] font-bold ${isSelected ? 'bg-white/20 text-white' : 'bg-black/5 text-black/60 group-hover:bg-black/10'}`}>
      {count}
    </span>
  </button>
);

export default ProjectTagChip;

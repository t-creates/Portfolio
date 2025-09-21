// components/ProjectTypeFilter/ProjectTypeButton.jsx
import React from 'react';
import { formatProjectTypeLabel } from '../../../utils/projectHelper';

const ProjectTypeButton = ({ type, count, isSelected, onClick }) => (
  <button
    onClick={() => onClick(type)}
    className={`px-4 py-2 rounded border border-green-700/90 text-sm font-medium transition 
      ${isSelected ? 'bg-green-700 text-white' : 'bg-white text-green-700 hover:bg-green-100'}`}
    type="button"
    aria-pressed={isSelected}
  >
    {formatProjectTypeLabel(type)} ({count})
  </button>
);

export default ProjectTypeButton;


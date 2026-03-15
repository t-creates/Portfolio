// utils/projectHelpers.js
export const getDisplayProjectType = (project) => {
  const group = project?.projectTypeGroup;
  if (!group) return null;
  const predefined = group.predefinedType || '';
  if (predefined && predefined.toLowerCase() === 'custom') {
    return group.customType || null;
  }
  return predefined || null;
};

export const formatProjectTypeLabel = (slug) => {
  if (!slug) return '';
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase());
};

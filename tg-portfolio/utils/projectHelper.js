// utils/projectHelpers.js
export const getDisplayProjectType = (project) => {
  const group = project?.projectTypeGroup;
  if (!group) return null;
  return group.predefinedType === 'custom' ? group.customType : group.predefinedType;
};

export const formatProjectTypeLabel = (slug) => {
  if (!slug) return '';
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase());
};

// Hero Query
export const heroQuery = '*[_type == "hero"]';

// Testimonials Query
export const clientsQuery = '*[_type == "testimonials"]';

// Projects Query
export const projectsQuery = '*[_type == "projects"] | order(_createdAt desc)';

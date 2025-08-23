// lib/queries.js
export const PORTFOLIO_QUERY = `
{
  "hero": *[_type == "hero"],

  // Keep if you re-enable Testimonials on the page
  //"clientsTest": *[_type == "testimonials"],

  "projects": *[_type == "projects"],

  "techno": *[_type == "technologies"],

  "ex": *[_type == "experience"],

  "expertise": *[_type == "expertise"]
}
`;

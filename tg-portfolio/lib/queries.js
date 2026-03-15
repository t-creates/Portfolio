// lib/queries.js
export const PORTFOLIO_QUERY = `
{
  "hero": *[_type == "hero"][0]{
    bio,
    highlights[]{text},
    stats[]{label, value, order}
  },
  "services": *[_type == "service"] | order(order asc){
    _id,
    title,
    summary,
    timeline,
    placeholderNote,
    applications[]{label, url},
    exampleProject,
    preferredStack,
    requestTemplate,
    "imageUrl": image.asset->url
  },
  "projects": *[_type == "projects"] | order(_createdAt desc){
    ...,
    tags,
    features,
    quickFacts[]{label, value},
    gallery[]{
      caption,
      "imageUrl": image.asset->url
    },
    videoUrl,
    projectTypeGroup{
      predefinedType,
      customType,
      secondaryTags
    }
  },
  "techno": *[_type == "technologies"] | order(order asc){
    _id,
    name,
    category,
    proficiency,
    projectsUsed,
    image
  },
  "expertise": *[_type == "expertise"] | order(order asc){
    ...,
    metrics[]{label, value},
    items[]{
      ...,
      headline,
      text,
      image,
      "imageUrl": image.asset->url
    }
  }
}
`;

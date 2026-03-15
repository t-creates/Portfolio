# Backend Schema Plan

All schema files live under `personal-portfolio/schemas/`. The following updates have already been applied so the frontend can consume structured data immediately. Deploy the Sanity Studio (`npm run deploy` inside `personal-portfolio`) once you finish adjusting content.

## `hero`
Path: `schemas/hero.js`

- `bio` stays as the main paragraph.
- `highlights[]` holds short bullet statements (`text` field required).
- `stats[]` now stores KPI tiles with `label`, `value`, and `order` for custom sorting.

These fields already hydrate `components/index/Hero.jsx` with live CMS content when populated.

## `services`
Path: `schemas/services.js` (new document type `service`)

- `title`, `summary`, `timeline`, and `image` map directly to the cards in `components/about/Services.jsx`.
- `deliverables[]`, `highlights[]`, and `quickFacts[]` power the bullet lists and metric tiles on each card.
- `placeholderNote` and `requestTemplate` control the reminder text + pre-filled modal message.
- Use the `order` field to sort the services grid.

## `expertise`
Path: `schemas/expertise.js`

- Added `description` (section intro paragraph) and `metrics[]` so KPI tiles are configurable.
- Each item inside `items[]` now includes `headline` plus the existing `subtitle`, `image`, and `text[]`.

## `projects`
Path: `schemas/projects.js`

- `projectTypeGroup.predefinedType` now stores slug-style values (e.g., `web-development`) so filters remain consistent, while `customType` and `secondaryTags[]` allow bespoke labeling.
- Added support for `tags[]`, `features[]`, `quickFacts[]`, rich `gallery[]` entries, and `videoUrl` / `demoVideo` fields that surface inside `components/Projects/Project.jsx`.
- Existing fields (`neww`, `sourceCode`, `website`, `badge`) remain available, plus a new `order` number to control sorting if desired.

## `technologies`
Path: `schemas/technologies.js`

- Added `category`, `proficiency`, and `projectsUsed` metadata to fuel the Toolbox badges.

## GROQ snapshot
`lib/queries.js` now pulls:
```
{
  "hero": *[_type == "hero"][0]{bio, highlights[]{text}, stats[]{label, value, order}},
  "services": *[_type == "service"]|order(order asc){
    title, summary, timeline, placeholderNote, quickFacts, deliverables, highlights, "imageUrl": image.asset->url, requestTemplate
  },
  "projects": *[_type == "projects"]{..., tags, features, quickFacts, gallery[]{..., "imageUrl": image.asset->url}, videoUrl, projectTypeGroup{predefinedType, customType, secondaryTags}},
  "techno": *[_type == "technologies"]{name, category, proficiency, projectsUsed, image},
  "expertise": *[_type == "expertise"]{..., metrics, items[]{..., image, "imageUrl": image.asset->url}}
}
```

After updating content in Sanity, rerun `npm run dev` in `tg-portfolio/`—the frontend already reads these fields, so placeholders disappear as soon as data exists.

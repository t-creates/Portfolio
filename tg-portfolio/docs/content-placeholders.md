# Content + Placeholder Reference

Quick map of the portfolio sections, what data they already consume, and the placeholders that should be replaced once new CMS fields are ready. Use this as a checklist when updating Sanity or when you are ready to swap the hardcoded scaffolding for dynamic copy.

## Hero (`components/index/Hero.jsx`)
- **Current data**: `hero[0].bio` still flows from Sanity. Everything else is static for now.
- **Placeholders**:
  - `heroHighlights` array lists two bullet talking points. Replace each string with specific outcomes/process notes.
  - `heroStats` contains three metric tiles. Swap the `value` keys with actual stats (years experience, shipped products, availability, etc.).
  - Secondary CTA uses `href="#projects"` by default—adjust if a different funnel is needed.
- **When CMS is ready**: Add fields for `highlights[]` and `stats[]` in the hero document, then map them here instead of the inline arrays.

## Services (`components/about/Services.jsx`)
- **Current data**: Local `services` array now covers six offerings (Custom Software & AI, Full Stack, Web, Data Integration, Freelance, Consulting) each with `summary`, `timeline`, `deliverables[]`, `highlights[]`, and `placeholderNote`.
- **Placeholders**:
  - Replace each `deliverables[]` entry with specific outcomes or processes once available.
  - The `highlights` cards expect a metric/value pair (e.g., “Time to launch → 6 weeks”).
  - `placeholderNote` is rendered at the bottom of each card so you can remind yourself what content needs to be filled in.
- **To add later**: create CMS types that mirror this structure to drive the cards dynamically or extend with `caseStudySlug`/`cta` for deep links.

## About (`components/about/About.jsx`)
- **Current data**: Static narrative copy plus `aboutHighlights[]` placeholder metrics.
- **Placeholders**:
  - Update `aboutHighlights` values with real stats from CMS (years experience, shipped projects, etc.).
  - Replace bullet list entries under “How I like to partner” with actual collaboration notes.
- **To add later**: Introduce Sanity fields for `highlights[]`, `bioParagraphs[]`, and `values[]` so the section can be fully dynamic.

## Expertise (`components/Expertise.jsx`)
- **Current data**: Each section renders through `ExperiseSection.jsx`, which now expects optional `description`, `metrics[]`, `items[]`, and image assets. Items still rely on existing Sanity `subtitle` + `text[]` fields.
- **Placeholders**:
  - If `metrics[]` is missing, three generic metric tiles are rendered—replace with actual stats once schema is updated.
  - Capability cards fall back to placeholder bullet copy when `text[]` is empty.
  - Section hero image shows a dashed placeholder until `image`/`imageUrl` exists.
- **To add later**: Extend Sanity schema with `description`, `metrics[]` (label/value), `headline`, and `image` fields per capability to fully drive the layout.

## Toolbox (`pages/index.js` → Toolbox section)
- **Current data**: Uses `techno` Sanity collection, grouped dynamically in `components/about/Toolbox.jsx`.
- **Placeholders**:
  - Categories fall back to heuristics; add a `category` field per tech to control grouping.
  - Badges suggest adding `proficiency`/`projectsUsed` counts.
- **To add later**: Extend schema with `proficiency`, `projectsUsed`, and `summary` so the helper text can be replaced.

## Projects (`components/Projects/*`)
- **Current data**: Project cards read data from Sanity, filter by `projectTypeGroup`.
- **To add later**: 
  - Cards now expect optional `gallery[]`, `features[]`, `tags[]`, and `videoUrl`/`demoVideoUrl` for the detail modal. When these are missing, placeholders explain what to add.
  - Add fields for `featured`, `metrics`, and `problem/solution` blurbs in Sanity to fully utilize the new layout.

## Contact (`components/contact/Contact.jsx`)
- **Current data**: Static array of contact methods, ContactForm still submits as before.
- **Placeholders**:
  - Update descriptions per channel (`description` field) once CMS provides content.
  - `contactMethods` array can live in Sanity or .env when ready.

## Support Sections
- **Testimonials**: Carousel stub is commented in `pages/index.js`. Populate `clientsTest` query before re-enabling.
- **CTA / Contact**: `Contact` component is fully functional. Add `successMessage` or `calendlyLink` fields in CMS when needed.

## Animations
- Framer Motion replaces previous AOS attributes across Hero, Services, Projects, Toolbox, and Contact. Variants live inline in each component so you can tune transitions without touching global scripts.
- Smooth scrolling currently relies on native `scroll-behavior` plus a lightweight requestAnimationFrame noop loop (see `_app.js`) to avoid heavy DOM mutation observers.

> Tip: When you add new CMS fields, mirror the object structures shown above so you only need to swap the inline arrays with the fetched data.

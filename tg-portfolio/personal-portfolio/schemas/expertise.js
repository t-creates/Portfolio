// /schemas/expertise.js
export default {
  name: 'expertise',
  title: 'Areas of Expertise',
  type: 'document',
  fields: [
    // Top-level title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          description: 'Describe the image for accessibility/SEO.',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    // List of items (image, subtitle, text-list)
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          name: 'item',
          title: 'Item',
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              fields: [
                {
                  name: 'alt',
                  title: 'Alt text',
                  type: 'string',
                  description: 'Describe the image for accessibility/SEO.',
                },
              ],
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'text',
              title: 'Text Lines',
              type: 'array',
              of: [{ type: 'string' }],
              description: 'Add short, stylable lines (bullets) — avoid long paragraphs.',
              validation: (Rule) => Rule.min(1),
            },
            {
              name: 'slug',
              title: 'Slug',
              type: 'slug',
              options: {
                // pull from the current array item's subtitle
                source: (_doc, { parent }) => parent?.subtitle,
                slugify: (input) =>
                  input
                    .toLowerCase()
                    .trim()
                    .replace(/\s+/g, '-')      // spaces -> dashes
                    .replace(/&/g, 'and')      // & -> and
                    .replace(/[^\w-]+/g, '')   // remove non-word chars
                    .replace(/--+/g, '-')      // collapse dashes
                    .slice(0, 96),
                // slugs inside nested objects don't need dataset-level uniqueness:
                isUnique: () => true,
              },
              validation: (Rule) => Rule.required(),
            }
          ],
          preview: {
            select: {
              subtitle: 'subtitle',
              media: 'image',
              text: 'text',
            },
            prepare({ subtitle, media, text = [] }) {
              const count = text.length || 0;
              return {
                title: subtitle || 'Item',
                subtitle: `${count} line${count === 1 ? '' : 's'}`,
                media,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: "image",
      items: 'items',
    },
    prepare({ title, media, items = [] }) {
      const count = items?.length || 0;
      return {
        title,
        subtitle: `${count} item${count === 1 ? '' : 's'}`,
        media,
      };
    },
  },
};

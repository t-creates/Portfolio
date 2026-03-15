export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Bio',
      description: 'One or two sentences about yourself, or a favourite quote/tagline.',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
    },
    {
      name: 'github',
      title: 'Github',
      type: 'url',
    },
    {
      name: 'highlights',
      title: 'Highlights',
      description: 'Short statements that appear as bullet points in the hero intro.',
      type: 'array',
      of: [
        {
          name: 'highlight',
          title: 'Highlight',
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: { title: 'text' },
            prepare({ title }) {
              return {
                title: title || 'Highlight',
              };
            },
          },
        },
      ],
    },
    {
      name: 'stats',
      title: 'Hero Stats',
      description: 'Metrics rendered under the hero copy. Use them for KPIs, availability, or positioning.',
      type: 'array',
      of: [
        {
          name: 'stat',
          title: 'Stat',
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'order',
              title: 'Display order',
              type: 'number',
              description: 'Lower numbers show first in the grid.',
              validation: (Rule) => Rule.min(0).max(99),
            },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'value',
            },
          },
        },
      ],
    },
  ]
}

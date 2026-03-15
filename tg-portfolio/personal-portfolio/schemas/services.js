export default {
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 4,
      description: 'Short paragraph describing the engagement or outcome.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'timeline',
      title: 'Typical timeline',
      type: 'string',
      description: 'Show the average engagement length (e.g., “4-8 weeks”).',
    },
    {
      name: 'image',
      title: 'Icon / Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt text',
          type: 'string',
        },
      ],
    },
    {
      name: 'applications',
      title: 'Application categories',
      description: 'Describe the types of apps included (e.g., “CRM”, “Landing Pages”). Optional link to a relevant project.',
      type: 'array',
      of: [
        {
          name: 'application',
          title: 'Application',
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              title: 'Link (optional)',
              type: 'url',
              description: 'External link or anchor to a matching project.',
            },
          ],
        },
      ],
    },
    {
      name: 'exampleProject',
      title: 'Example project',
      type: 'string',
      description: 'Representative engagement or client.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'preferredStack',
      title: 'Preferred tech stack',
      type: 'string',
      description: 'Stack summary shown on the card.',
    },
    {
      name: 'placeholderNote',
      title: 'Placeholder note',
      type: 'text',
      rows: 3,
    },
    {
      name: 'requestTemplate',
      title: 'Request form template',
      description: 'Prefills the modal message so prospects know what to send.',
      type: 'text',
      rows: 4,
    },
    {
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers appear earlier.',
      validation: (Rule) => Rule.integer().min(0),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'timeline',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle || 'Timeline not set',
        media,
      };
    },
  },
};

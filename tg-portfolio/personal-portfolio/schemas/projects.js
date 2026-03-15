const PROJECT_TYPE_OPTIONS = [
  { title: 'Web Development', value: 'web-development' },
  { title: 'Mobile App', value: 'mobile-app' },
  { title: 'E-commerce', value: 'ecommerce' },
  { title: 'Landing Page', value: 'landing-page' },
  { title: 'Blog / CMS', value: 'blog-cms' },
  { title: 'GIS Mapping', value: 'gis-mapping' },
  { title: 'API Development', value: 'api-development' },
  { title: 'Data Platform', value: 'data-platform' },
  { title: 'Automation & AI', value: 'automation-ai' },
  { title: 'Custom', value: 'custom' },
];

export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'projectTypeGroup',
      title: 'Project Type',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'predefinedType',
          title: 'Select Project Type',
          type: 'string',
          options: {
            list: PROJECT_TYPE_OPTIONS,
            layout: 'dropdown',
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'customType',
          title: 'Custom Project Type',
          type: 'string',
          hidden: ({ parent }) => (parent?.predefinedType || '') !== 'custom',
          validation: (Rule) => Rule.custom((field, context) => {
            if ((context.parent?.predefinedType || '') === 'custom' && !field) {
              return 'Custom project type is required when "Custom" is selected';
            }
            return true;
          }),
        },
        {
          name: 'secondaryTags',
          title: 'Secondary Tags',
          description: 'Additional filter chips (e.g., “AI”, “Internal tool”, “Design systems”).',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
      preview: {
        select: {
          predefined: 'predefinedType',
          custom: 'customType',
        },
        prepare({ predefined, custom }) {
          const type = predefined === 'custom' ? custom : predefined;
          return { title: type || 'Project type' };
        },
      },
    },
    {
      name: 'description',
      title: 'Description',
      description: 'One or two sentences about the project.',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          name: 'galleryItem',
          title: 'Gallery Item',
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'headline',
              title: 'Headline',
              type: 'string',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
          preview: {
            select: {
              title: 'headline',
              subtitle: 'caption',
              media: 'image',
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || subtitle || 'Gallery item',
                subtitle,
                media,
              };
            },
          },
        },
      ],
    },
    {
      name: 'tags',
      title: 'Tags',
      description: 'Primary tags used for filtering (e.g., “React”, “AI”, “Design Systems”).',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'features',
      title: 'Feature Bullets',
      description: 'Problem / approach / impact statements displayed inside the project modal.',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'quickFacts',
      title: 'Quick Facts',
      type: 'array',
      of: [
        {
          name: 'fact',
          title: 'Fact',
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'value', title: 'Value', type: 'string', validation: (Rule) => Rule.required() },
          ],
        },
      ],
    },
    {
      name: 'videoUrl',
      title: 'Demo Video URL',
      type: 'url',
    },
    {
      name: 'demoVideoUrl',
      title: 'Secondary video URL',
      description: 'Optional alt video (e.g., Loom).',
      type: 'url',
    },
    {
      name: 'demoVideo',
      title: 'Upload demo video',
      type: 'file',
      options: { accept: 'video/*' },
    },
    {
      name: 'neww',
      title: 'Mark as new',
      type: 'boolean',
    },
    {
      name: 'sourceCode',
      title: 'Source Code',
      type: 'url',
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
    },
    {
      name: 'badge',
      title: 'Badges',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers surface first.',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'projectTypeGroup.predefinedType',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? subtitle.replace(/-/g, ' ') : 'Project',
        media,
      };
    },
  },
};

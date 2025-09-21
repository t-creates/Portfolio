export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'projectTypeGroup',
      title: 'Project Type',
      type: 'object',
      fields: [
        {
          name: 'predefinedType',
          title: 'Select Project Type',
          type: 'string',
          options: {
            list: [
              { title: 'Web Development', value: 'Web Development' },
              { title: 'Mobile App', value: 'Mobile App' },
              { title: 'E-commerce', value: 'E-commerce' },
              { title: 'Landing Page', value: 'Landing Page' },
              { title: 'Blog/CMS', value: 'Blog/CMS' },
              { title: 'GIS Mapping', value: 'GIS Mapping' },
              { title: 'API Development', value: 'API Development' },
              { title: 'Data Processing', value: 'Data Processing' },
              { title: 'Custom', value: 'Custom' }
            ],
            layout: 'dropdown'
          },
          validation: Rule => Rule.required()
        },
        {
          name: 'customType',
          title: 'Custom Project Type',
          type: 'string',
          hidden: ({ parent }) => parent?.predefinedType !== 'custom',
          validation: Rule => Rule.custom((field, context) => {
            if (context.parent?.predefinedType === 'custom' && !field) {
              return 'Custom project type is required when "Custom" is selected'
            }
            return true
          })
        }
      ],
      preview: {
        select: {
          predefined: 'predefinedType',
          custom: 'customType'
        },
        prepare({ predefined, custom }) {
          return {
            title: predefined === 'Custom' ? custom : predefined
          }
        }
      }
    },
    {
      name: 'description',
      title: 'Description',
      description: 'One or two sentences about the project.',
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
      name: 'neww',
      title: 'Neww',
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
      title: 'Badge',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      // Slug -> like a url, a unique string
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      }
    },
  ]
};
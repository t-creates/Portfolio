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
        name: 'description',
        title: 'Description',
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
        of: [{type: 'string'}]
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
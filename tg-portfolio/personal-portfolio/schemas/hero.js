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
      title: 'LinkedIn',
      name: 'linkedin',
      type: 'url',
    },
    {
      title: 'Github',
      name: 'github',
      type: 'url',
    },

  ]
}
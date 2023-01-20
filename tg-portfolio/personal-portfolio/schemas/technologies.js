export default {
  name: 'technologies',
  title: 'Technologies',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
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
      name: 'landingPage',
      title: 'Landing Page',
      type: 'boolean',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    }
  ]
}
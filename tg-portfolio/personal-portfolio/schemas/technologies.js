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
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Languages', value: 'Languages' },
          { title: 'Frameworks', value: 'Frameworks' },
          { title: 'Cloud & Infrastructure', value: 'Cloud & Infrastructure' },
          { title: 'Data & Integration', value: 'Data & Integration' },
          { title: 'AI & Automation', value: 'AI & Automation' },
          { title: 'Visualization', value: 'Visualization' },
          { title: 'Tools', value: 'Tools' },
        ],
        layout: 'dropdown',
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
    },
    {
      name: 'proficiency',
      title: 'Proficiency level',
      type: 'string',
      options: {
        list: [
          { title: 'Expert', value: 'Expert' },
          { title: 'Production', value: 'Production' },
          { title: 'Prototype', value: 'Prototype' },
          { title: 'Exploring', value: 'Exploring' },
        ]
      }
    },
    {
      name: 'projectsUsed',
      title: 'Projects shipped',
      type: 'number',
      description: 'Approximate count shown in the toolbox badges.',
    }
  ]
}

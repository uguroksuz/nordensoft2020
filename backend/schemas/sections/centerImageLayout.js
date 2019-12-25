export default {
  name: 'centerImageLayout',
  type: 'document',
  title: 'Center Image Layout',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Optionable title'
    },
    {
      name: 'leftFeatures',
      type: 'array',
      title: 'Feature',
      of: [{
        type: 'reference',
        title: 'feature',
        to: {
          type: 'feature'
        }
      }]
    },
    {
      name: 'centerImage',
      type: 'image',
      title: 'Center Image'
    },
    {
      name: 'rightFeatures',
      type: 'array',
      title: 'Feature',
      of: [{
        type: 'reference',
        title: 'feature',
        to: {
          type: 'feature'
        }
      }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: '_type'
    }
  }
}

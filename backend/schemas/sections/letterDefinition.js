export default {
  name: 'letterDefinition',
  type: 'document',
  title: 'Letter Definition',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Optionable title'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'body',
      type: 'simpleBlockContent',
      title: 'Body'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: '_type'
    }
  }
}

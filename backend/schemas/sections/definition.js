export default {
  name: 'definition',
  type: 'document',
  title: 'Definition',
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

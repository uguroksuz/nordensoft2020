export default {
  name: 'rightImageArticle',
  type: 'document',
  title: 'Right Image Article',
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

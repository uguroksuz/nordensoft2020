export default {
  name: 'centerArticle',
  type: 'document',
  title: 'Center Article',
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
    },
    {
      name: "color",
      type: "color",
      title: "Block Background Color"
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: '_type'
    }
  }
}

export default {
  name: 'article',
  type: 'document',
  title: 'Article',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Optionable title'
    },
    {
      name: 'body',
      type: 'simpleBlockContent',
      title: 'Body'
    },
    {
      name: 'customclass',
      type: 'string',
      title: 'Custom Class',
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

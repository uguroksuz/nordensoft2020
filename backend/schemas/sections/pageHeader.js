export default {
  name: 'pageHeader',
  type: 'document',
  title: 'Page Header',
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
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: '_type'
    }
  }
}

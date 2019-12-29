export default {
  name: 'singlePageHeader',
  type: 'document',
  title: 'single Page Header',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Optionable title'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Sub Title',
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
      name: 'buttontext',
      type: 'string',
      title: 'Button Text',
    },
    {
      name: 'url',
      type: 'string',
      title: 'Button Url',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: '_type'
    }
  }
}

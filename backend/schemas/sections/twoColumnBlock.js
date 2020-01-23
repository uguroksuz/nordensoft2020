export default {
  name: 'twoColumnBlock',
  type: 'document',
  title: 'Two Column Block',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Optionable title'
    },
    {
      name: 'bodyleft',
      type: 'simpleBlockContent',
      title: 'Body Left'
    },
    {
      name: 'bodyright',
      type: 'simpleBlockContent',
      title: 'Body Right'
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

export default {
  name: 'tableContent',
  type: 'document',
  title: 'Table Content',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Optionable title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'description'
    },
    {
      name: 'sizeChart',
      title: 'Size Chart',
      type: 'table', // Specify table type
    },
    {
      name: 'customclass',
      type: 'string',
      title: 'Custom Class',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: '_type'
    }
  }
}

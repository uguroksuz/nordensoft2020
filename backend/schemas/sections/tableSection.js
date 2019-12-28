export default {
  name: 'tableSection',
  type: 'document',
  title: 'Table Section',
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
      title: 'Desctiption'
    },
    {
      name: 'myAwesomeTable',
      title : 'Table',
      type: 'table'
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

export default {
  name: 'customersBlock',
  type: 'object',
  title: 'Customers Block',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'sections',
      type: 'array',
      title: 'sections',
      of: [{
          type: 'image',
          title: 'image',
        }
      ]
    },
  ],
}
  
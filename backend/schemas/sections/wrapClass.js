export default {
  name: 'wrapclass',
  type: 'object',
  title: 'Wrap Div Class',
  fields: [
    {
      name: 'aritcle',
      type: 'article',
      title: 'article',
      of: [{
        type: 'reference',
        title: 'article',
        to: {
          type: 'article'
        }
      }]
    },
    {
      name: 'persons',
      type: 'array',
      title: 'Persons',
      of: [{
        type: 'reference',
        title: 'person',
        to: {
          type: 'persons'
        }
      }]
    }
  ],
}
  
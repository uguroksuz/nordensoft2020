export default {
    type: 'object',
    name: 'persons',
    title: 'Persons',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            title: 'Block',
            type: 'block',
            styles: [{ title: 'Normal', value: 'normal' }],
            lists: []
          }
        ]
      },
      {
        name: 'members',
        title: 'Members',
        type: 'array',
        of: [{ type: 'contactPerson' }]
      },
      {
        name: 'addressTitle',
        title: 'Adress Title',
        type: 'string'
      },
      {
        name: 'address',
        title: 'Adress',
        type: 'array',
        of: [
          {
            title: 'Block',
            type: 'block',
            styles: [{ title: 'Normal', value: 'normal' }],
            lists: []
          }
        ]
      },
      {
        name: 'customclass',
        title: 'Custom Class',
        type: 'string'
      },
    ]
  }
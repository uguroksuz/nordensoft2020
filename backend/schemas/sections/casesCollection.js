import Features from 'react-icons/lib/fa/tasks'
export default {
  name: 'casesCollection',
  type: 'object',
  title: 'CasesCollection',
  icon: Features,
  fields: [{
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'body',
      type: 'simpleBlockContent',
      title: 'Body'
    },
    {
      name: 'cases',
      type: 'array',
      title: 'Cases',
      of: [{
        type: 'reference',
        title: 'feature',
        to: {
          type: 'cases'
        }
      }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: '_type'
    }
  }
}

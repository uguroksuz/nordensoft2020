import Features from 'react-icons/lib/fa/tasks'
export default {
  name: 'planCollection',
  type: 'object',
  title: 'Plan Collection',
  icon: Features,
  fields: [{
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'plans',
      type: 'array',
      title: 'Plan',
      of: [{
        type: 'reference',
        title: 'plan',
        to: {
          type: 'plan'
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

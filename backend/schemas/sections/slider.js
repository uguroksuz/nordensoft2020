import Features from 'react-icons/lib/fa/tasks'
export default {
  name: 'slider',
  type: 'object',
  title: 'Slider',
  icon: Features,
  fields: [{
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slides',
      type: 'array',
      title: 'Slides',
      of: [{
        type: 'reference',
        title: 'feature',
        to: {
          type: 'slides'
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

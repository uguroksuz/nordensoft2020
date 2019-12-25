export default {
    type: 'object',
    name: 'contactPerson',
    title: 'Contact Person',
    fields: [
      {
        title: 'Person',
        name: 'person',
        type: 'reference',
        to: { type: 'person' }
      },
    ],
    preview: {
      select: {
        personName: 'person.name',
        media: 'person.image'
      },
      prepare (data) {
        return {
          ...data,
          title: data.personName,
        }
      }
    }
  }
  
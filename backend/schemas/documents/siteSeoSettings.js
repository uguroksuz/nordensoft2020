import Settings from "react-icons/lib/fa/cog"

export default {
  name: 'siteSeoSettings',
  title: 'Site Seo Settings',
  type: 'document',
  liveEdit: false,
  __experimental_actions: ['update', 'publish' /* 'create', 'delete' */],
  icon: Settings,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'hreflang',
      title: 'Hreflang',
      type: 'string'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string'
    },
    {
      name: 'analytics',
      title: 'Google Analytics',
      type: 'string'
    },
    {
      name: 'yandex',
      title: 'Yandex',
      type: 'string'
    },
    {
      name: 'bing',
      title: 'Bing',
      type: 'string'
    },
    {
      name: 'yahoo',
      title: 'Yahoo',
      type: 'string'
    },
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image'
    },
    {
      name: 'ogImage',
      title: 'og: Image',
      type: 'image'
    },
  ]
}

import Extra from "react-icons/lib/fa/tasks"

export default {
  name: 'siteExtra',
  title: 'Site Extra Settings',
  type: 'document',
  liveEdit: false,
  __experimental_actions: ['update', 'publish' /* 'create', 'delete' */],
  icon: Extra,
  fields: [
    {
      name: 'footerLogo',
      title: 'Footer Logo',
      type: 'image'
    },
    {
      name: 'footerText',
      title: 'Footer Text',
      type: 'simpleBlockContent'
    },
    {
      name: 'footerContactBlock',
      title: 'Footer Contact Block',
      type: 'simpleBlockContent'
    },
    {
      name: 'footerFindBlock',
      title: 'Footer Find Block',
      type: 'simpleBlockContent'
    },
    {
      name: 'contactFormText',
      title: 'Contact Form Text',
      type: 'simpleBlockContent'
    },
    {
      name: 'contanctFormImage',
      title: 'Contact Form Image',
      type: 'image'
    },
    {
      name: 'contactFormButtonImage',
      title: 'Contact Form Button Image',
      type: 'image'
    },
  ]
}
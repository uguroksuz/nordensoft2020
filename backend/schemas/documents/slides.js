import Features from "react-icons/lib/fa/tasks"

export default {
  name: "slides",
  type: "document",
  title: "Slides",
  icon: Features,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "subtitle",
      type: "string",
      title: "Sub Title"
    },
    {
      name: 'description',
      type: 'simpleBlockContent',
      title: 'Description'
    },
    {
      name: "buttonurl",
      type: "string",
      title: "Button URL"
    },
    {
      name: "buttontext",
      type: "string",
      title: "Button Text"
    },
    {
      name: "illustration",
      type: "illustration",
      title: "Illustration"
    }
  ],
  preview: {
    select: {
      title: "title",
      description: "description",
      illustration: "illustration"
    },
    prepare({ title, description, illustration }) {
      const block = (description || []).find(block => block._type === "block")
      return {
        title: title,
        subtitle: block
          ? block.children
              .filter(child => child._type === "span")
              .map(span => span.text)
              .join("")
          : "No title",
        media: illustration
      }
    }
  }
}

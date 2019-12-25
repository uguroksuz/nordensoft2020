import Features from "react-icons/lib/fa/tasks"

export default {
  name: "cases",
  type: "document",
  title: "Cases",
  icon: Features,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "url",
      type: "string",
      title: "URL"
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

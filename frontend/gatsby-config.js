const sanityManifest = require('../backend/sanity')
const {dataset, projectId} = sanityManifest.api

module.exports = {
  siteMetadata: {
    title: "Norden Soft",
    siteUrl: `https://nordensoft.dk`,
    theme: {
      background: "#FFFFFF",
      color: "#182E3F",
      accent: "#378386"
    }
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "norden-soft",
        short_name: "starter",
        start_url: "/",
        background_color: "#378386",
        theme_color: "#378386",
        display: "minimal-ui",
        // icon: "src/images/gatsby-icon.png" // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://nordensoft.dk',
        sitemap: 'https://nordensoft.dk/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "SANITY",
        // This is the field under which it's accessible
        fieldName: "sanity",
        // URL to query from; should be put in env?
        url: `https://${projectId}.api.sanity.io/v1/graphql/${dataset}/default`,
        refetchInterval: 10,
      }
    },
    // {
    //   resolve: 'gatsby-source-sanity',
    //   options: {
    //     projectId: 'yhydx5bc',
    //     dataset: 'production',
    //     token: 'skl0N5qdSjdwUGEvAa0JLYvAOnNGFGNGnZsyYlVkxj8ia4yCnT8JIwoTA3NvupCh68QPgnjiuWyl0wjfHcpKWtamK89lFpx8jtba60F7LeIytb6GLheagE4VQ2WpInEkl3WAUgr3PL1ZqMDZY0xqf1InHNAe2cWGrYZ3KXcxXNakM3xlk1ek',
    //     watchMode: false,
    //     overlayDrafts: false
    //   }
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
}

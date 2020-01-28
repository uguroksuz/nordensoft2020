import { StaticQuery, graphql } from "gatsby"
import React from "react"
import SiteFooter from "../components/SiteFooter"
import { ThemeContext } from "../contexts"

const query = graphql`
  {
    sanity: sanity {
      siteExtra: allSiteExtras {
        _key
        footerTextRaw
        footerContactBlockRaw
        footerFindBlockRaw
        contactFormTextRaw
        footerLogo {
          asset {
            size
            url
          }
          _key
        }
        contanctFormImage {
          asset {
            size
            url
          }
          _key
        }
      }
      company: CompanyInfo(id: "company-info") {
        contact {
          facebook
          whatsapp
          linkedin
        }
      }
    }
    aws: file(relativePath: { eq: "aws.png" }) {
      childImageSharp {
        fluid(maxWidth: 70, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    contentful: file(relativePath: { eq: "contentful.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dato: file(relativePath: { eq: "dato.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    firebase: file(relativePath: { eq: "firebase.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    forestry: file(relativePath: { eq: "forestry.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gatsby: file(relativePath: { eq: "gatsby.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hugo: file(relativePath: { eq: "hugo.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    netlify: file(relativePath: { eq: "netlify.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nextjs: file(relativePath: { eq: "nextjs.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nodejs: file(relativePath: { eq: "nodejs.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nowblack: file(relativePath: { eq: "now-black.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    react: file(relativePath: { eq: "react.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sanityimage: file(relativePath: { eq: "sanity.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    storyblok: file(relativePath: { eq: "storyblok.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`


class SiteFooterContainer extends React.Component {
  static contextType = ThemeContext

  render() {
    return (
      <StaticQuery
        query={query}
        render={data => (
          <SiteFooter {...data} {...this.props} theme={this.context} />
        )}
      />
    )
  }
}

export default SiteFooterContainer

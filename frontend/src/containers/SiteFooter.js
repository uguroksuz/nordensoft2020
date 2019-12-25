import { StaticQuery, graphql } from "gatsby"
import React from "react"
import SiteFooter from "../components/SiteFooter"
import { ThemeContext } from "../contexts"

const query = graphql`
  {
    sanity {
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

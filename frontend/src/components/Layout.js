import { StaticQuery, graphql } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import "../styles/bootstrap.min.css"
import "../styles/layout.css"
// import "./base.css"


class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    const { children, theme } = this.props
    return (
      <StaticQuery
        query={graphql`
          query seoSettings {
            sanity {
              allSiteSeoSettings {
                title
                description
                keywords
                schema
                googletagmanager
                analytics
                yandex
                bing
                yahoo
                hreflang
                ogImage {
                  asset {
                    url
                  }
                }
                favicon {
                  asset {
                    url
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.sanity.allSiteSeoSettings[0].title}
              meta={[
                { name: "description", content: data.sanity.allSiteSeoSettings[0].description },
                { name: "keywords", content: data.sanity.allSiteSeoSettings[0].keywords }
              ]}
              bodyAttributes={{
                style: { background: theme.background, color: theme.color }
              }}
            >
              <html lang={data.sanity.allSiteSeoSettings[0].hreflang} />
              <link rel="shortcut icon" href={data.sanity.allSiteSeoSettings[0].favicon.asset.url} />
              
              <script> 
                { data.sanity.allSiteSeoSettings[0].schema ?  data.sanity.allSiteSeoSettings[0].schema : null} 
              </script>
              <script> 
                { data.sanity.allSiteSeoSettings[0].googletagmanager ? data.sanity.allSiteSeoSettings[0].googletagmanager : null} 
              </script>
              
            </Helmet>
            <div className={`page-wrap pt-5 ${this.props.class}`} theme={theme} key={'wrap'}>
              {children}
            </div>
          </>
        )}
      />
    )
  }
}

export default Layout

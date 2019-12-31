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
    const { children, theme, og } = this.props;
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
        render={data => {
          return (
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
                <meta http-equiv="content-language" content={data.sanity.allSiteSeoSettings[0].hreflang} />

                <meta property="og:title" content={`${og.title}`} />
                <meta property="og:description" content={`${og.description}`} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.nordensoft.dk" />
                <meta property="og:image" content={`${og.image.asset.url}`} />

                <script type="application/ld+json">
                  {data.sanity.allSiteSeoSettings[0].schema ? data.sanity.allSiteSeoSettings[0].schema : null}
                </script>
                <script>
                  {data.sanity.allSiteSeoSettings[0].googletagmanager ? data.sanity.allSiteSeoSettings[0].googletagmanager : null}
                </script>

              </Helmet>
              <div className={`page-wrap pt-5 ${this.props.class}`} theme={theme} key={'wrap'}>
                {JSON.stringify(og)}
                {children}
              </div>
            </>
          )
        }}
      />
    )
  }
}

export default Layout

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
    const { children, theme } = this.props;
    let ogTitle       = (typeof this.props.og === "object") ? this.props.og.title : '';
    let ogDescription = (typeof this.props.og === "object") ? this.props.og.description : '';
    let ogImage       = (typeof this.props.og === "object") ? this.props.og.image.asset.url : '';
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

                <meta property="og:title" content={JSON.stringify(ogTitle)} />
                <meta property="og:description" content={JSON.stringify(ogDescription)} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.nordensoft.dk" />
                <meta property="og:image" content={JSON.stringify(ogImage)} />

                <script type="application/ld+json">
                  {data.sanity.allSiteSeoSettings[0].schema ? data.sanity.allSiteSeoSettings[0].schema : null}
                </script>
                <script>
                  {data.sanity.allSiteSeoSettings[0].googletagmanager ? data.sanity.allSiteSeoSettings[0].googletagmanager : null}
                </script>

              </Helmet>
              <div className={`page-wrap pt-5 ${this.props.class}`} theme={theme} key={'wrap'}>
                {/* {JSON.stringify(typeof this.props.og)} */}
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

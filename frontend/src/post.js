import { StaticQuery, graphql } from "gatsby"
import React from "react"
// import Article from "./components/Article"
import BlogPostList from "./containers/BlogPostList"
import Layout from "./containers/Layout"
import SiteNav from "./containers/SiteNav"
import SiteFooter from "./containers/SiteFooter"
import ScrollTop from './components/scrollTop'
import FloatForm from './components/floatForm'
import ModalStackProvider from "./providers/ModalStack"
import ThemeProvider from "./providers/Theme"
import BlockContent from "@sanity/block-content-to-react"

import {
  mapSharedNavigationToSiteNavProps,
  mapSharedNavigationToSiteFooterProps
} from "./lib/mapToProps"

const query = graphql`
  {
    sanity {
      allSharedNavigations {
        _id
        _type
        id
        navItems {
          ... on SANITY_NavSection {
            _key
            _type
            title
            navItems {
              ... on SANITY_NavItem {
                _key
                _type
                text
                external
                internal {
                  ... on SANITY_Route {
                    _id
                    slug {
                      current
                    }
                  }
                }
              }
            }
          }
          ... on SANITY_NavItem {
            _key
            _type
            text
            external
            internal {
              ... on SANITY_Route {
                _id
                slug {
                  current
                }
              }
            }
          }
        }
      }
    }
  }
`

// function mapPageContextToArticleProps(data) {
//   return {
//     headline: data.post.title,
//     introBlockContent: data.post.introRaw,
//     publishedAt: data.post.publishedAt,
//     blockContent: data.post.contentRaw,
//     media: data.post.featuredImage
//       ? {
//         type: "image",
//         src: data.post.featuredImage.asset.url
//       }
//       : null
//   }
// }

function mapAllSharedNavigationsToPropsObject(data) {
  return data.sanity.allSharedNavigations.reduce((obj, d) => {
    if (d.id === "mainNav") {
      obj.mainNav = mapSharedNavigationToSiteNavProps(d)
    }

    if (d.id === "footerNav") {
      obj.footerNav = mapSharedNavigationToSiteFooterProps(d)
    }

    return obj
  }, {})
}

const Page = ({ pageContext = {} }) => (
  <ThemeProvider>
    {theme => (
      <ModalStackProvider>
        {modalStackDepth => (
          <StaticQuery
            query={query}
            render={data => {
              const obj = mapAllSharedNavigationsToPropsObject(data)
              return (
                <Layout overlay={modalStackDepth > 0} og={(pageContext.post.openGraph != null) ? pageContext.post.openGraph : null}>
                  <SiteNav {...obj.mainNav} />
                  {/* <Article {...mapPageContextToArticleProps(pageContext)} /> */}
                  <div className="container">
                    <div className="row">
                      <div className={'col-md-12 py-5 mt-5'}>
                        <div className="row">
                          <div className="entry-body col-md-6">
                            <h1 className="mb-4">{pageContext.post.title}</h1>
                            <div>
                              {pageContext.post.introRaw && <BlockContent blocks={pageContext.post.introRaw} />}
                            </div>
                          </div>
                          <div className="entry-media col-md-6" theme={theme}>
                            {pageContext.post.featuredImage.asset.url && <img src={pageContext.post.featuredImage.asset.url} alt={pageContext.post.title} />}
                          </div>
                        </div>
                        <hr className="my-5" />
                      </div>
                      <div className="col-md-12 blog-single-content">
                        {pageContext.post.contentRaw && <BlockContent blocks={pageContext.post.contentRaw} />}
                      </div>
                    </div>
                  </div>
                  <BlogPostList headline="Latest blog posts" invert />
                  <ScrollTop />
                  <FloatForm />
                  <SiteFooter {...obj.footerNav} />
                </Layout>
              )
            }}
          />
        )}
      </ModalStackProvider>
    )}
  </ThemeProvider>
)

export default Page

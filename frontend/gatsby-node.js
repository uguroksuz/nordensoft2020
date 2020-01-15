/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
// Restart the dev server when you change the query
exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
  query {
    sanity {
      allPosts {
        featuredImage {
          alt
          asset {
            url
          }
        }
        title
        publishedAt
        openGraph {
          description
          title
          image {
            asset {
              _id
              url
              title
              label
            }
          }
          video {
            _key
            height
            width
            type
            file {
              asset {
                url
                title
                label
              }
            }
          }
        }
        slug {
          current
        }
        introRaw
        contentRaw
      }
      allRoutes {
        _id
        openGraph {
          description
          title
          image {
            asset {
              label
              url
              description
              title
              _id
            }
          }
          video {
            type
            file {
              asset {
                url
                title
                label
                _id
              }
            }
          }
          _key
          _type
        }
        slug {
          current
        }
        page {
          title
          customClass
          sections {
            __typename
            ... on SANITY_SharedSection {
              _key
              _type
              referencedSection {
                __typename
                ...on SANITY_SharedArticle {
                  _id
                  title
                  bodyRaw
                  customclass
                  color {
                    hex
                  }
                }
                ...on SANITY_SharedContactForm {
                  _key
                  _type
                  title
                }
                ... on SANITY_SharedPersons {
                  _key
                  _type
                  contentRaw
                  addressTitle
                  addressRaw
                  customclass
                  title
                  nsContactForm {
                    _key
                    _type
                    title
                  }
                  members {
                    person {
                      bioRaw
                      name
                      image {
                        asset {
                          url
                          label
                        }
                      }
                    }
                  }
                }
                ... on SANITY_SharedTableSection {
                  _key
                  title
                  description
                  customclass
                  myAwesomeTable {
                    _key
                    _type
                    rows {
                      cells
                      _type
                      _key
                    }
                  }
                }
                ... on SANITY_SharedSlider {
                  _key
                  _type
                  slides {
                    title
                    subtitle
                    descriptionRaw
                    buttonurl
                    buttontext
                    illustration {
                      alt
                      hotspot {
                        width
                        height
                      }
                      asset {
                        label
                        url
                      }
                    }
                  }
                  title
                }
                ...on SANITY_SharedPageHeader {
                  _id
                  title
                  bodyRaw
                }
                ...on SANITY_SharedCenterArticle {
                  _id
                  title
                  bodyRaw
                  image {
                    _key
                    asset {
                      url
                      size
                    }
                  }
                }
                ...on SANITY_SharedLetterDefinition {
                  _id
                  title
                  bodyRaw
                  image {
                    _key
                    asset {
                      url
                      size
                    }
                  }
                }
                ...on SANITY_SharedDefinition {
                  _id
                  title
                  bodyRaw
                  image {
                    _key
                    asset {
                      url
                      size
                    }
                  }
                }
                ... on SANITY_SharedCustomersBlock {
                  _key
                  _type
                  title
                  sections {
                    asset {
                      url
                    }
                  }
                }
                ... on SANITY_SharedCenterImageLayout {
                  _key
                  title
                  leftFeatures {
                    title
                    descriptionRaw
                    illustration {
                      asset {
                        url
                      }
                    }
                    _id
                  }
                  centerImage {
                    _key
                    asset {
                      url
                    }
                  }
                  rightFeatures {
                    _id
                    title
                    descriptionRaw
                    illustration {
                      asset {
                        url
                      }
                    }
                  }
                }
                ... on SANITY_SharedLeftImageArticle {
                  _key
                  title
                  bodyRaw
                  image {
                    asset {
                      url
                    }
                  }
                }
                ... on SANITY_SharedRightImageArticle {
                  _key
                  title
                  image {
                    asset {
                      url
                    }
                  }
                  bodyRaw
                }
                ... on SANITY_SharedSinglePageHeader {
                  _key
                  title
                  subtitle
                  url
                  buttontext
                  image {
                    asset {
                      url
                    }
                  }
                  bodyRaw
                }
                ... on SANITY_SharedLatestUpdates {
                  _id
                  title
                }
                ... on SANITY_SharedCallToAction {
                  _id
                  title
                  introRaw
                  buttons {
                    ... on SANITY_Cta {
                      _key
                      title
                      link
                      route {
                        slug {
                          current
                        }
                      }
                    }
                  }
                }
                ... on SANITY_SharedFeatureCollection {
                  _id
                  _type
                  title
                  features {
                    _id
                    title
                    descriptionRaw
                    illustration {
                      asset {
                        url
                      }
                    }
                  }
                }
                ... on SANITY_SharedCasesCollection {
                  cases {
                    url
                    title
                    illustration {
                      asset {
                        url
                      }
                    }
                  }
                  _key
                  bodyRaw
                  title
                }
                ... on SANITY_SharedPlanCollection {
                  _key
                  _type
                  title
                  plans {
                    price
                    features {
                      ... on SANITY_KeyValue {
                        _key
                        _type
                        key
                        value
                      }
                    }
                    priceType
                    title
                  }
                }
                ... on SANITY_SharedTestimonialCollection {
                  _id
                  _type
                  testimonials {
                    _key
                    _type
                    name
                    twitter
                  }
                }
                ... on SANITY_SharedNavigation {
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
            ... on SANITY_Navigation {
              _key
              id
              navItems {
                ... on SANITY_NavItem {
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

                ... on SANITY_NavSection {
                  title
                }
              }
            }
            ... on SANITY_TestimonialCollection {
              _key
              testimonials {
                _key
                _type
                twitter
              }
            }
            ... on SANITY_CallToAction {
              _key
              title
              introRaw
              buttons {
                _key
                title
              }
            }
            ... on SANITY_LatestUpdates {
              _key
              title
            }
            ... on SANITY_Article {
              _key
              title
              bodyRaw
              customclass
              color {
                hex
              }
            }
            ... on SANITY_ContactForm {
              _key
              _type
              title
            }
            ... on SANITY_Persons {
              _key
              _type
              contentRaw
              addressTitle
              addressRaw
              customclass
              title
              nsContactForm {
                _key
                _type
                title
              }
              members {
                person {
                  bioRaw
                  name
                  image {
                    asset {
                      url
                      label
                    }
                  }
                }
              }
            }
            ... on SANITY_TableSection {
              _key
              title
              description
              customclass
              myAwesomeTable {
                _key
                _type
                rows {
                  cells
                  _type
                  _key
                }
              }
            }
            ... on SANITY_Slider {
              _key
              _type
              slides {
                title
                subtitle
                descriptionRaw
                buttonurl
                buttontext
                illustration {
                  alt
                  hotspot {
                    width
                    height
                  }
                  asset {
                    label
                    url
                  }
                }
              }
              title
            }
            ... on SANITY_PageHeader {
              _key
              title
              bodyRaw
            }
            ... on SANITY_CenterArticle {
              _key
              title
              bodyRaw
              image {
                _key
                asset {
                  url
                  size
                }
              }
            }
            ... on SANITY_LetterDefinition {
              _key
              title
              bodyRaw
              image {
                _key
                asset {
                  url
                  size
                }
              }
            }
            ... on SANITY_Definition {
              _key
              title
              bodyRaw
              image {
                _key
                asset {
                  url
                  size
                }
              }
            }
            ... on SANITY_CustomersBlock {
              _key
              _type
              title
              sections {
                asset {
                  url
                }
              }
            }
            ... on SANITY_CenterImageLayout {
              _key
              title
              leftFeatures {
                title
                descriptionRaw
                illustration {
                  asset {
                    url
                  }
                }
                _id
              }
              centerImage {
                _key
                asset {
                  url
                }
              }
              rightFeatures {
                _id
                title
                descriptionRaw
                illustration {
                  asset {
                    url
                  }
                }
              }
            }
            ... on SANITY_LeftImageArticle {
              _key
              title
              bodyRaw
              image {
                asset {
                  url
                }
              }
            }
            ... on SANITY_RightImageArticle {
              _key
              title
              bodyRaw
              image {
                asset {
                  url
                }
              }
            }
            ... on SANITY_SinglePageHeader {
              _key
              title
              subtitle
              url
              buttontext
              image {
                asset {
                  url
                }
              }
              bodyRaw
            }
            ... on SANITY_FeatureCollection {
               _key
              title
              features {
                _key
                title
                descriptionRaw
              }
            }
            ... on SANITY_CasesCollection {
              cases {
                url
                title
                illustration {
                  asset {
                    url
                  }
                }
              }
              _key
              bodyRaw
              title
            }
            ... on SANITY_PlanCollection {
              _key
              _type
              title
              plans {
                price
                features {
                  ... on SANITY_KeyValue {
                    _key
                    _type
                    key
                    value
                  }
                }
                priceType
                title
              }
            }
          }
        }
      }
    }
  }
  `)

  data.sanity.allPosts.forEach(post => {
    // console.log("post", post.slug.current)
    actions.createPage({
      path: `/blog/${post.slug.current}/`,
      component: path.resolve(`./src/post.js`),
      context: {
        _id: post._id,
        post,
      }
    })
  })

  data.sanity.allRoutes.forEach(({ _id, slug, page, openGraph }) => {
    // console.log("route", slug.current)
    actions.createPage({
      path: slug.current === "/" ? "/" : `/${slug.current}/`,
      component: path.resolve(`./src/page.js`),
      context: {
        _id,
        page,
        openGraph
      }
    })
  })
}


// ... on SANITY_SharedHero {
//   _id
//   _type
//   title
//   tagLineRaw
//   ctas {
//     _key
//     link
//     title
//   }
// }

// ... on SANITY_Hero {
//   _key
//   title
//   tagLineRaw
//   ctas {
//         _key
//         link
//         title
//       }
// }
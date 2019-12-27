import { StaticQuery, graphql } from "gatsby"
import React from "react"
import BlogPostListGrid from "../components/BlogPostListGrid"
import { ThemeContext } from "../contexts"

const query = graphql`
  {
    sanity {
      posts: allPosts(offset: 0, limit: 12) {
        _id
        title
        publishedAt
        contentRaw
        introRaw
        slug {
          current
        }
        featuredImage {
          alt
          captionRaw
          asset {
            url
          }
        }
      }
    }
  }
`

function mapDataToProps({sanity}) {
  const {title, posts = []} = sanity || {}
  return {
    headline: title,
    items: (posts || []).map(post => ({
      key: post._id,
      title: post.title,
      publishedAt: post.publishedAt,
      to: `/blog/${post.slug.current}/`,
      introBlockContent: null,
      image: post.featuredImage ? { src: post.featuredImage.asset.url } : null,
      text: post.introRaw,
    })),
    moreLink: {
      title: "See more",
      to: "/blog/"
    }
  }
}

class BlogPostList extends React.Component {
  static contextType = ThemeContext

  render() {
    return (
      <StaticQuery
        query={query}
        render={data => (
          <BlogPostListGrid
            {...mapDataToProps(data)}
            {...this.props}
            theme={this.context}
          />
        )}
      />
    )
  }
}

export default BlogPostList

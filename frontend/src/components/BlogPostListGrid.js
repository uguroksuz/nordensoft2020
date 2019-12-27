import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import BlockContent from "@sanity/block-content-to-react"
// import Button from "./Button"
// import { fontScale, media, padding, width } from "./vars"


const CardText = styled.div`
  opacity: 0.7;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  p {
    overflow: hidden;
  }
`

const CardTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-bottom: 12px !important;
`

const BlogPostListGrid = ({ headline, items, theme }) => (

  <div className="container py-5">
    <h2 className="blog-head-title py-5"> — {headline} — </h2>
    <div className="row">
      {items.map((item, i) => (
        <div className={'col-md-6'} key={item.key}>
          <Link to={item.to} className="entry">
            <div className="row">
              <div className="entry-body col-md-6">
                <CardTitle className="title">{item.title}</CardTitle>
                <CardText>
                  {item.text && <BlockContent blocks={item.text} />}
                </CardText>
              </div>
              <div className="entry-media col-md-6" theme={theme}>
                {item.image && <img src={item.image.src} alt="" />}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
)

export default BlogPostListGrid

import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import BlockContent from "@sanity/block-content-to-react"
// import Button from "./Button"
// import { fontScale, media, padding, width } from "./vars"


const CardText = styled.div`
  opacity: 0.7;
`

const LinkCardGrid = ({ headline, items, theme }) => (

  <div className="container py-5">
    <h2 className="py-4">{headline}</h2>
    <div className="row">
      {items.map((item, i) => (
        <div className={i === 0 ? 'col-md-12 mb-5' : 'col-md-6'} key={item.key}>
          <Link to={item.to} className="entry">
            <div className="row">
              <div className="entry-body col-md-6">
                <div className="title">{item.title}</div>
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

export default LinkCardGrid

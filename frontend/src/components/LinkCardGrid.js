import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
// import Button from "./Button"
// import { fontScale, media, padding, width } from "./vars"


const CardText = styled.div`
  opacity: 0.7;
`

const LinkCardGrid = ({ headline, items, theme }) => (

  <div className="container py-5">
    <h2>{headline}</h2>
    <div className="row">
      <div className="col col-xs-12">
        <div className="blog-grids">
          {items.map(item => (
            <div className="grid" key={item.key}>
              <div className="entry-media" theme={theme}>
                {item.image && <img src={item.image.src} alt="" />}
              </div>
              <div className="entry-body">
                <Link to={item.to}>
                  <h3>{item.title}</h3>
                </Link>
                <CardText>{item.text}</CardText>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

        )

export default LinkCardGrid

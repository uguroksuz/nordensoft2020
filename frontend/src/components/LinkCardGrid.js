import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
// import Button from "./Button"
// import { fontScale, media, padding, width } from "./vars"


const CardText = styled.div`
  opacity: 0.7;
`

const LinkCardGrid = ({ headline, items, theme }) => (

  <div class="container py-5">
    <h2>{headline}</h2>
    <div class="row">
      <div class="col col-xs-12">
        <div class="blog-grids">
          {items.map(item => (
            <div class="grid" key={item.key}>
              <div class="entry-media" theme={theme}>
                {item.image && <img src={item.image.src} alt="" />}
              </div>
              <div class="entry-body">
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

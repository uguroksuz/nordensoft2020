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
    <h2 className="blog-head-title py-5">{headline}</h2>
    <div className="row">
      <div className={'col-md-12 mb-5'}>
        <Link to={items[0].to} className="entry head-entry">
          <div className="row">
            <div className="entry-body col-md-6">
              <div className="title">{items[0].title}</div>
              <CardText>
                {items[0].text && <BlockContent blocks={items[0].text} />}
              </CardText>
            </div>
            <div className="entry-media col-md-6" theme={theme}>
              {items[0].image && <img src={items[0].image.src} alt="blogImage" />}
            </div>
          </div>
        </Link>
      </div>
      <div className="threeblock">
        <div className="row">
          <div className="col-md-6">
            <Link to={items[1].to} className="entry">
              <div className="row">
                <div className="entry-media col-md-12" theme={theme}>
                  {items[1].image && <img src={items[1].image.src} alt="blogImage" />}
                </div>
                <div className="entry-body col-md-12">
                  <div className="title">{items[1].title}</div>
                  <CardText>
                    {items[1].text && <BlockContent blocks={items[1].text} />}
                  </CardText>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-6 p-0">
            <div className="col-md-12">
              <Link to={items[2].to} className="entry">
                <div className="row">
                  <div className="entry-body col-md-6">
                    <div className="title">{items[2].title}</div>
                    <CardText>
                      {items[2].text && <BlockContent blocks={items[2].text} />}
                    </CardText>
                  </div>
                  <div className="entry-media col-md-6" theme={theme}>
                    {items[2].image && <img src={items[2].image.src} alt="blogImage" />}
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-12">
              <Link to={items[3].to} className="entry">
                <div className="row">
                  <div className="entry-body col-md-6">
                    <div className="title">{items[3].title}</div>
                    <CardText>
                      {items[3].text && <BlockContent blocks={items[3].text} />}
                    </CardText>
                  </div>
                  <div className="entry-media col-md-6" theme={theme}>
                    {items[3].image && <img src={items[3].image.src} alt="blogImage" />}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {items.map((item, i) => (
        (i === 0 || i === 1 || i === 2 || i === 3) ? null :
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

import React from "react"
import BlockContent from "@sanity/block-content-to-react"
// import Persons from './Persons'

const Article = ({
  headline,
  blockContent,
  customclass,
  color
}) => (
    <>
      {typeof color == 'string' ?
        <article style={{ background: color }}>
          <div className="container pt-5 pb-5">
            <div className="row">
              <div className={`${customclass}`}>
                {headline != null ? <h2>{headline}</h2> : null}
                {blockContent && <BlockContent blocks={blockContent} />}
              </div>
            </div>
          </div>
        </article>
        :
        <article>
          <div className="container pt-5 pb-5">
            <div className="row">
              <div className={`${customclass}`}>
                {headline != null ? <h2 className="py-5">{headline}</h2> : null}
                {blockContent && <BlockContent blocks={blockContent} />}
              </div>
            </div>
          </div>
        </article>
      }
    </>
  )

export default Article

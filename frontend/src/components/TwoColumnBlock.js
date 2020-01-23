import React from "react"
import BlockContent from "@sanity/block-content-to-react"

const LeftImageArticleSubpage = ({
  headline,
  blockContentLeft,
  blockContentRight,
  color
}) => (
    <article className="image-block" style={{ background: color }}>
      <div className="container pt-5 pb-5 ">
        <h2 className="text-center pt-3">{headline}</h2>
        <div className="row pb-5">
          <div className="col-md-6 pt-5 image-block-content">
            {blockContentLeft && <BlockContent blocks={blockContentLeft} />}
          </div>
          <div className="col-md-6 pt-5 image-block-content">
            {blockContentRight && <BlockContent blocks={blockContentRight} />}
          </div>
        </div>
      </div>
    </article>
  )

export default LeftImageArticleSubpage

import React from "react"
import BlockContent from "@sanity/block-content-to-react"

const RightImageArticleSubpage = ({
  headline,
  blockContent,
  imageSrc,
  color
}) => (
    <article className="image-block" style={{ background: color }}>
      <div className="container pt-5 pb-5 ">
        <h2 className="text-center py-3">{headline}</h2>
        <div className="row pt-5">
          <div className="col-md-6 pt-5 image-block-content">
            {blockContent && <BlockContent blocks={blockContent} />}
          </div>
          <div className="col-md-6 image-block-content">
            <img src={imageSrc} alt="rightimage" className="attachment-full size-full img-fluid" />
          </div>
        </div>
      </div>
    </article>
  )

export default RightImageArticleSubpage

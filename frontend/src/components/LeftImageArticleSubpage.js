import React from "react"
import BlockContent from "@sanity/block-content-to-react"

const LeftImageArticleSubpage = ({
  headline,
  blockContent,
  imageSrc,
  color
}) => (
    <article className="image-block" style={{ background: color }}>
      <div className="container pt-5 pb-5 ">
        <h2 className="text-center py-3">{headline}</h2>
        <div className="row py-5">
          <div className="col-md-6">
            <img src={imageSrc} alt="leftimage" className="attachment-full size-full img-fluid" />
          </div>
          <div className="col-md-6 pt-5">
            {blockContent && <BlockContent blocks={blockContent} />}
          </div>
        </div>
      </div>
    </article>
  )

export default LeftImageArticleSubpage

import React from "react"
import BlockContent from "@sanity/block-content-to-react"

const LeftImageArticle = ({
  headline,
  blockContent,
  imageSrc,
}) => (
    <div className="container pt-5 pb-5 ">
      <h2 className="text-center py-3">{headline}</h2>
      <div className="row pt-5">
        <div className="col-md-7">
          <img src={imageSrc} alt="leftimage" className="attachment-full size-full img-fluid" />
        </div>
        <div className="col-md-5 pt-5">
          {blockContent && <BlockContent blocks={blockContent} />}
        </div>
      </div>
    </div>
  )

export default LeftImageArticle

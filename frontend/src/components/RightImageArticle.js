import React from "react"
import BlockContent from "@sanity/block-content-to-react"

const RightImageArticle = ({
  headline,
  blockContent,
  imageSrc,
}) => (
    <div className="container pt-5 pb-5 ">
      <h2 className="text-center py-3">{headline}</h2>
      <div className="row pt-5">
        <div className="col-md-8 pt-5">
          {blockContent && <BlockContent blocks={blockContent} />}
        </div>
        <div className="col-md-4">
          <img src={imageSrc} alt="rightimage" className="attachment-full size-full img-fluid" />
        </div>
      </div>
    </div>
  )

export default RightImageArticle

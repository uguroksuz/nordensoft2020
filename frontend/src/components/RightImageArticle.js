import React from "react"
import BlockContent from "@sanity/block-content-to-react"

const RightImageArticle = ({
  headline,
  blockContent,
  imageSrc,
}) => (
    <div class="container pt-5 pb-5 ">
      <h2 class="text-center py-3">{headline}</h2>
      <div class="row pt-5">
        <div class="col-md-8 pt-5">
          {blockContent && <BlockContent blocks={blockContent} />}
        </div>
        <div class="col-md-4">
          <img src={imageSrc} alt="rightimage" class="attachment-full size-full img-fluid" />
        </div>
      </div>
    </div>
  )

export default RightImageArticle

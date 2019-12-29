import React from "react"
import BlockContent from "@sanity/block-content-to-react"

const SinglePageHeader = ({
  headline,
  subtitle,
  url,
  buttontext,
  blockContent,
  imageSrc,
}) => (
    <div className="container-fluid single-page-header">
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6 left-col">
            <h1>{headline}</h1>
            <div className="single-page-subtitle">{subtitle}</div>
            {blockContent && <BlockContent blocks={blockContent} />}
            <div className="button-container">
              {url != null ? <a href={url} className="single-page-outline-btn">{buttontext}</a> : null}
            </div>
          </div>
          <div className="col-md-6">
            <img src={imageSrc} alt="rightimage" className="attachment-full size-full img-fluid" />
          </div>
        </div>
      </div>
    </div>
  )

export default SinglePageHeader

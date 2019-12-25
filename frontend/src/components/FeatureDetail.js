import BlockContent from "@sanity/block-content-to-react"
import React from "react"
// import styled from "styled-components"
// import { media, padding } from "./vars"

const FeatureDetail = ({ title, descriptionBlock, illustration }) => (
  <div className="col-md-12">
    <div className="w-iconbox-icon">
      <img src={illustration.asset.url} alt="" />
    </div>
    <div className="w-iconbox-meta">
      <h4 className="title">{title}</h4>
      <BlockContent blocks={descriptionBlock} />
    </div>
  </div>
)

export default FeatureDetail
import React from "react"
import BlockContent from "@sanity/block-content-to-react"

const Definition = ({
  headline,
  imageSrc,
  blockContent,
}) => (
    <div className="letter-definition">
      <img className="letter" src={imageSrc} alt="definition" />
      <div className="definitin-content">
        <h1 className="title">{headline}</h1>
        <div>{blockContent && <BlockContent blocks={blockContent} />}</div>
      </div>
    </div>
  );

export default Definition

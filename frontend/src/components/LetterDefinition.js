import React from "react"
import BlockContent from "@sanity/block-content-to-react"

const LetterDefinition = ({
  headline,
  imageSrc,
  blockContent,
}) => (
    <div className="letter-definition">
      <img className="letter" src={imageSrc} alt="letterimage" />
      <div className="definitin-content">
        <h1 className="title">{headline}</h1>
        <div>{blockContent && <BlockContent blocks={blockContent} />}</div>
      </div>
    </div>
  );

export default LetterDefinition

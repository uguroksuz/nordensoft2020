import React from "react"
import BlockContent from "@sanity/block-content-to-react"

const LetterDefinition = ({
  headline,
  blockContent,
  cases,
}) => (
    <div id="cases" className="container-fluid cases-block pt-5 pb-5" >
      <div className="container text-center pt-5 pb-5 ">
        <div className="row">
          <div className="col-md-12">
            <h2>{headline}</h2>
            <div>{blockContent && <BlockContent blocks={blockContent} />}</div>
          </div>
        </div>
        <div className="row pt-5 pb-5  mt-5">
          {cases.map(q => (
            <div className="col-md-4">
              <img src={q.illustration.asset.url} className="attachment-full size-full img-fluid" alt="BMW Shop Turkey" />
              <h4><a href={q.url} target="_blank" rel="noopener noreferrer" data-slimstat="5">{q.title}</a></h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

export default LetterDefinition




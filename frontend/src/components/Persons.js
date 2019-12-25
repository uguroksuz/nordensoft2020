import React from "react"
import BlockContent from "@sanity/block-content-to-react"

const Persons = ({
  headline,
  blockContent,
  customclass,
  members,
  addressTitle,
  addressRaw,
}) => (
    <div className={`container py-5 ${customclass}`}>
      <div className="row my-5">
        <div className="col-md-8">
          <h2>{headline}</h2>
          {blockContent && <BlockContent blocks={blockContent} />}
          <div className="row">
            {members.map((member, i) => (
              <div className="col-md-4" key={i}>
                <img src={member.person.image.asset.url} className="attachment-full size-full img-fluid" alt={member.person.name} />
                <figcaption className="py-2">{member.person.name}</figcaption>
                {member.person.bioRaw && <BlockContent blocks={member.person.bioRaw} />}
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <h2>{addressTitle}</h2>
          {addressRaw && <BlockContent blocks={addressRaw} />}
        </div>
      </div>
    </div>
  );

export default Persons




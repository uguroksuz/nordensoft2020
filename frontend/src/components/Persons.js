import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import ContactForm from "./ContactForm"

const Persons = ({
  headline,
  blockContent,
  customclass,
  members,
  addressTitle,
  addressRaw,
  // nsContactForm
}) => (
    <article className="contact-block">
      <div className={`container py-5 ${customclass}`}>
        <div className="row my-5">
          <div className="col-lg-8">
            <h2>{headline}</h2>
            {blockContent && <BlockContent blocks={blockContent} />}
            <div className="row">
              <div className="col-lg-12">
                <ContactForm />
              </div>
            </div>
            <div className="row">
              {members.map((member, i) => (
                <div className="col-lg-4" key={i}>
                  <img src={member.person.image.asset.url} className="attachment-full size-full img-fluid" alt={member.person.name} />
                  <figcaption className="py-2">{member.person.name}</figcaption>
                  {member.person.bioRaw && <BlockContent blocks={member.person.bioRaw} />}
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <h2>{addressTitle}</h2>
            {addressRaw && <BlockContent blocks={addressRaw} />}
          </div>
        </div>
      </div>
    </article>
  );

export default Persons




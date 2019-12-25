import React from "react"

const CustomersBlock = ({
  headline,
  sections,
}) => (

    <div className="container-fluid kunder-bg pt-5 pb-5 ">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="mb-5">{headline}</h2>
          {sections.map((item ,i) => {
            return <img className="letter mx-2 img-fluid" src={item.asset.url}  alt="Kunder" key={i} />
          })}
        </div>
      </div>
    </div>
  );

export default CustomersBlock

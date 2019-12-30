import React from "react"
// import BlockContent from "@sanity/block-content-to-react"

const PlansCollection = ({
  headline,
  _source,
}) => (
    <div id="cases" className="container-fluid pt-5" >
      <div className="container text-center pt-5 ">
        <div className="row">
          <div className="col-md-12">
            <h1 className="font-2rem"> {headline} </h1>
          </div>
        </div>
        <div id="generic_price_table">
          <div className="container">
            <div className="row">
              {_source.plans.map((plan, i) => {
                let starterClass = (i === 0) ? 'starter' : '';
                let professionalClass = (i === 1) ? 'professional' : '';
                let enterpriseClass = (i === 2) ? 'enterprise' : '';
                return(
                <div className="col-md-4" key={i}>
                  <div className={`generic_content ${starterClass} ${professionalClass} ${enterpriseClass} clearfix`}>
                    <div className="generic_head_price clearfix">
                      <div className="generic_head_content clearfix">
                        <div className="head_bg"></div>
                        <div className="head">
                          <span>{plan.title}</span>
                        </div>
                      </div>
                      <div className="generic_price_tag clearfix">
                        <span className="price">
                          <span className="sign">$</span>
                          <span className="currency">{plan.price}</span>
                          {/* <span className="cent">.00</span> */}
                          <span className="month">/{plan.priceType}</span>
                        </span>
                      </div>
                    </div>
                    <div className="generic_feature_list">
                      <ul>
                        {plan.features.map((feature, i) => (
                          <li key={i}>{feature.value}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )})}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

export default PlansCollection




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
            <h1> — {headline} — </h1>
          </div>
        </div>
        <div id="generic_price_table">
          <div className="container">
            {/* <!--BLOCK ROW START--> */}
            <div className="row">
              {_source.plans.map((plan, i) => (
                <div className="col-md-4">
                  {/* <!--PRICE CONTENT START--> */}
                  <div className={`generic_content ${ i === 1 ? 'active' : '' } clearfix`}>
                    {/* <!--HEAD PRICE DETAIL START--> */}
                    <div className="generic_head_price clearfix">
                      {/* <!--HEAD CONTENT START--> */}
                      <div className="generic_head_content clearfix">
                        {/* <!--HEAD START--> */}
                        <div className="head_bg"></div>
                        <div className="head">
                          <span>{plan.title}</span>
                        </div>
                        {/* <!--//HEAD END--> */}
                      </div>
                      {/* <!--//HEAD CONTENT END--> */}
                      {/* <!--PRICE START--> */}
                      <div className="generic_price_tag clearfix">
                        <span className="price">
                          <span className="sign">$</span>
                          <span className="currency">{plan.price}</span>
                          <span className="cent">.00</span>
                          <span className="month">/{plan.priceType}</span>
                        </span>
                      </div>
                      {/* <!--//PRICE END--> */}
                    </div>
                    {/* <!--//HEAD PRICE DETAIL END--> */}
                    {/* <!--FEATURE LIST START--> */}
                    <div className="generic_feature_list">
                      <ul>
                        {plan.features.map(feature => (
                          <li>{feature.value}</li>
                        ))}
                      </ul>
                    </div>
                    {/* <!--//FEATURE LIST END--> */}
                    {/* <!--BUTTON START--> */}
                    {/* <div className="generic_price_btn clearfix">
                      <a className="" href="">Sign up</a>
                    </div> */}
                    {/* <!--//BUTTON END--> */}
                  </div>
                  {/* <!--//PRICE CONTENT END--> */}
                </div>

              ))}

            </div>
            {/* <!--//BLOCK ROW END--> */}
          </div>
        </div>



        {/* <div className="row pt-5 pb-5  mt-5">
          {cases.map((q, i) => (
            <div className="col-md-4" key={i}>
              <img src={q.illustration.asset.url} className="attachment-full size-full img-fluid" alt="BMW Shop Turkey" />
              <h4><a href={q.url} target="_blank" rel="noopener noreferrer" data-slimstat="5">{q.title}</a></h4>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );

export default PlansCollection




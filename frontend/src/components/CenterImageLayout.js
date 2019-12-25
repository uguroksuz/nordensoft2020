import React from "react"
import FeatureDetail from "./FeatureDetail"

const CenterImageLayout = ({
  headline,
  imageSrc,
  leftFeatures,
  rightFeatures,
}) => (
    <div id="magento" className="container text-center py-5">
      <h2 className="mb-5">{headline}</h2>
      <div className="row py-5">
        <div className="col-md-4">
          {leftFeatures.map(feature => (
            <FeatureDetail key={feature.key} {...feature} />
          ))}
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <img style={{ width: "321" }} alt={'magento'} src={imageSrc} className="d-inline-block" />
        </div>
        <div className="col-md-4">
          {rightFeatures.map(feature => (
            <FeatureDetail key={feature.key} {...feature} />
          ))}
        </div>
      </div>
    </div>
  )

export default CenterImageLayout

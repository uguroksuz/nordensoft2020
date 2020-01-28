import React from "react"
import { Link } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import ReactSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  accessibility: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000
};

const Slider = ({
  slides,
}) => (
    <div id="cases" className="container-fluid slider-block py-5" >
      <div className="container py-3">
        <ReactSlider {...settings}>
          {slides.map((slide, i) => (
            <div className="slide" key={i}>
              <div className="row">
                <div className="col-md-12 mb-5">
                  <h1>{slide.title}</h1>
                  <h3>{slide.subtitle}</h3>
                </div>
                <div className="col-md-6">
                  <img src={slide.illustration.asset.url} className="img-fluid" alt="slide" />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                  <div className="w-100 px-5 my-4">
                    {slide.descriptionRaw && <BlockContent blocks={slide.descriptionRaw} />}
                  </div>
                  <div className="w-100 px-5 text-center">
                    {slide.buttonurl && <Link className="btn btn-light" to={slide.buttonurl}> {slide.buttontext} </Link>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ReactSlider>
      </div>
    </div>
  );

export default Slider




import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

export default function RtLSlider() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 1368,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="">
      <Slider {...settings}>
        <div className="Ritem">
        <img src="./assets/image/11.png" className="Ritem_img" />      
        </div>
        <div className="Ritem">
          <img src="./assets/image/12.png" className="Ritem_img" />      
        </div>
        <div className="Ritem">
          <img src="./assets/image/13.png" className="Ritem_img" />      
        </div>
        <div className="Ritem">
          <img src="./assets/image/14.png" className="Ritem_img" />      
        </div>
        <div className="Ritem">
          <img src="./assets/image/15.png" className="Ritem_img" />      
        </div>
        <div className="Ritem">
          <img src="./assets/image/16.png" className="Ritem_img" />    
        </div>
        <div className="Ritem">
          <img src="./assets/image/17.png" className="Ritem_img" />
        </div>
        <div className="Ritem">
          <img src="./assets/image/18.png" className="Ritem_img" />
        </div>
        <div className="Ritem">
          <img src="./assets/image/19.png" className="Ritem_img" />
        </div>
        <div className="Ritem">
          <img src="./assets/image/20.png" className="Ritem_img" />
        </div>
      </Slider>
    </div>
  );
}
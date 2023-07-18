import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo1 from '../assets/group1.png';
import photo2 from '../assets/group2.png';
import photo3 from '../assets/group3.png';
import './slick.css'

const SlickReact = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slick-container">
      <Slider ref={sliderRef} {...settings}>
        <div>
          <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consectetur!</h2>
          <img src={photo1} alt="" />
        </div>
        <div>
          <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consectetur!</h2>
          <img src={photo2} alt="" />
        </div>
        <div>
          <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, consectetur!</h2>
          <img src={photo3} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SlickReact;

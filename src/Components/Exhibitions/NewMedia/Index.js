import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Style.css";

const Index = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <>
      <div className="whole-coursel">
        <div className="image-coursel">
          <h3> Newmedia Artwork</h3>
          <Slider {...settings}>
            <div className="image-slide">
              <img src="images/img-1.jpg" />
              <div className="slide-info">
                <div className="s-title">Ugly Told</div>
                <div className="s-price">npr.1200</div>
                <div className="s-author">by Rajesh</div>
              </div>
            </div>
            <div className="image-slide">
              <img src="images/img-2.jpg" />
              <div className="slide-info">
                <div className="s-title">Evelyn</div>
                <div className="s-price">npr.100</div>
                <div className="s-author">by Rajesh</div>
              </div>
            </div>
            <div className="image-slide">
              <img src="images/img-3.jpg" />
              <div className="slide-info">
                <div className="s-title">Dust</div>
                <div className="s-price">npr.200</div>
                <div className="s-author">by Rajesh</div>
              </div>
            </div>
            <div className="image-slide">
              <img src="images/img-4.png" />
              <div className="slide-info">
                <div className="s-title">Steel</div>
                <div className="s-price">npr.1100</div>
                <div className="s-author">by Rajesh</div>
              </div>
            </div>
            <div className="image-slide">
              <img src="images/img-5.jpg" />
              <div className="slide-info">
                <div className="s-title">Ugly Told</div>
                <div className="s-price">npr.1200</div>
                <div className="s-author">by Rajesh</div>
              </div>
            </div>
            <div className="image-slide">
              <img src="images/img-6.jpg" />
              <div className="slide-info">
                <div className="s-title">Ugly Told</div>
                <div className="s-price">npr.1200</div>
                <div className="s-author">by Rajesh</div>
              </div>
            </div>
            <div className="image-slide">
              <img src="images/img-7.jpeg" />
              <div className="slide-info">
                <div className="s-title">Ugly Told</div>
                <div className="s-price">npr.1200</div>
                <div className="s-author">by Rajesh</div>
              </div>
            </div>
            <div className="image-slide">
              <img src="images/img-8.jpeg" />
              <div className="slide-info">
                <div className="s-title">Ugly Told</div>
                <div className="s-price">npr.1200</div>
                <div className="s-author">by Rajesh</div>
              </div>
            </div>
            <div className="image-slide">
              <img src="images/img-9.jpeg" />
              <div className="slide-info">
                <div className="s-title">Ugly Told</div>
                <div className="s-price">npr.1200</div>
                <div className="s-author">by Rajesh</div>
              </div>
            </div>
            <div className="image-slide">
              <img src="images/img-10.jpeg" />
              <div className="slide-info">
                <div className="s-title">Ugly Told</div>
                <div className="s-price">npr.1200</div>
                <div className="s-author">by Rajesh</div>
              </div>
            </div>
            <div className="image-slide">
              <img src="images/img-12.jpg" />
              <div className="slide-info">
                <div className="s-title">Ugly Told</div>
                <div className="s-price">npr.1200</div>
                <div className="s-author">by Rajesh</div>
              </div>
            </div>
          </Slider>
        </div>
        {/* <hr /> */}
      </div>
    </>
  );
};
export default Index;

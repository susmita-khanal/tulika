import React from "react";
import Category from "../../Category";
import Sdata from "./Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Style.css";

const Studios = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const settings = {
    dots: true,
    backgroundColor: "black",
    infinite: true,
    // width: 200,
    speed: 500,
    // height: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="gallery-container">
        <h1>Studios</h1>
      </div>
      <Category
        openModal={openModal}
        afterOpenModal={afterOpenModal}
        modalIsOpen={modalIsOpen}
        // Modal={Modal}
        closeModal={closeModal}
        customStyles
      />
      <div className="studios">
        <div className="studios-container">
          {Sdata.map((c) => {
            return (
              <>
                <div className="studio-img-info-slide">
                  <div className="studio-map">
                    <div className="studio-image">
                      <img src={c.imgscr} alt="" />
                    </div>
                    <div className="studio-info">
                      <div className="studio-title">{c.title}</div>
                      <div className="studio-followers">{c.follower}</div>
                      <div className="studio-button">
                        <button className="follow">Follow</button>
                        <button className="profile">Profile</button>
                      </div>
                      <div className="studio-desc">{c.desc}</div>
                    </div>
                  </div>
                  <div className="studio-small-slide">
                    <div className="image-studio-small-slide">
                      <img src="images/img-1.jpg" />
                    </div>
                    <div className="image-studio-small-slide">
                      <img src="images/img-1.jpg" />
                    </div>
                  </div>
                </div>
                <div className="studios-slide">
                  <Slider {...settings}>
                    <div className="image-studio-slide">
                      <img src="images/img-1.jpg" />
                    </div>
                    <div className="image-studio-slide">
                      <img src="images/img-1.jpg" />
                    </div>
                    <div className="image-studio-slide">
                      <img src="images/img-1.jpg" />
                    </div>
                    <div className="image-studio-slide">
                      <img src="images/img-1.jpg" />
                    </div>
                  </Slider>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Studios;

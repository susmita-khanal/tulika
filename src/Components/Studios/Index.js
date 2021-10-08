import React from "react";
import Category from "../../Category";
import Sdata from "./Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Style.css";
import ThemeToggleBtn from "../ThemeToggleBtn";
import { useSelector } from "react-redux";

const Studios = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const myTheme = useSelector((state) => state.changeTheme.theme);
  const textColor = myTheme === "light" ? "#000" : "#fff";
  const settings = {
    dots: false,
    backgroundColor: "black",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
        style={{ color: textColor }}
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
                <div
                  className="whole"
                  style={{
                    background: myTheme === "dark" ? "#000" : "#fff",
                    color: textColor,
                  }}
                >
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
                          <button className="profile-button">Profile</button>
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
                    <Slider {...settings} className="slide-class">
                      <div className="image-studio-slide">
                        <img src="images/img-1.jpg" />
                      </div>
                      <div className="image-studio-slide">
                        <img src="images/img-2.jpg" />
                      </div>
                      <div className="image-studio-slide">
                        <img src="images/img-3.jpg" />
                      </div>
                      <div className="image-studio-slide">
                        <img src="images/img-5.jpg" />
                      </div>
                    </Slider>
                  </div>
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

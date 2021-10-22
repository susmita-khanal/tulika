import React from "react";
import { useSelector } from "react-redux";
import Sdata from "./Sdata";
import "./Style.css";

const Index = () => {
  const myTheme = useSelector((state) => state.changeTheme.theme);
  const textColor = myTheme === "light" ? "#000" : "#fff";
  return (
    <>
      <div
        className="featured"
        style={{
          background: myTheme === "dark" ? "#000" : "#fff",
          color: textColor,
        }}
      >
        <div className="featured-container">
          <h3>Featured Artwork</h3>
          <div className="featured-box">
            {Sdata.map((cval) => {
              return (
                <>
                  <div className="featured-map">
                    <div className="feature-img">
                      <img src={cval.imgscr} alt="" />
                    </div>

                    <div className="feature-infos">
                      <div className="feature-title">{cval.title}</div>
                      <div className="feature-price">{cval.price}</div>
                      <div className="feature-title-info">{cval.titleinfo}</div>
                    </div>
                  </div>
                </>
              );
            })}
            <div className="showless">
              <button className="show">Show Less</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

import React from "react";
import Sdata from "./Sdata";
import "./Style.css";
import { useSelector } from "react-redux";

const Index = () => {
  const myTheme = useSelector((state) => state.changeTheme.theme);
  const textColor = myTheme === "light" ? "#000" : "#fff";
  return (
    <>
      <div
        className="catagories"
        style={{
          background: myTheme === "dark" ? "#000" : "#fff",
          color: textColor,
        }}
      >
        <h3>Catagories</h3>
        <div className="catagories-container">
          {Sdata.map((cval) => {
            return (
              <>
                <div className="c-map">
                  <div className="c-img">
                    <img src={cval.imgscr} alt="" />
                  </div>
                  <div className="catagory-infos">
                    <div className="c-title-info">{cval.titleinfo}</div>
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

export default Index;

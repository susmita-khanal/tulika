import React from "react";
import { useSelector } from "react-redux";
import "./Home.css";
import ExiData from "./ExiData";
import Categories from "../Categories/Index";
import Featured from "../Featured/Index";
import NewMedia from "../NewMedia/Index";

const Home = () => {
  const myTheme = useSelector((state) => state.changeTheme.theme);
  const textColor = myTheme === "light" ? "#000" : "#fff";
  return (
    <>
      <div
        className="cover-image"
        style={{
          background: myTheme === "dark" ? "#000" : "#fff",
          color: textColor,
        }}
      >
        <img src="images/img-6.jpg" alt="" />
      </div>
      <div
        className="exhibition-down"
        style={{
          background: myTheme === "dark" ? "#000" : "#fff",
          color: textColor,
        }}
      >
        <div
          className="exhibition"
          style={{
            background: myTheme === "dark" ? "#000" : "#fff",
            color: textColor,
          }}
        >
          {ExiData.map((cval) => {
            return (
              <>
                <div
                  className="exhibition-map"
                  style={{
                    background: myTheme === "dark" ? "#000" : "#fff",
                    color: textColor,
                  }}
                >
                  <div className="ex-img">
                    <img src={cval.imgscr} alt="" />
                  </div>

                  <div className="ex-infos">
                    <div className="ex-title">{cval.title}</div>
                    <div className="ex-desc">__</div>
                    <div className="ex-title-info">{cval.titleinfo}</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Categories />
      <Featured />
      <NewMedia />
      <NewMedia />
    </>
  );
};

export default Home;

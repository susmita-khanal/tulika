import React from "react";
import "./Home.css";
import ExiData from "./ExiData";
import Categories from "../Categories/Index";
import Featured from "../Featured/Index";
import NewMedia from "../NewMedia/Index";

const Home = () => {
  return (
    <>
      <div className="cover-image">
        <img src="images/img-6.jpg" alt="" />
      </div>
      <div className="exhibition-down">
        <div className="exhibition">
          {ExiData.map((cval) => {
            return (
              <>
                <div className="exhibition-map">
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

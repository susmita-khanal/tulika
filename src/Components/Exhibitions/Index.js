import React, { useState } from "react";
import { useSelector } from "react-redux";
// import Pager from "../../Pager";
import "./Style.css";

const Index = () => {
  const myTheme = useSelector((state) => state.changeTheme.theme);
  const textColor = myTheme === "light" ? "#000" : "#fff";
  const [pages, setPages] = useState(1);
  return (
    <>
      <div
        className="Home"
        // style={{ paddingTop: "80px" }}
        style={{
          background: myTheme === "dark" ? "#000" : "#fff",
          color: textColor,
        }}
      >
        <div
          className="home-container"
          style={{
            background: myTheme === "dark" ? "#000" : "#fff",
            color: textColor,
          }}
        >
          <div
            className="Bhitta"
            style={{
              background: myTheme === "dark" ? "#000" : "#fff",
              color: textColor,
            }}
          >
            <div className="bhitta-left-box">
              <div className="Home-title">Bhitta</div>
              <div className="Home-paragraph">A step into the Future</div>
            </div>
            <div className="Artist">
              <span className="twentysix">26</span>
              <span className="art">Artists</span>
            </div>
          </div>
          <div
            className="home-box-list"
            style={{
              background: myTheme === "dark" ? "#000" : "#fff",
              color: textColor,
            }}
          >
            <div className="Home-box-one">
              <div className="Home-box-one-name">Binod Pradhan</div>
              <div className="Home-box-one-contemporary">contemporary</div>
            </div>
            <div className="Home-box-two">
              <div className="Home-box-one-name">Aman Maharjan</div>
              <div className="Home-box-one-contemporary">Aman</div>
            </div>
            <div className="Home-box-three">
              <div
                className="Home-box-one-name"
                style={{ color: "pink", fontWeight: "600" }}
              >
                Prashant Shrestha
              </div>
              <div
                className="Home-box-one-contemporary"
                style={{ color: "black" }}
              >
                Prashant
              </div>
            </div>
            <div className="Home-box-one">
              <div className="Home-box-one-name">Rupesh Dangol</div>
              <div className="Home-box-one-contemporary">
                Contemporary-painter
              </div>
            </div>
            <div className="Home-box-one">
              <div className="Home-box-one-name">Sanjog Rai</div>
              <div className="Home-box-one-contemporary">Photography Nepal</div>
              <div className="Home-box-one-Music">Music by:Laure,Banawati</div>
            </div>
            <div className="Home-box-one">
              <div className="Home-box-one-name">Bidyaman Tamang</div>
              <div className="Home-box-one-contemporary">
                contemporary-Nepal
              </div>
              <div className="Home-box-one-Music">Music by:Laure,Banawati</div>
            </div>
          </div>
        </div>
        {/* <Pager pages={pages} setPages={setPages} /> */}
        <div className="page">
          <div className="page-arrow1">
            <i className="arrow far fa-arrow-left"></i>
          </div>
          <div className="page-arrow2">
            <i className="arrow far fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

import React from "react";
import Sdata from "./Sdata";
import "./Style.css";

const index = () => {
  return (
    <>
      <div className="catagories">
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

export default index;

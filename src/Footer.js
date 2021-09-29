import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-left">
          <div>
            <i className="footer-icon fas fa-broadcast-tower"></i>
          </div>
          <div>
            <i className="footer-icon fas fa-briefcase"></i>
          </div>
          <div>
            <i className="footer-icon fad fa-phone-laptop"></i>
          </div>
          <i className="footer-icon fas fa-archive"></i>
        </div>
        <div className="footer-large">
          <div className="footer-large-left">
            <div className="footer-image">
              <img src="images/Logo.png" />
            </div>
            <div className="footer-large-icon">
              <div>
                <i className="large-icon fab fa-facebook"></i>
              </div>
              <div>
                <i className="large-icon fab fa-instagram"></i>
              </div>
              <div>
                <i className="large-icon fab fa-youtube"></i>
              </div>
            </div>
          </div>
          <div className="footer-large-right">
            <div className="footer-right-parts">Terms of Use</div>
            <div className="footer-right-parts">Privacy Policy</div>
            <div className="footer-right-parts">Security</div>
            <div className="footer-right-parts">Conditions of sale</div>
            <div className="footer-right-parts">@2019 Tilicho kala</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

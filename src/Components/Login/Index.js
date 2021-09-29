import React from "react";
import "./Style.css";

const Index = () => {
  return (
    <div>
      <div className="login">
        <div className="login-container">
          <div className="login-heading">Welcome To Tulika</div>
          <p className="login-paragraph">
            For new users you can directly register and login with your Google
            or Facebook account. You can also create a new account via Email.
          </p>
          <div className="fb-ggl-msg">
            <div className="google">
              <i className="fab fa-google"></i>
              <div className="ggl">Google</div>
            </div>
            <div className="facebook">
              <i className="fab fa-facebook-f"></i>
              <div className="fb">Facebook</div>
            </div>
            <div className="msg">
              <i class="fas fa-envelope"></i>
            </div>
          </div>
          <div className="underline-or">
            <div className="underline">_________________</div>
            <div className="or">OR</div>
            <div className="underline">________________</div>
          </div>
          <div className="field">
            <div className="field-input">
              <input type="text" placeholder="Email Address" />
            </div>
            <div className="field-input">
              <input type="text" placeholder="Password" />
            </div>
          </div>
          <div className="forget">Forget Password?</div>
          <div className="login-page-button">Login</div>
        </div>
      </div>
    </div>
  );
};

export default Index;

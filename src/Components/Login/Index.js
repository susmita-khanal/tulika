import React, { useEffect, useState } from "react";
import { darkMode } from "../../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./Style.css";

const Index = () => {
  const myTheme = useSelector((state) => state.changeTheme.theme);
  const dispatch = useDispatch();
  // const [darkModeIsOn, setDarkModeIsOn] = useState(getTheme());
  const [field, setField] = useState({
    email: "",
    password: "",
  });
  const handleClick = () => {
    if (myTheme == "dark") {
      dispatch({ type: "DARK", payload: "light" });
      localStorage.setItem("myTheme", "light");
    } else {
      dispatch({ type: "DARK", payload: "dark" });
      localStorage.setItem("myTheme", "dark");
    }
  };
  const getLocalStorageItem = async () => {
    const savedTheme = await localStorage.getItem("myTheme");
    console.log({ savedTheme });
    if (savedTheme) {
      dispatch({ type: "DARK", payload: savedTheme });
    } else {
      dispatch({ type: "DARK", payload: "dark" });
    }
  };

  useEffect(() => {
    getLocalStorageItem();
  }, []);

  const [records, setRecords] = useState([]);
  const inputEvent = (event) => {
    // console.log(event.target.value);
    const { name, value } = event.target;
    setField({ ...field, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecord = { ...field, id: new Date().getTime().toString() };
    setRecords(...records);
    // console.log(records);
    setField({ email: "", password: "" });
    // console.log(records);
  };
  return (
    <div>
      <div
        className="login"
        style={{ background: myTheme === "dark" ? "#000" : "#fff" }}
      >
        <div className="login-container">
          <div className="login-heading">Welcome To Tulika</div>
          <button onClick={() => handleClick()}>darkMode</button>
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
              <i className="fas fa-envelope"></i>
            </div>
          </div>
          <div className="underline-or">
            <div className="underline">_________________</div>
            <div className="or">OR</div>
            <div className="underline">________________</div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <div className="field-input">
                <input
                  type="text"
                  placeholder="Email Address"
                  value={field.email}
                  name="email"
                  onChange={inputEvent}
                />
              </div>
              <div className="field-input">
                <input
                  type="text"
                  placeholder="Password"
                  value={field.password}
                  name="password"
                  onChange={inputEvent}
                />
              </div>
            </div>

            <div className="forget">Forget Password?</div>
            <button
              type="submit"
              className="login-page-button"
              style={{ border: "none", height: "36px" }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;

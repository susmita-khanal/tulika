import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { darkMode } from "../../redux/actions/action";
import "./Style.css";

const Index = () => {
  const myTheme = useSelector((state) => state.changeTheme.theme);
  const textColor = myTheme === "light" ? "#000" : "#fff";
  const [records, setRecords] = useState([]);
  // const dispatch = useDispatch();
  const [field, setField] = useState({
    email: "",
    password: "",
  });
  // const handleClick = () => {
  //   if (myTheme == "dark") {
  //     dispatch(darkMode("light"));
  //     localStorage.setItem("theme", "light");
  //   } else {
  //     dispatch(darkMode("dark"));
  //     localStorage.setItem("theme", "dark");
  //   }
  // };
  // const getLocalStorageItem = async () => {
  //   const savedTheme = await localStorage.getItem("theme");
  //   if (savedTheme) {
  //     dispatch(darkMode(savedTheme));
  //   } else {
  //     dispatch(darkMode("light"));
  //   }
  // };

  // useEffect(() => {
  //   getLocalStorageItem();
  // }, []);

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setField({ ...field, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecord = { ...field, id: new Date().getTime().toString() };
    setRecords(...records);
    setField({ email: "", password: "" });
  };

  return (
    <div className="login">
      <div
        className="login-container"
        style={{
          background: myTheme === "dark" ? "#000" : "#fff",
          color: textColor,
        }}
      >
        <div className="login-heading">Welcome To Tulika</div>
        {/* <button onClick={() => handleClick()}>
          {myTheme === "dark" ? "Light Mode" : "Dark Mode"}
        </button> */}
        <p className="login-paragraph">
          For new users you can directly register and login with your Google or
          Facebook account. You can also create a new account via Email.
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
          <div className="underline"></div>
          <div className="or">OR</div>
          <div className="underline"></div>
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
  );
};

export default Index;

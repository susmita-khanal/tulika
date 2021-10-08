import React, { useState, useEffect } from "react";
import { darkMode } from "../../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";

const ThemeToggleBtn = () => {
  const myTheme = useSelector((state) => state.changeTheme.theme);
  const dispatch = useDispatch();

  const [isDarkMode, setIsDarkMode] = useState(false);
  const textColor = myTheme === "light" ? "#fff" : "#fff";
  const getTheme = () => {
    return JSON.parse(localStorage.getItem("myTheme"));
  };
  useEffect(() => {
    localStorage.setItem("myTheme", JSON.stringify(myTheme));
  }, [myTheme]);
  console.log(myTheme);
  return (
    <div
      style={{
        background: myTheme === "dark" ? "#000" : "#fff",
        color: textColor,
      }}
    >
      <div onClick={() => dispatch(darkMode("dark"))}>
        <i
          className="fas fa-moon"
          style={{ color: "#D9FBFF", color: "#D9FBFF", size: "18" }}
        ></i>
      </div>
      <div onClick={() => dispatch(darkMode("light"))}>
        <i className="fas fa-sun" style={{ color: "gold", border: "none" }}></i>
      </div>
    </div>
  );
};

export default ThemeToggleBtn;

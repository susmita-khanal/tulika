import React, { useState, useEffect } from "react";
import { darkMode } from "../../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";

const ThemeToggleBtn = () => {
  const myTheme = useSelector((state) => state.changeTheme.theme);
  const dispatch = useDispatch();

  // const [isDarkMode, setIsDarkMode] = useState(false);
  const textColor = myTheme === "light" ? "#fff" : "#fff";
  const getTheme = () => {
    return JSON.parse(localStorage.getItem("myTheme"));
  };
  const handleDark = () => {
    if (myTheme == "dark") {
      dispatch(darkMode("light"));
      localStorage.setItem("myTheme", "light");
    } else {
      dispatch(darkMode("dark"));
      localStorage.setItem("myTheme", "dark");
    }
  };
  const getLocalStorageItem = async () => {
    const savedTheme = await localStorage.getItem("myTheme");
    if (savedTheme) {
      dispatch(darkMode(savedTheme));
    } else {
      dispatch(darkMode("light"));
    }
  };
  useEffect(() => {
    getLocalStorageItem();
  }, []);
  return (
    <div
      style={{
        background: myTheme === "dark" ? "#000" : "#fff",
        color: textColor,
      }}
    >
      <div
        onClick={handleDark}
        className={myTheme === "dark" ? "fas fa-moon" : "fas fa-sun"}
      ></div>
    </div>
  );
};

export default ThemeToggleBtn;

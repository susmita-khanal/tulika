import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggleBtn from "./Components/ThemeToggleBtn";
import { useSelector, useDispatch } from "react-redux";
// import DarkTheme from "./DarkTheme";
import "./Navbar.css";

const Navbar = () => {
  const [navLinkOpen, setNavLinkOpen] = useState(false);
  const myTheme = useSelector((state) => state.changeTheme.theme);
  const textColor = myTheme === "light" ? "#000" : "#fff";
  const handleBar = () => {
    setNavLinkOpen(!navLinkOpen);
  };
  const closeMobileMenu = () => {
    setNavLinkOpen(false);
  };
  return (
    <>
      <nav>
        <div
          className="navbar"
          style={{
            background: myTheme === "dark" ? "#000" : "#fff",
            color: textColor,
          }}
        >
          <div onClick={handleBar} className="navbar-bar">
            <i
              className={navLinkOpen ? "far fa-times" : "fal fa-bars"}
              style={{ color: "white", color: textColor }}
            />
          </div>

          <div className="navbar-left">
            {" "}
            <Link to="/">
              <img style={{ color: textColor }} src="images/Logo.png" alt="" />
            </Link>
          </div>
          <div className="navbar-field">
            <input type="text" placeholder="Type to search" />
          </div>
          <ThemeToggleBtn />
          <div className={navLinkOpen ? "menu-active" : "menu"}>
            <ul>
              <Link className="menu-link register-login">
                <div className="nav-register">Register/login</div>
              </Link>
              <NavLink
                to="/exhibition"
                className="menu-link"
                onClick={closeMobileMenu}
                activeStyle={{ backgroundColor: "Brown" }}
                style={{ color: textColor }}
              >
                Exhibition
              </NavLink>
              <NavLink
                to="/gallery"
                activeStyle={{ backgroundColor: "Brown" }}
                className="menu-link"
                onClick={closeMobileMenu}
              >
                Gallery
              </NavLink>
              <NavLink
                to="/store"
                activeStyle={{ backgroundColor: "Brown" }}
                className="menu-link"
                onClick={closeMobileMenu}
              >
                Store
              </NavLink>
              <NavLink
                to="/studios"
                activeStyle={{ backgroundColor: "Brown" }}
                className="menu-link"
                onClick={closeMobileMenu}
              >
                Studios
              </NavLink>
              <NavLink
                to="/feed"
                activeStyle={{ backgroundColor: "Brown" }}
                className="menu-link"
                onClick={closeMobileMenu}
              >
                Feed
              </NavLink>
              <NavLink
                to="/login"
                activeStyle={{ backgroundColor: "Brown" }}
                className="menu-link"
                onClick={closeMobileMenu}
              >
                Login
              </NavLink>
            </ul>
          </div>
          <div className="navbar-large">
            <ul>
              <NavLink
                to="/exhibition"
                style={{ color: textColor }}
                className="menu-large-link"
                activeStyle={{ backgroundColor: "Brown", width: "60px" }}
              >
                Exhibition
              </NavLink>
              <NavLink
                to="/gallery"
                style={{ color: textColor }}
                activeStyle={{ backgroundColor: "Brown", width: "60px" }}
                className="menu-large-link"
              >
                Gallery
              </NavLink>
              <NavLink
                to="/store"
                style={{ color: textColor }}
                activeStyle={{
                  backgroundColor: "Brown",
                  width: "60px",
                }}
                className="menu-large-link"
              >
                Store
              </NavLink>
              <NavLink
                style={{ color: textColor }}
                to="/studios"
                activeStyle={{
                  backgroundColor: "Brown",
                  width: "60px",
                }}
                className="menu-large-link"
              >
                Studios
              </NavLink>
              <NavLink
                style={{ color: textColor }}
                to="/feed"
                activeStyle={{
                  backgroundColor: "Brown",
                  width: "60px",
                }}
                className="menu-large-link"
              >
                Feed
              </NavLink>
              <NavLink
                style={{ color: textColor }}
                to="/login"
                activeStyle={{
                  backgroundColor: "Brown",
                  width: "60px",
                }}
                className="menu-large-link"
              >
                Login
              </NavLink>
            </ul>
          </div>
        </div>
        {/* <DarkTheme /> */}
      </nav>
    </>
  );
};

export default Navbar;

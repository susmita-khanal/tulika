import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [navLinkOpen, setNavLinkOpen] = useState(false);
  const handleBar = () => {
    setNavLinkOpen(!navLinkOpen);
  };
  const closeMobileMenu = () => {
    setNavLinkOpen(false);
  };
  return (
    <>
      <nav>
        <div className="navbar">
          <div onClick={handleBar} className="navbar-bar">
            <i
              className={navLinkOpen ? "far fa-times" : "fal fa-bars"}
              style={{ color: "white" }}
            />
          </div>

          <div className="navbar-left">
            <img src="images/Logo.png" alt="" />
          </div>
          <div className="navbar-field">
            <input type="text" placeholder="Type to search" />
          </div>
          <div className={navLinkOpen ? "menu-active" : "menu"}>
            <ul>
              <Link className="menu-link register-login">
                <div className="nav-register">Register/login</div>
              </Link>
              <NavLink to="/" className="menu-link" onClick={closeMobileMenu}>
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
          {/* <div className="navbar-large">
            <ul>
              <NavLink to="/" className="menu-large-link">
                Exhibition
              </NavLink>
              <NavLink
                to="/gallery"
                activeStyle={{ backgroundColor: "Brown" }}
                className="menu-large-link"
              >
                Gallery
              </NavLink>
              <NavLink
                to="/store"
                activeStyle={{ backgroundColor: "Brown" }}
                className="menu-large-link"
              >
                Store
              </NavLink>
              <NavLink
                to="/studios"
                activeStyle={{ backgroundColor: "Brown" }}
                className="menu-large-link"
              >
                Studios
              </NavLink>
              <NavLink
                to="/feed"
                activeStyle={{ backgroundColor: "Brown" }}
                className="menu-large-link"
              >
                Feed
              </NavLink>
              <NavLink
                to="/login"
                activeStyle={{ backgroundColor: "Brown" }}
                className="menu-large-link"
              >
                Login
              </NavLink>
            </ul>
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

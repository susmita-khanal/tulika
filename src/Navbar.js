import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="navbar-bar">
            <i className="bar fal fa-bars"></i>
          </div>

          <div className="navbar-left">
            <img src="images/Logo.png" alt="" />
          </div>
          <div className="navbar-field">
            <input type="text" placeholder="Type to search" />
          </div>
          <div className="menu">
            <ul>
              <Link className="menu-link register-login">
                <div className="nav-register">Register/login</div>
              </Link>
              <NavLink to="/" className="menu-link">
                Exhibition
              </NavLink>
              <NavLink
                to="/Gallery"
                activeStyle={{ backgroundColor: "Brown" }}
                className="menu-link"
              >
                Gallery
              </NavLink>
              <NavLink
                to="/Store"
                activeStyle={{ backgroundColor: "Brown" }}
                className="menu-link"
              >
                Store
              </NavLink>
              <NavLink
                to="/Studios"
                activeStyle={{ backgroundColor: "Brown" }}
                className="menu-link"
              >
                Studios
              </NavLink>
              <NavLink
                to="/Feed"
                activeStyle={{ backgroundColor: "Brown" }}
                className="menu-link"
              >
                Feed
              </NavLink>
              <NavLink
                to="/Login"
                activeStyle={{ backgroundColor: "Brown" }}
                className="menu-link"
              >
                Login
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

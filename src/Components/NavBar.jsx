import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about-us">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/menu-page">Menu</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
import React from "react";
import { ShoppingCart, User } from "lucide-react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <h2>MyStore</h2>
      </div>

      {/* Nav Links */}
      <ul className="navbar-links">
        <li>
          <a href="#categories">Best sellers</a>
        </li>

        <li>
          <a href="#collections">Collections</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#feedback">Feedback</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Icons */}
      <div className="navbar-icons">
        <button className="icon-btn">
          <User size={22} />
          <span>Profile</span>
        </button>

        <button className="icon-btn cart-btn">
          <ShoppingCart size={22} />
          <span className="cart-count">0</span>
        </button>

        <button classname="login-me"> Login </button>
      </div>
    </nav>
  );
};

export default Navbar;

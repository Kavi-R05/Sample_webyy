import React from "react";
import { ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link"; // 1. Import Hash Link
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <NavHashLink smooth to="/#home">
          <h2>MyStore</h2>
        </NavHashLink>
      </div>

      <ul className="navbar-links">
        <li>
          <NavHashLink smooth to="/#bestsellers">
            Best sellers
          </NavHashLink>
        </li>

        <li>
          <NavHashLink smooth to="/#collections">
            Collections
          </NavHashLink>
        </li>

        <li>
          <NavHashLink smooth to="/#offers">
            Offer
          </NavHashLink>
        </li>

        <li>
          <NavHashLink smooth to="/#feedback">
            Feedback
          </NavHashLink>
        </li>

        <li>
          <NavHashLink smooth to="/#footer">
            Contact
          </NavHashLink>
        </li>
      </ul>

      <div className="navbar-icons">
        <button className="icon-btn">
          <User size={22} />
          <span>Profile</span>
        </button>

        <button className="icon-btn cart-btn">
          <ShoppingCart size={22} />
          <span className="cart-count">0</span>
        </button>

        <Link to="/login" className="login-me">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

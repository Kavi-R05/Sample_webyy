import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";
import "../styles/navbar.css";

const Navbar = () => {
  const { getCartCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, [location.pathname]);

  const closeMobileMenu = () => setIsOpen(false);

  // Helper function to handle smooth scrolling to sections across pages
  const handleScrollToSection = (sectionId) => {
    closeMobileMenu();

    if (location.pathname !== "/") {
      // If user is on an outer page (like /cart), send them home first, then find section
      navigate("/", { replace: false });
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // If already home, scroll immediately
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link
          to="/"
          onClick={() => handleScrollToSection("home")}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <h3>MyStore</h3>
        </Link>
      </div>

      <button
        className={`nav-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger"></span>
      </button>

      <div className={`nav-menu-wrapper ${isOpen ? "active" : ""}`}>
        {/* CENTERED NAV LINKS CONTAINER */}
        <div className="nav-links">
          <button
            onClick={() => handleScrollToSection("home")}
            className="nav-scroll-btn"
          >
            Home
          </button>
          <button
            onClick={() => handleScrollToSection("collection")}
            className="nav-scroll-btn"
          >
            Collection
          </button>
          <button
            onClick={() => handleScrollToSection("bestsellers")}
            className="nav-scroll-btn"
          >
            Bestsellers
          </button>
          <button
            onClick={() => handleScrollToSection("about")}
            className="nav-scroll-btn"
          >
            Offer
          </button>
          <button
            onClick={() => handleScrollToSection("contact")}
            className="nav-scroll-btn"
          >
            Contact
          </button>
        </div>

        <div className="nav-actions">
          {isLoggedIn ? (
            <Link
              to="/logout"
              className="logout-link"
              onClick={closeMobileMenu}
            >
              Logout
            </Link>
          ) : (
            <Link to="/login" className="login-link" onClick={closeMobileMenu}>
              Login
            </Link>
          )}

          <Link to="/cart" className="cart-btn-link" onClick={closeMobileMenu}>
            <div className="cart-icon-wrapper">
              <span className="cart-icon">🛒</span> Cart
              <span className="cart-count-badge">{getCartCount()}</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-column brand-section">
          <h2 className="footer-logo">My Store</h2>
          <div className="social-container">
            <p className="column-title">Social Media</p>
            <div className="social-icons">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>

        <div className="footer-column">
          <p className="column-title white">SHOP</p>
          <ul className="footer-links">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Overview</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Releases</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <p className="column-title white">COMPANY</p>
          <ul className="footer-links">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>

        <div className="footer-column newsletter">
          <p className="column-title white">STAY UP TO DATE</p>
          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-line"></div>
        <div className="legal-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

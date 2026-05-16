import React, { useState } from "react";
import "../styles/productdetail.css";

const Productdetail = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Add to Cart Function
  const handleAddToCart = () => {
    alert(`${quantity} item(s) added to cart`);
  };

  // Buy Now Function
  const handleBuyNow = () => {
    alert(`Proceeding to buy ${quantity} item(s)`);
  };

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="main-image">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            alt="Red Bag"
          />
        </div>

        {/* Right Section */}
        <div className="product-details">
          <h2 className="product-title">Faux Leather Red Bag</h2>

          <div className="rating">
            <span>5.0 ⭐⭐⭐⭐⭐</span>
          </div>

          <h1 className="price">Rs 698.00</h1>

          <p className="description">
            Premium quality faux leather handbag with elegant finish. Spacious
            compartments with stylish modern design perfect for casual and party
            wear.
          </p>

          <div className="offers">
            <h4>Available Offers</h4>

            <ul>
              <li>✔ 10% Instant Discount on UPI Payments</li>
              <li>✔ Free Delivery Available</li>
              <li>✔ Cash on Delivery Eligible</li>
            </ul>
          </div>

          <div className="action-section">
            {/* Quantity */}
            <div className="quantity-box">
              <button onClick={decreaseQty}>-</button>

              <span>{quantity}</span>

              <button onClick={increaseQty}>+</button>
            </div>

            {/* Buttons */}
            <div className="buttons">
              <button className="cart-btn" onClick={handleAddToCart}>
                Add to Cart
              </button>

              <button className="buy-btn" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetail;

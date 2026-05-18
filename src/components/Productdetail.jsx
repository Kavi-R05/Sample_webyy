import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../components/CartContext";
import "../styles/productdetail.css";
import { useNavigate } from "react-router-dom";

const Productdetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://e-shopping-backend-m9je.onrender.com/api/products/${id}`
        );

        if (!response.ok) {
          throw new Error(`Product not found! Status: ${response.status}`);
        }

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.error("Error fetching individual product:", err);
        setError("Could not load product details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSingleProduct();
  }, [id]);

  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  const handleBuyNow = () => {
    alert(`Proceeding to checkout for ${quantity} x ${product.name}`);
    navigate("/payment", {
      state: { amountToPay: product.price },
    });
  };

  if (loading)
    return (
      <div
        className="loading-state"
        style={{ padding: "100px", textAlign: "center" }}
      >
        Loading details...
      </div>
    );
  if (error)
    return (
      <div
        className="error-state"
        style={{ padding: "100px", textAlign: "center", color: "red" }}
      >
        {error}
      </div>
    );
  if (!product)
    return (
      <div
        className="error-state"
        style={{ padding: "100px", textAlign: "center" }}
      >
        Product not found.
      </div>
    );

  return (
    <div className="product-page">
      <div
        className="back-link-container"
        style={{ maxWidth: "1200px", margin: "20px auto", padding: "0 20px" }}
      >
        <Link to="/" style={{ color: "#333", textDecoration: "none" }}>
          ← Back to all products
        </Link>
      </div>

      <div className="product-container">
        <div className="main-image">
          <img
            src={
              product.images && product.images[0]
                ? product.images[0]
                : "https://via.placeholder.com/400"
            }
            alt={product.name}
          />
        </div>

        <div className="product-details">
          <h2 className="product-title">{product.name}</h2>

          <div
            className="brand-badge"
            style={{ color: "gray", marginBottom: "10px" }}
          >
            Brand: <strong>{product.brand}</strong>
          </div>

          <div className="rating">
            <span>{product.rating || "4.8"} ⭐⭐⭐⭐⭐</span>
          </div>

          <h1 className="price">${product.price}</h1>

          <p className="description">
            {product.description ||
              "Premium quality build item with an elegant design layout. Spacious structure with high-quality components built to last."}
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
            <div className="quantity-box">
              <button onClick={decreaseQty}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQty}>+</button>
            </div>

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

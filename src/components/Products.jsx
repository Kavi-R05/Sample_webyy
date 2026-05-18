import React, { useState, useEffect } from "react";
import "../styles/products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const response = await fetch("/api/products/");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Could not load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="products-section" id="collections">
      <div className="products-header">
        <h1>Our other products</h1>
      </div>

      {loading && <div className="loading-spinner">Loading products...</div>}
      {error && <div className="error-message">{error}</div>}

      {!loading && !error && (
        <div className="products-grid">
          {products.map((item) => (
            <div className="product-card" key={item.id || item._id}>
              <div className="product-image">
                <img src={item.image} alt={item.title} />
              </div>

              <h3>{item.title}</h3>

              <div className="product-info">
                <span>{item.price}</span>

                <div className="line"></div>

                <span>{item.rating} ⭐</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;

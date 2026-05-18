import React, { useState, useEffect } from "react";
import "../styles/products.css";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://e-shopping-backend-m9je.onrender.com/api/products"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data && data.content) {
          setProducts(data.content);
        } else {
          setProducts([]);
        }
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

      {loading && (
        <div className="loading-spinner">
          Loading products (Render server waking up)...
        </div>
      )}
      {error && <div className="error-message">{error}</div>}

      {!loading && !error && (
        <div className="products-grid">
          {products.map((item) => (
            <div className="product-card" key={item.id}>
              <Link
                to={`/product/${item.id}`}
                className="product-card-link"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="product-image">
                  <img
                    src={
                      item.images && item.images[0]
                        ? item.images[0]
                        : "https://via.placeholder.com/150"
                    }
                    alt={item.name}
                  />
                </div>

                <h3>{item.name}</h3>

                <div className="product-info">
                  <span>${item.price}</span>

                  <div className="line"></div>

                  <span>Brand: {item.brand}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;

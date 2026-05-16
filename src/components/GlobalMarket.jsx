import React from "react";
import "../styles/globalmarket.css";

const sellers = [
  {
    id: 1,
    name: "Peggy",
    location: "Florida",
    img: "https://i.pravatar.cc/150?u=peggy",
    className: "card-peggy",
  },
  {
    id: 2,
    name: "John",
    location: "California",
    img: "https://i.pravatar.cc/150?u=john",
    className: "card-john",
  },
  {
    id: 3,
    name: "Halina",
    location: "New York",
    img: "https://i.pravatar.cc/150?u=halina",
    className: "card-halina",
  },
  {
    id: 4,
    name: "Janet",
    location: "Ohio",
    img: "https://i.pravatar.cc/150?u=janet",
    className: "card-janet",
  },
  {
    id: 5,
    name: "Leonard",
    location: "California",
    img: "https://i.pravatar.cc/150?u=leonard",
    className: "card-leonard",
  },
];

const GlobalMarketplace = () => {
  return (
    <section className="marketplace-section">
      {/* Header Text */}
      <div className="header-container">
        <div className="sub-title">
          <span className="line"></span> Our Best Sellers
        </div>
        <h1 className="main-title">
          <span className="highlight">Global Marketplace:</span> Connect with
          Sellers Worldwide!
        </h1>
      </div>

      {/* Map and Cards Container */}
      <div className="map-wrapper">
        {/* Replace with your local world map image path */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg"
          alt="World Map"
          className="world-map"
        />

        {/* The Central Yellow Blob Shape */}
        <div className="yellow-blob"></div>

        {/* Featured Card (FashionPhantom) */}
        <div className="featured-card">
          <div className="featured-img-container">
            <img
              src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=200&auto=format&fit=crop"
              alt="Fashion"
            />
          </div>
          <div className="featured-content">
            <h4>FashionPhantom</h4>
            <div className="avatar-stack">
              <img src="https://i.pravatar.cc/30?u=1" alt="v" />
              <img src="https://i.pravatar.cc/30?u=2" alt="v" />
              <img src="https://i.pravatar.cc/30?u=3" alt="v" />
              <img src="https://i.pravatar.cc/30?u=4" alt="v" />
            </div>
          </div>
        </div>

        {/* Individual Seller Cards */}
        {sellers.map((seller) => (
          <div key={seller.id} className={`seller-card ${seller.className}`}>
            <img src={seller.img} alt={seller.name} className="seller-avatar" />
            <div className="seller-info">
              <p className="name">{seller.name}</p>
              <p className="location">{seller.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GlobalMarketplace;

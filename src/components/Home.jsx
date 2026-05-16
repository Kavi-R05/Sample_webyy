import React from "react";
import "../styles/home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="glow"></div>

      <div className="hero-container">
        <div className="hero-left">
          <h1>
            Elegant & <br /> Luxury
          </h1>

          <p>
            Remarkable clothes and accessories
            <br />
            for the modern women!
          </p>

          <button>SHOP COLLECTION</button>
        </div>

        <div className="star">✦</div>

        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
            alt="fashion"
          />
        </div>
      </div>

      <div className="curve"></div>
    </section>
  );
};

export default Home;

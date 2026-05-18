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
            src="https://res.cloudinary.com/deva2001/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1779095141/95a1639c48a175e9171f93996180b5291c77bfb5_arbxtv.png"
            alt="fashion"
          />
        </div>
      </div>

      <div className="curve"></div>
    </section>
  );
};

export default Home;

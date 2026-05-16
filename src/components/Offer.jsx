import React, { useState, useEffect } from "react";
import "../styles/offers.css";

const Offer = () => {
  const targetDate = new Date().getTime() + 6 * 24 * 60 * 60 * 1000;

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="offer-section">
      <div className="offer-container">
        {/* Left */}
        <div className="offer-left">
          <h1>Exclusive offer</h1>

          <p>
            Unlock the ultimate style upgrade with our exclusive offer Enjoy
            savings of up to 40% off on our latest New Arrivals
          </p>

          {/* Timer */}
          <div className="timer">
            <div className="time-box">
              <h2>{timeLeft.days}</h2>
              <span>Days</span>
            </div>

            <div className="time-box">
              <h2>{timeLeft.hours}</h2>
              <span>Hours</span>
            </div>

            <div className="time-box">
              <h2>{timeLeft.minutes}</h2>
              <span>Min</span>
            </div>

            <div className="time-box">
              <h2>{timeLeft.seconds}</h2>
              <span>Sec</span>
            </div>
          </div>

          <button>BUY NOW</button>
        </div>

        {/* Right */}
        <div className="offer-right">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
            alt="fashion"
          />

          {/* Dots */}
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;

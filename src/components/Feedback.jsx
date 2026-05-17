import React, { useState } from "react";
import "../styles/feedback.css";

const testimonials = [
  {
    id: 1,
    name: "Sonam kapoor",
    feedback:
      "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!",
  },
  {
    id: 2,
    name: "Thrisha",
    feedback:
      "I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!",
  },
  {
    id: 3,
    name: "Samantha",
    feedback:
      "I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!",
  },
  {
    id: 4,
    name: "Surya",
    feedback:
      "Products are amazing and in high quality. Keep recommending this product to all. Absolutely stunning. Highly satisfied!",
  },
];

const Feedback = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    /* CRITICAL FIX: Added id="feedback" so the Navbar link routes directly here */
    <section className="feedback-section" id="feedback">
      <h2 className="feedback-title">Feedback Corner</h2>

      <div className="feedback-container">
        {testimonials.map((item, index) => (
          <div
            key={item.id}
            className={`feedback-card ${index === activeIndex ? "active" : ""}`}
          >
            <div className="quote-icon">“</div>
            <h3 className="user-name">{item.name}</h3>
            <p className="user-text">{item.feedback}</p>
          </div>
        ))}
      </div>

      <div className="nav-controls">
        <button className="nav-btn prev" onClick={handlePrev}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button className="nav-btn next" onClick={handleNext}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Feedback;

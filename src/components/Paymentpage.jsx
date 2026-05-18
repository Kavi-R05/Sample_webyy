// import React, { useState } from "react";
// import "../styles/paymentpage.css";

// export default function Paymentpage() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     address: "",
//     cardNumber: "",
//     expiry: "",
//     cvv: "",
//   });

//   const [paymentStatus, setPaymentStatus] = useState("idle");

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handlePaymentSubmit = (e) => {
//     e.preventDefault();

//     setPaymentStatus("processing");

//     setTimeout(() => {
//       setPaymentStatus("success");
//     }, 2500);
//   };

//   if (paymentStatus === "success") {
//     return (
//       <div className="payment-container success-screen">
//         <div className="success-card">
//           <div className="success-icon">✓</div>
//           <h2>Payment Demo Successful!</h2>
//           <p>
//             Thank you, <strong>{formData.fullName}</strong>. Your mockup order
//             has been processed.
//           </p>
//           <p className="demo-notice">
//             Note: This is a frontend demonstration. No real transaction
//             occurred.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="payment-container">
//       <div className="payment-card">
//         <h2>Checkout Simulation</h2>
//         <p className="subtitle">
//           Please fill in your details to complete the simulation.
//         </p>

//         <form onSubmit={handlePaymentSubmit} className="payment-form">
//           {/* Customer Details Section */}
//           <div className="form-section">
//             <h3>1. Customer Details</h3>
//             <div className="form-group">
//               <label htmlFor="fullName">Full Name</label>
//               <input
//                 type="text"
//                 id="fullName"
//                 name="fullName"
//                 required
//                 value={formData.fullName}
//                 onChange={handleInputChange}
//                 placeholder="John Doe"
//                 disabled={paymentStatus === "processing"}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email Address</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 placeholder="john@example.com"
//                 disabled={paymentStatus === "processing"}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="address">Billing Address</label>
//               <input
//                 type="text"
//                 id="address"
//                 name="address"
//                 required
//                 value={formData.address}
//                 onChange={handleInputChange}
//                 placeholder="123 Main St, New York, NY"
//                 disabled={paymentStatus === "processing"}
//               />
//             </div>
//           </div>

//           <div className="form-section">
//             <h3>2. Payment Details (Mock)</h3>
//             <div className="form-group">
//               <label htmlFor="cardNumber">Card Number</label>
//               <input
//                 type="text"
//                 id="cardNumber"
//                 name="cardNumber"
//                 required
//                 value={formData.cardNumber}
//                 onChange={handleInputChange}
//                 placeholder="0000 0000 0000 0000"
//                 disabled={paymentStatus === "processing"}
//               />
//             </div>
//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="expiry">Expiry Date</label>
//                 <input
//                   type="text"
//                   id="expiry"
//                   name="expiry"
//                   required
//                   value={formData.expiry}
//                   onChange={handleInputChange}
//                   placeholder="MM/YY"
//                   disabled={paymentStatus === "processing"}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="cvv">CVV</label>
//                 <input
//                   type="password"
//                   id="cvv"
//                   name="cvv"
//                   required
//                   value={formData.cvv}
//                   onChange={handleInputChange}
//                   placeholder="123"
//                   maxLength="3"
//                   disabled={paymentStatus === "processing"}
//                 />
//               </div>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className={`pay-button ${
//               paymentStatus === "processing" ? "loading" : ""
//             }`}
//             disabled={paymentStatus === "processing"}
//           >
//             {paymentStatus === "processing"
//               ? "Processing Transaction..."
//               : "Proceed to Pay"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useCart } from "../components/CartContext"; // 1. Import the hook
import "../styles/paymentpage.css";

export default function Paymentpage() {
  // 2. Destructure clearCart from the Cart Context
  const { clearCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [paymentStatus, setPaymentStatus] = useState("idle");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    setPaymentStatus("processing");

    setTimeout(async () => {
      // 3. CRUCIAL: Empty local & database cart items before rendering success
      await clearCart();

      setPaymentStatus("success");
    }, 2500);
  };

  if (paymentStatus === "success") {
    return (
      <div className="payment-container success-screen">
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h2>Payment Demo Successful!</h2>
          <p>
            Thank you, <strong>{formData.fullName}</strong>. Your mockup order
            has been processed.
          </p>
          <p className="demo-notice">
            Note: This is a frontend demonstration. No real transaction
            occurred. Your cart has been emptied.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h2>Checkout Simulation</h2>
        <p className="subtitle">
          Please fill in your details to complete the simulation.
        </p>

        <form onSubmit={handlePaymentSubmit} className="payment-form">
          {/* Customer Details Section */}
          <div className="form-section">
            <h3>1. Customer Details</h3>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="John Doe"
                disabled={paymentStatus === "processing"}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                disabled={paymentStatus === "processing"}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Billing Address</label>
              <input
                type="text"
                id="address"
                name="address"
                required
                value={formData.address}
                onChange={handleInputChange}
                placeholder="123 Main St, New York, NY"
                disabled={paymentStatus === "processing"}
              />
            </div>
          </div>

          {/* Dummy Payment Section */}
          <div className="form-section">
            <h3>2. Payment Details (Mock)</h3>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                required
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="0000 0000 0000 0000"
                disabled={paymentStatus === "processing"}
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiry">Expiry Date</label>
                <input
                  type="text"
                  id="expiry"
                  name="expiry"
                  required
                  value={formData.expiry}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  disabled={paymentStatus === "processing"}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="password"
                  id="cvv"
                  name="cvv"
                  required
                  value={formData.cvv}
                  onChange={handleInputChange}
                  placeholder="123"
                  maxLength="3"
                  disabled={paymentStatus === "processing"}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className={`pay-button ${
              paymentStatus === "processing" ? "loading" : ""
            }`}
            disabled={paymentStatus === "processing"}
          >
            {paymentStatus === "processing"
              ? "Processing Transaction..."
              : "Proceed to Pay"}
          </button>
        </form>
      </div>
    </div>
  );
}

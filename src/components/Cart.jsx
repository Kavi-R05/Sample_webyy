// import React from "react";
// import { useCart } from "../components/CartContext";
// import { Link, useNavigate } from "react-router-dom";
// import "../styles/cart.css";

// const Cart = () => {
//   const navigate = useNavigate();
//   const { cart, getCartCount, refreshCart } = useCart();

//   const handleCheckout = () => {
//     navigate("/payment", {
//       state: { amountToPay: calculateTotal() },
//     });
//   };

//   const calculateTotal = () => {
//     return cart
//       .reduce((total, item) => {
//         const price = item.price || (item.product && item.product.price) || 0;
//         return total + price * (item.quantity || 1);
//       }, 0)
//       .toFixed(2);
//   };

//   if (cart.length === 0) {
//     return (
//       <div className="empty-cart-container">
//         <h2>Your Cart is Empty</h2>
//         <p>Looks like you haven't added anything to your cart yet.</p>
//         <Link to="/" className="shop-now-btn">
//           Shop Now
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="cart-page-wrapper">
//       <div className="cart-container">
//         <h2 className="cart-title">Shopping Cart ({getCartCount()} items)</h2>

//         <div className="cart-content">
//           <div className="cart-items-list">
//             {cart.map((item, index) => {
//               const product = item.product || item;
//               const name = product.name || "Unknown Product";
//               const price = product.price || 0;
//               const image =
//                 product.images && product.images[0]
//                   ? product.images[0]
//                   : "https://via.placeholder.com/100";
//               const qty = item.quantity || 1;

//               return (
//                 <div key={item.id || index} className="cart-item-card">
//                   {/* Left Column: Image */}
//                   <div className="item-image">
//                     <img src={image} alt={name} />
//                   </div>

//                   {/* Middle Column: Details */}
//                   <div className="item-details">
//                     <h3>{name}</h3>
//                     <p className="item-brand">
//                       Brand: {product.brand || "Generic"}
//                     </p>
//                     <p className="item-price">${price.toFixed(2)}</p>
//                   </div>

//                   {/* Right Column: Pricing calculations wrapper for pristine mobile scaling */}
//                   <div className="item-meta-pricing">
//                     <div className="item-quantity-display">
//                       <span>
//                         Qty: <strong>{qty}</strong>
//                       </span>
//                     </div>

//                     <div className="item-subtotal">
//                       <p>${(price * qty).toFixed(2)}</p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Order Calculations Sidebar */}
//           <div className="cart-summary-card">
//             <h3>Order Summary</h3>
//             <hr />
//             <div className="summary-row">
//               <span>Items Total:</span>
//               <span>${calculateTotal()}</span>
//             </div>
//             <div className="summary-row">
//               <span>Shipping:</span>
//               <span className="free-shipping">FREE</span>
//             </div>
//             <hr />
//             <div className="summary-row total-row">
//               <span>Total Price:</span>
//               <span>${calculateTotal()}</span>
//             </div>
//             <button className="checkout-btn" onClick={handleCheckout}>
//               Proceed to Checkout
//             </button>
//             {/* <button className="sync-btn" onClick={refreshCart}>
//               🔄 Refresh Cart
//             </button> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import { useCart } from "../components/CartContext";
import { Link, useNavigate } from "react-router-dom";
import "../styles/cart.css";

const Cart = () => {
  const navigate = useNavigate();
  // 1. Destructure removeFromCart from your global context hook
  const { cart, getCartCount, refreshCart, removeFromCart } = useCart();

  

  const handleCheckout = () => {
    navigate("/payment", {
      state: { amountToPay: calculateTotal() },
    });
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => {
        const price = item.price || (item.product && item.product.price) || 0;
        return total + price * (item.quantity || 1);
      }, 0)
      .toFixed(2);
  };


  
  if (cart.length === 0) {
    return (
      <div className="empty-cart-container">
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="shop-now-btn">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page-wrapper">
      <div className="cart-container">
        <h2 className="cart-title">Shopping Cart ({getCartCount()} items)</h2>

        <div className="cart-content">
          <div className="cart-items-list">
            {cart.map((item, index) => {
              const product = item.product || item;
              const name = product.name || "Unknown Product";
              const price = product.price || 0;
              const image =
                product.images && product.images[0]
                  ? product.images[0]
                  : "https://via.placeholder.com/100";
              const qty = item.quantity || 1;
              const itemId = product.id || product.productId || item.id;

              return (
                <div key={itemId || index} className="cart-item-card">
                  {/* Left Column: Image */}
                  <div className="item-image">
                    <img src={image} alt={name} />
                  </div>

                  {/* Middle Column: Details */}
                  <div className="item-details">
                    <h3>{name}</h3>
                    <p className="item-brand">
                      Brand: {product.brand || "Generic"}
                    </p>
                    <p className="item-price">${price.toFixed(2)}</p>
                  </div>

                  {/* Right Column: Pricing calculations wrapper for pristine mobile scaling */}
                  <div className="item-meta-pricing">
                    {/* 2. Dustbin icon placed directly next to the Qty text */}
                    <div className="item-quantity-display">
                      <span>
                        Qty: <strong>{qty}</strong>
                      </span>
                      {/* <button
                        className="cart-delete-btn"
                        onClick={() => removeFromCart(itemId)}
                        title="Remove item"
                      >
                        🗑️
                      </button> */}
                    </div>

                    <div className="item-subtotal">
                      <p>${(price * qty).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Calculations Sidebar */}
          <div className="cart-summary-card">
            <h3>Order Summary</h3>
            <hr />
            <div className="summary-row">
              <span>Items Total:</span>
              <span>${calculateTotal()}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span className="free-shipping">FREE</span>
            </div>
            <hr />
            <div className="summary-row total-row">
              <span>Total Price:</span>
              <span>${calculateTotal()}</span>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
            {/* <button className="sync-btn" onClick={refreshCart}>
              🔄 Refresh Cart
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

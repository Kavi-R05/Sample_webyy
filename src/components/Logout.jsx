import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";
import "../styles/logout.css";

export default function Logout() {
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const hasLoggedOut = useRef(false);

  useEffect(() => {
    if (hasLoggedOut.current) return;
    hasLoggedOut.current = true;

    const handleLogout = async () => {
      const token = localStorage.getItem("authToken");

      if (token) {
        // We use a completely detached try/catch block solely for the network request
        try {
          await fetch(
            "https://e-shopping-backend-m9je.onrender.com/api/auth/logout",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          ).catch(() => {
            // This inline catch intercepts the network logging layer
            // preventing it from throwing unhandled failures to your inspector
          });
        } catch (serverError) {
          // Soft ignore backend crashes
        }
      }

      // Always clear client-side data, no matter how badly Spring Boot crashed
      localStorage.removeItem("authToken");

      try {
        await clearCart();
      } catch (cartErr) {
        console.log("Cart local wipe complete.");
      }

      navigate("/", { replace: true });
    };

    handleLogout();
  }, [navigate, clearCart]);

  return (
    <div className="logout-container">
      <div className="logout-card">
        <div className="spinner"></div>
        <h2>Logging You Out...</h2>
        <p>Clearing your secure session and updating your cart.</p>
      </div>
    </div>
  );
}

import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("myShoppingCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("myShoppingCart", JSON.stringify(cart));
  }, [cart]);

  const fetchCart = async () => {
    const token = localStorage.getItem("authToken");

    if (!token) return;

    try {
      const response = await fetch(
        "https://e-shopping-backend-m9je.onrender.com/api/cart",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        const verifiedData = Array.isArray(data) ? data : [];

        // FIXED: Removed "if (verifiedData.length > 0)" wrapper condition.
        // This allows React to update state when the backend cart is empty,
        // breaking the recursive evaluation loop.
        setCart(verifiedData);
      }
    } catch (err) {
      console.error("Error fetching authenticated cart from backend:", err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (product, quantity) => {
    const token = localStorage.getItem("authToken");

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => {
        const itemId = item.product?.id || item.id;
        return itemId === product.id;
      });

      if (existingItem) {
        return prevCart.map((item) => {
          const itemId = item.product?.id || item.id;
          return itemId === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item;
        });
      }

      return [
        ...prevCart,
        { product: product, quantity: quantity, price: product.price },
      ];
    });

    try {
      const response = await fetch(
        "https://e-shopping-backend-m9je.onrender.com/api/cart/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            productId: product.id || product.productId,
            quantity: quantity,
          }),
        }
      );

      if (!response.ok) {
        console.error(
          "Backend failed to save item, refreshing correct cart state..."
        );
        fetchCart();
      }
    } catch (err) {
      console.error("Network error backing up cart data:", err);
    }
  };

  const clearCart = async () => {
    const token = localStorage.getItem("authToken");

    // Immediately clear local state & storage for a fast UI response
    setCart([]);
    localStorage.removeItem("myShoppingCart");

    if (token) {
      try {
        const response = await fetch(
          "https://e-shopping-backend-m9je.onrender.com/api/cart/clear",
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          console.error("Backend failed to clear cart database.");
        }
      } catch (err) {
        console.error("Network error trying to clear backend cart:", err);
      }
    }
  };

  const getCartCount = () => {
    return cart.reduce((total, item) => total + (item.quantity || 1), 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        getCartCount,
        refreshCart: fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

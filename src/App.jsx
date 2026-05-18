import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Bestsellers from "./components/Bestsellers.jsx";
import Products from "./components/Products.jsx";
import Offer from "./components/Offer.jsx";
import Feedback from "./components/Feedback";
import GlobalMarket from "./components/GlobalMarket.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import ProductDetail from "./components/Productdetail.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import Register from "./components/Register";
import PaymentPage from "./components/Paymentpage";
import Logout from "./components/Logout.jsx";

// For cart global state management
import { CartProvider } from "./components/CartContext";
import Cart from "./components/Cart";

function MainLandingPage() {
  return (
    <>
      <div id="home">
        <Home />
      </div>
      <div id="bestsellers">
        <Bestsellers />
      </div>
      <div id="collection">
        <Products />
      </div>
      <div id="about">
        <Offer />
      </div>
      <div id="contact">
        <Feedback />
      </div>
      <GlobalMarket />
    </>
  );
}

function App() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/logout";

  return (
    <CartProvider>
      <div>
        {!isAuthPage && <Navbar />}

        <Routes>
          <Route path="/" element={<MainLandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;

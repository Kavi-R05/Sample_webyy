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
import { Routes, Route } from "react-router-dom";

function MainLandingPage() {
  return (
    <>
      <Home />
      <Bestsellers />
      <Products />
      <Offer />
      <Feedback />
      <GlobalMarket />
    </>
  );
}

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<MainLandingPage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;

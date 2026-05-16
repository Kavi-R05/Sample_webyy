import React from "react";
import "../styles/products.css";

const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    title: "Faux leather Red Bag",
    price: "Rs 698.00",
    rating: "5.0",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    title: "Yellow Cropped T-shirt",
    price: "Rs 139.00",
    rating: "4.9",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518",
    title: "Grey Solid Shirt",
    price: "Rs 242.00",
    rating: "4.8",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    title: "Red Padded Shoe",
    price: "Rs 999.00",
    rating: "4.7",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    title: "Solid Loose Jacket",
    price: "Rs 350.00",
    rating: "5.0",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
    title: "Summer Wind Crop Shirt",
    price: "Rs 650.00",
    rating: "4.7",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
    title: "Tailored Jacket",
    price: "Rs 460.00",
    rating: "4.9",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    title: "Solid Round Neck T-shirt",
    price: "Rs 360.00",
    rating: "5.0",
  },
];

const Products = () => {
  return (
    <section className="products-section">
      <div className="products-header">
        <h1>Our other products</h1>

        {/* <div className="categories">
          <span>SALE</span>
          <span className="active">HOT</span>
          <span>NEW ARRIVALS</span>
          <span>ACCESSORIES</span>
        </div> */}
      </div>

      <div className="products-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="product-image">
              <img src={item.image} alt={item.title} />
            </div>

            <h3>{item.title}</h3>

            <div className="product-info">
              <span>{item.price}</span>

              <div className="line"></div>

              <span>{item.rating} ⭐</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

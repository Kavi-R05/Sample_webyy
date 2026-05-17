// import React from "react";
// import "../styles/bestsellers.css";

// const products = [
//   {
//     id: 1,
//     image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
//     title: "Regular Fit Long Top",
//     price: "$38.99",
//     rating: "5.0",
//   },
//   {
//     id: 2,
//     image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
//     title: "Black Crop Tailored Jacket",
//     price: "$62.99",
//     rating: "4.9",
//   },
//   {
//     id: 3,
//     image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
//     title: "Textured Sunset Shirt",
//     price: "$49.99",
//     rating: "5.0",
//   },
// ];

// const BestSelling = () => {
//   return (
//     <section className="best-selling">
//       <div className="heading">
//         <h1>Best selling</h1>
//         <p>
//           Get in on the trend with our curated selection of best-selling styles.
//         </p>
//       </div>

//       <div className="product-grid">
//         {products.map((item) => (
//           <div className="card" key={item.id}>
//             <div className="image-box">
//               <img src={item.image} alt={item.title} />
//             </div>

//             <h3>{item.title}</h3>

//             <div className="price-rating">
//               <span>{item.price}</span>

//               <div className="divider"></div>

//               <span>{item.rating} ⭐</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Button */}
//       <button className="see-btn">
//         See all <span>→</span>
//       </button>
//     </section>
//   );
// };

// export default BestSelling;

import React from "react";
import "../styles/bestsellers.css";

const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
    title: "Regular Fit Long Top",
    price: "$38.99",
    rating: "5.0",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    title: "Black Crop Tailored Jacket",
    price: "$62.99",
    rating: "4.9",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
    title: "Textured Sunset Shirt",
    price: "$49.99",
    rating: "5.0",
  },
];

const Bestsellers = () => {
  return (
    <section className="best-selling" id="bestsellers">
      <div className="heading">
        <h1>Best selling</h1>
        <p>
          Get in on the trend with our curated selection of best-selling styles.
        </p>
      </div>

      <div className="product-grid">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <div className="image-box">
              <img src={item.image} alt={item.title} />
            </div>

            <h3>{item.title}</h3>

            <div className="price-rating">
              <span>{item.price}</span>

              <div className="divider"></div>

              <span>{item.rating} ⭐</span>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="see-btn">
        See all <span>→</span>
      </button>
    </section>
  );
};

export default Bestsellers;

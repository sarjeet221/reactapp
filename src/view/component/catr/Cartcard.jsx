import React from "react";
import "./ProductCard.css";



const ProductCard = ({
  image,
  title,
  rating,
  reviews,
  features,
  price,
  oldPrice,
  freeShipping,
}) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      
      <div className="product-info">
        <h3 className="product-title">{title}</h3>

        <div className="rating">
          {"★".repeat(Math.round(rating))} <span>{reviews}</span>
        </div>

        <div className="features">
          {features.map((feature, index) => (
            <span key={index} className="feature">
              {feature} •
            </span>
          ))}
        </div>

        <p className="product-description">There are many variations of passa...</p>
      </div>

      <div className="price-section">
        <p className="price">${price.toFixed(2)}{oldPrice && <span className="old-price"> ${oldPrice.toFixed(2)}</span>}</p>
        {freeShipping && <p className="free-shipping">Free shipping</p>}
        <button className="details-btn">Details</button>
        <button className="wishlist-btn">Add to wishlist</button>
      </div>
    </div>
  );
};

export default ProductCard;

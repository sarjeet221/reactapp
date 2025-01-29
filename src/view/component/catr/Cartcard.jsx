import React from "react";
import "./ProductCard.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart  } from "../../redux/Cartslice";


const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  return (
    <div className="product-card">
      <img src={require(`../../image/${product.thumbimg}`)} alt={product.title} className="product-image" />
      
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>

        <div className="rating">
          {"★".repeat(Math.round(product.rating))} <span>{product.reviews}</span>
        </div>

        <div className="features">
          {product.features.map((feature, index) => (
            <span key={index} className="feature">
              {feature} •
            </span>
          ))}
        </div>

        <p className="product-description">There are many variations of passa...</p>
      </div>

      <div className="price-section">
        <p className="price">${product.price.toFixed(2)}{product.oldPrice && <span className="old-price"> ${product.oldPrice.toFixed(2)}</span>}</p>
        {product.freeShipping && <p className="free-shipping">Free shipping</p>}
        <button className="details-btn" onClick={()=>{dispatch(removeFromCart(product.id))}}>Remove</button>
        {/* <button className="wishlist-btn">Add to wishlist</button> */}
      </div>
    </div>
  );
};

export default ProductCard;

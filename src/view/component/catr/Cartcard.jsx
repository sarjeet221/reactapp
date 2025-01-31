import React from "react";
import "./ProductCard.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart, decreaseQuantity, increaseQuantity } from "../../redux/Cartslice";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {setMsg} from '../../redux/Flashmsgslice'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
    const navigation = useNavigate();
  
  return (
    <div className="product-card">
      <img
        src={require(`../../image/${product.thumbimg}`)}
        alt={product.title}
        className="product-image"
      />

      <div className="product-info" onClick={() => {
          navigation("/Detail", { state: product });
        }}>
        <h3 className="product-title">{product.name}</h3>

        <div className="rating">
          {"★".repeat(Math.round(product.rating))}{" "}
          <span>{product.reviews}</span>
        </div>

        <div className="features">
          {product.features.map((feature, index) => (
            <span key={index} className="feature">
              {feature} •
            </span>
          ))}
        </div>

        {product.freeShipping && (
          <p className="free-shipping mb-0">Free shipping</p>
        )}
      </div>

      <div className="price-section">
        <div className="qty-counter">
          <div onClick={()=>{dispatch(decreaseQuantity(product.id))}}>
            <FaMinus />
          </div>
          <sapn>{product.quantity}</sapn>
          <div  onClick={()=>{dispatch(increaseQuantity(product.id))}}>
            <FaPlus />
          </div>
        </div>

        <p className="price">
          ${product.price.toFixed(2)}
          {product.oldPrice && (
            <span className="old-price" style={{ fontSize: "12px" }}>
              {" "}
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </p>
        <button
          className="details-btn"
          onClick={() => {
            dispatch(removeFromCart(product.id)); dispatch(setMsg("removed successfully"));
          }}
        >
          <span className="hide-span">Remove &nbsp;</span> <FaTrash />
        </button>
        {/* <button className="wishlist-btn">Add to wishlist</button> */}
      </div>
    </div>
  );
};

export default ProductCard;

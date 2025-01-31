import React from "react";
import "./ListingCard.css";
import img from "../../image/shirt2.webp";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart  } from "../../redux/Cartslice";






const ListingCard = ({ details }) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const discount = ((details.oldPrice - details.price) / details.oldPrice) * 100;
  
  return (
    <div className="listing-card">
      <div className="header">
        <span className="date">{discount.toFixed(0)} % off</span>
        <button
          className={`bookmark-btn ${details.wishlist ? "red" : "white"}`}
        >
          <FaHeart />
        </button>
      </div>

      <div
        className="product-img listing-img-box"
        onClick={() => {
          navigation("/Detail", { state: details });
        }}>
       
          <img
            src={require(`../../image/${details.thumbimg}`)}
            alt="Company Logo"
            className="logo"
          />
        
       
      </div>

      <div className="Details-section"> 
        <div><h3 className="job-title">{details.name}</h3>
        <div className="rating">
          {"★".repeat(Math.round(details.rating))}{" "}
          <span className="review">{details.reviews}</span>
        </div></div>
        <div className="footer"> <p className="listing-price ">${details.price.toFixed(2)}</p>
        <button style={{whiteSpace:"nowrap"}}
          className="cart-btn"
          onClick={() => {
            dispatch(addToCart(details))
          }}
        >
          Add to Cart
        </button></div>
       
      </div>
    </div>
  );
};

export default ListingCard;

import React, { useContext } from "react";
import "./FoodItemCss.css";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";
import { Link } from "react-router-dom";

const FoodItem = ({ id, name, image, price, description }) => {
  const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartItem[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItem[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
            <Link to="/cart">
              <img src={assets.basket_icon} alt="" />
            </Link>
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-and-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">₹{price}.00</p>
      </div>
    </div>
  );
};

export default FoodItem;

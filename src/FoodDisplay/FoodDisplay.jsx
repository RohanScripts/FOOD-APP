import React, { useContext } from "react";
import "./FoodDisplayCss.css";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display">
      <h2>Top Dishes Near You...</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
            description={item.description}
          ></FoodItem>
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;

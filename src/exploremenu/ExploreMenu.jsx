import React from "react";
import "./ExploreMenuCss.css";
import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="expore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-para">
        Embark on a culinary journey through India with our Explore Menu.
        Indulge in vibrant flavors and rich aromas, from perfectly balanced
        curries to freshly baked bread. Discover the essence of India's diverse
        culinary heritage with every bite. Welcome to a world of flavor.
      </p>
      <div className="expore-menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            key={index}
            className="explore-menu-list-item"
          >
            <img
              className={category === item.menu_name ? "liveCat" : ""}
              src={item.menu_image}
              alt=""
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;

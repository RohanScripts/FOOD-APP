import React from "react";
import "./HeaderCss.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Order your favourite food here...</h2>
        <p>
          Embark on a culinary adventure through the flavors of India, delivered
          right to your doorstep. From traditional favorites to contemporary
          delights, experience the richness of Indian cuisine with our food
          delivery app. Order now and let the journey begin!
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;

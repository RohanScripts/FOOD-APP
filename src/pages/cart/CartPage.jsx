import React, { useContext } from "react";
import "./CartPageCss.css";
import { StoreContext } from "../../context/StoreContext";

const CartPage = () => {
  const { cartItem, food_list, removeFromCart } = useContext(StoreContext);

  // Check if cartItem is empty
  const isEmptyCart = Object.keys(cartItem).length === 0;

  return (
    <div className="cart">
      {isEmptyCart ? (
        <div id="tiger-items">
          <span class="cart-icon"></span>
          <p class="empty-message">Your cart is empty.</p>
        </div>
      ) : (
        <div className="cart-items">
          <div className="cart-item-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cartItem[item._id] > 0) {
              return (
                <>
                  <div
                    className="cart-items-info cart-item-title"
                    key={item._id}
                  >
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{cartItem[item._id]}</p>
                    <p>{item.price * cartItem[item._id]}</p>
                    <p
                      className="cross"
                      onClick={() => removeFromCart(item._id)}
                    >
                      X
                    </p>
                  </div>
                  <hr />
                </>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default CartPage;

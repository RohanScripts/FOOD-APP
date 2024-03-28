import React, { useContext } from "react";
import "./CartPageCss.css";
import { StoreContext } from "../../context/StoreContext";

const CartPage = () => {
  const { cartItem, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

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
        <>
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
                      <p>₹{item.price}</p>
                      <p>{cartItem[item._id]}</p>
                      <p>₹{item.price * cartItem[item._id]}</p>
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
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Totals</h2>
              <div>
                <div className="cart-total-details">
                  <p>Subtotal</p>
                  <p>₹{getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <p>Delivery Fee</p>
                  <p>₹{55}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <b>Total</b>
                  <b>₹{getTotalCartAmount() + 55}</b>
                </div>
              </div>
              <button>Proceed To Checkout</button>
            </div>
            <div className="cart-promo-section">
              <div>
                <p>If you have any promo code, enter it here</p>
                <div className="promo-code-inputs">
                  <input type="text" placeholder="promo code..." />
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;

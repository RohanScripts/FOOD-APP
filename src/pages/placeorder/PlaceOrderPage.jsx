import React, { useContext } from "react";
import "./PlaceOrderPageCss.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrderPage = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <div className="place-order">
      <div className="place-order-left">
        <h2 className="title">Delivery Information</h2>
        <div className="multi-fields">
          <input type="text" placeholder="first name..." />
          <input type="text" placeholder="last name..." />
        </div>
        <input type="email" placeholder="email..." />
        <input type="text" placeholder="address..." />
        <div className="multi-fields">
          <input type="text" placeholder="city..." />
          <input type="text" placeholder="state..." />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Pin code..." />
          <input type="text" placeholder="Country..." />
        </div>
        <input type="text" placeholder="phone number..." />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Payment Summary</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 55}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 55}
              </b>
            </div>
          </div>
          <button>Proceed To Payment</button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderPage;

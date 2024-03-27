import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import HomePage from "./pages/home/HomePage";
import CartPage from "./pages/cart/CartPage";
import PlaceOrderPage from "./pages/placeorder/PlaceOrderPage";
import { Route, Routes } from "react-router-dom";
import Footer from "./footer/Footer";
import LoginPop from "./loginpop/LoginPop";

const App = () => {
  const [showLoginPop, setShowLoginPop] = useState(false);

  return (
    <>
      {showLoginPop ? (
        <LoginPop setShowLoginPop={setShowLoginPop}></LoginPop>
      ) : (
        <></>
      )}
      <div className="app">
        <Navbar setShowLoginPop={setShowLoginPop}></Navbar>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/cart" element={<CartPage></CartPage>}></Route>
          <Route
            path="/order"
            element={<PlaceOrderPage></PlaceOrderPage>}
          ></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;

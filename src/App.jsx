import React from "react";
import Navbar from "./navbar/Navbar";
import HomePage from "./pages/home/HomePage";
import CartPage from "./pages/cart/CartPage";
import PlaceOrderPage from "./pages/placeorder/PlaceOrderPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/cart" element={<CartPage></CartPage>}></Route>
        <Route
          path="/order"
          element={<PlaceOrderPage></PlaceOrderPage>}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;

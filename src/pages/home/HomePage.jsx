import React, { useState } from "react";
import "./HomePageCss.css";
import Header from "../../header/Header";
import ExploreMenu from "../../exploremenu/ExploreMenu";
import FoodDisplay from "../../FoodDisplay/FoodDisplay";
import AppDownload from "../../appDownload/AppDownload";

const HomePage = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header></Header>
      <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
      <FoodDisplay category={category}></FoodDisplay>
      <AppDownload></AppDownload>
    </div>
  );
};

export default HomePage;

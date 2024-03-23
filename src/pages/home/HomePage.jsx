import React, { useState } from "react";
import "./HomePageCss.css";
import Header from "../../header/Header";
import ExploreMenu from "../../exploremenu/ExploreMenu";

const HomePage = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header></Header>
      <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
    </div>
  );
};

export default HomePage;

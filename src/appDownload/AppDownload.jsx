import React from "react";
import "./AppDownloadCss.css";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download">
      <p>
        For Better Experience Download <br /> <b>Swaad Safar Mobile App</b>
      </p>
      <div className="download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;

import React from "react";
import images from "../../assets/images";
import "./HomeBanner.scss";

const HomeBanner = () => {
  return (
    <>
      <div className="homebannercomponent">
        <img
          className="banner_image"
          src={images.homeBanner}
          alt="Home Banner Image"
        />

        <div className="homebanner_text">
          <h1>Lorem, ipsum.</h1>

          <h2>Lorem ipsum dolor sit amet consectetur.</h2>

          <h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
            qui?
          </h3>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;

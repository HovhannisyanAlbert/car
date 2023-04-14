import React, { memo } from "react";
import "./whichCars.css";

const WhichCars = () => {
  return (
    <section id="whichCars">
      <div className="whichCars_img">
        <div className="whichCars_img-layer"></div>
        <div className="container-fluid max_width">
          <div className="whichCars_content">
            <h2 className="whichCars_title">
              Which cars have the biggest impact on the economy?
            </h2>
            <p className="whichCars_description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="whichCars_btn">Explore</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(WhichCars);

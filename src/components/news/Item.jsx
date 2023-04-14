import React, { memo } from "react";

const Item = ({ img, title, description }) => {
  return (
    <div className="col-12 col-lg-6">
      <div className="news_container">
        <div className="row">
          <div className="col-lg-4 d-lg-block d-none">
            <img src={img} className="img-fluid news_img" alt="News img" />
          </div>
          <div className="col-12 col-lg-8 news_content">
            <h3 className="news_title">{title}</h3>
            <p className="news_description">{description}</p>
            <button className="btn news_redMore-btn">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Item);

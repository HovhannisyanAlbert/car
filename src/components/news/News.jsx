import React, { memo } from "react";
import Item from "./Item";
import "./news.css";
import { NewsData } from "../../config/data";

const News = () => {
  return (
    <section id="news">
      <div className="container-fluid max_width">
        <h2 className="section_title">News</h2>
        <div className="row">
          {NewsData.map((e) => {
            return (
              <Item
                key={e.id}
                img={e.img}
                title={e.title}
                description={e.description}
              />
            );
          })}
        </div>
        <div className="col-12 text-end">
            <button className="btn news_shoMore-btn">Show more</button>
        </div>
      </div>
    </section>
  );
};

export default memo(News);

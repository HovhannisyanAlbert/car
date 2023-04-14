import React, { memo } from "react";
import "./whatWeDo.css";
import Item from "./Item";
import { WHAT_WE_DO } from "../../config/data";

const WhatWeDo = () => {
  return (
    <section id="whatWeDo">
      <div className="container-fluid max_width">
        <h2 className="section_title mt-5">what we do</h2>

        <div className="whatWeDo_container">
          <div className="row">
            {WHAT_WE_DO.map((e) => {
              return (
                <div key={e.title} className="col-12 col-xxl-3 col-md-6">
                  <Item title={e.title} description={e.description} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(WhatWeDo);

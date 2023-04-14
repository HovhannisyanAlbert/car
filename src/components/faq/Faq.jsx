import React, { memo } from "react";
import "./faq.css";
import Item from "./Item";
import { FAQ_DATA } from "../../config/data";

const Faq = () => {
  return (
    <section id="faq">
      <div className="container-fluid max_width">
        <h2 className="section_title">Frequently asked questions</h2>

        <div className="row">
          {FAQ_DATA.map((e) => {
            return <Item key={e.id} question={e.question} answer={e.answer} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default memo(Faq);

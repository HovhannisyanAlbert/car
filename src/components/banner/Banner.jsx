import React, { memo } from "react";
import "./banner.css";
import Image from "./Image";
import Form from "./Form";

const Banner = () => {
  return (
    <section id="banner">
      <Image />
      <Form />
    </section>
  );
};

export default memo(Banner);

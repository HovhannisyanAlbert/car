import React, { memo } from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
    </div>
  );
};

export default memo(Loading);

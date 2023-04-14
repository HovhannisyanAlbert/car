import React, { memo } from "react";

const Item = ({title, description}) => {
  return (
    <div className="whatWeDo_item">
      <div className="whatWeDo_item-cub"></div>
      <div>
        <p className="whatWeDo_item-title">{title}</p>
        <p className="whatWeDo_item-description">
          {description}
          </p>
      </div>
    </div>
  );
};

export default memo(Item);

import React, { memo } from "react";

const Image = () => {
  return (
    <div className="banner_img">
      <div className="banner_img-layer"></div>
      <div className="container-fluid max_width">
        <div className="banner_content">
          <h2 className="banner_title">Lorem ipsum</h2>
          <p className="banner_description">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(Image);

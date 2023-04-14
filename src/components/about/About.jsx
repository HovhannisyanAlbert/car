import React, { memo } from "react";
import "./about.css";
import Image from "../../assets/img/AboutPicture.png";

const About = () => {
  return (
    <section id="about">
      <div className="container-fluid max_width">
        <h2 className="section_title">ABOUT</h2>
        <div className="about_container">
          <div className="row">
            <div className="col-12 col-lg-6 d-flex align-items-center">
              <img src={Image} className="img-fluid w-100" alt="About" />
            </div>
            <div className="about_container-text col-12 col-lg-6">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus.
              </p>

              <button className="about_container-btn">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);

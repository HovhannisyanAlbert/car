import React, { memo } from "react";
import "./footer.css";
import Logo from "../../assets/img/bigLogo.png";
import { Link } from "react-router-dom";
import { TEL, EMAIL } from "../../config/const";
import Phone from "../../assets/img/icons/white-phone.png";
import Email from "../../assets/img/icons/mail.png";
import Location from "../../assets/img/icons/location.png";
import Copyright from "../../assets/img/icons/copyright.png";

const Footer = () => {
  return (
    <section id="footer">
      <footer className="page-footer font-small">
        <div className="max_width container-fluid text-lg-left">
          <div className="row">
            <div className="col-lg-4">
              <img src={Logo} alt="" />
              <p className="footer_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <hr className="clearfix w-100 d-lg-none pb-0" />

            <div className="col-lg-3 mb-lg-0 mb-3">
              <h5 className="footer_title">Company</h5>
              <ul className="list-unstyled">
                <li className="footer_list-item">
                  <Link className="footer_link" to={"#!"}>
                    Cars for Sale
                  </Link>
                </li>
                <li className="footer_list-item">
                  <Link className="footer_link" to={"#!"}>
                    Sell you car
                  </Link>
                </li>
                <li className="footer_list-item">
                  <Link className="footer_link" to={"#!"}>
                    Service
                  </Link>
                </li>
                <li className="footer_list-item">
                  <Link className="footer_link" to={"#!"}>
                    Review
                  </Link>
                </li>
                <li className="footer_list-item">
                  <Link className="footer_link" to={"#!"}>
                    News
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 mb-lg-0 mb-3">
              <h5 className="footer_title">Helpful information</h5>
              <ul className="list-unstyled">
                <li className="footer_list-item">
                  <Link className="footer_link" to={"#!"}>
                    Terms of use
                  </Link>
                </li>
                <li className="footer_list-item">
                  <Link className="footer_link" to={"#!"}>
                    Privacy policy
                  </Link>
                </li>
                <li className="footer_list-item">
                  <Link className="footer_link" to={"#!"}>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 mb-lg-0 mb-3">
              <h5 className="footer_title">Contact us</h5>
              <ul className="list-unstyled">
                <li className="footer_list-item">
                  <a className="footer_link" href={`tel:${TEL}`}>
                    <img src={Phone} className="fotter_link-icon" alt="Phone" />
                    +{TEL}
                  </a>
                </li>
                <li className="footer_list-item">
                  <a className="footer_link" href={`mailto:${EMAIL}`}>
                    <img src={Email} className="fotter_link-icon" alt="Email" />
                    {EMAIL}
                  </a>
                </li>
                <li className="footer_list-item">
                  <Link className="footer_link" to={"#!"}>
                    <img
                      src={Location}
                      className="fotter_link-icon"
                      alt="Location"
                    />
                    Lorem Ipsum
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <hr className="clearfix pb-0" />

          <div className="footer-copyright py-3">
            <img src={Copyright} alt="Copyright" />
            <span>{new Date().getFullYear()} Lorem ipsum</span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default memo(Footer);

import React, { memo, useEffect, useState } from "react";
import "./header.css";
import Logo from "../../assets/img/logo.png";
import RightButtons from "./RightButtons";
import Swal from "sweetalert2";
import axios from "axios";
import { USER } from "../../config/api";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isLogin, isSetLogin] = useState(false);

  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  const message = sessionStorage.getItem("message");

  const navigate = useNavigate();

  if (message === "successLogin") {
    Swal.fire("Success", "Successfully signed in", "success");
    sessionStorage.removeItem("message");
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (token) {
      isSetLogin(true);

      axios
        .get(USER, {
          headers: { Authorization: `Bearer ${token}` },
        })

        .then(function (res) {
          localStorage.setItem("user", res.data.username);
        });
    } else {
      isSetLogin(false);
      navigate("/login");
    }
  }, [navigate]);

  return (
    <section id="header">
      <nav className="navbar navbar-expand-lg bottom_header">
        <div className="container-fluid max_width">
          <a className="navbar-brand" href="/?page=1">
            <img src={Logo} alt="Logo" className="bottom_header-logo" />
          </a>
          <RightButtons login={isLogin} />
        </div>
      </nav>
    </section>
  );
};

export default memo(Header);

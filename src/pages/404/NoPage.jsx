import React, { memo } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <section id="NoPage">
      <Header />
      <div className="container max_width">
        <div className="row ps-3 pe-3">
          <div className="col-12 col-lg-6 mx-auto text-center border border-danger border-2 rounded-3 mt-5 p-5 shadow">
            <h1 className="mb-3">404</h1>
            <h2><b className="text-danger">ERROR:</b> Page not found</h2>
            <Link to="/" className="btn rightButtons_header_login mt-3">Go home</Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default memo(NoPage);

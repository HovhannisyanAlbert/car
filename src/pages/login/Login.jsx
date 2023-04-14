import React, { memo } from "react";
import Style from "./login.module.css";
import Header from "../../components/header/Header";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import axios from "axios";
import Swal from "sweetalert2";
import { LOGIN } from "../../config/api";

const Login = () => {
  const navigate = useNavigate();
  return (
    <section id="NoPage">
      <Header />
      <div className="container max_width">
        <div className="row ps-3 pe-3">
          <div className="col-12 col-lg-6 mx-auto border border-danger border-2 rounded-3 mt-5 p-3 shadow">
            <div className="text-center">
              <h2 className={Style.title}>Welcome back!</h2>
              <p className={Style.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <Formik
              initialValues={{
                username: "",
                password: "",
                remember: false,
              }}
              validate={(values) => {
                const errors = {};
                if (!values.username) {
                  errors.username = "This field is required";
                }

                if (!values.password) {
                  errors.password = "This field is required";
                } else if (values.password.length < 4) {
                  errors.password = "Password must be more than 4 characters";
                }
                return errors;
              }}
              onSubmit={(data) => {
                axios
                  .post(LOGIN, data)
                  .then((res) => {
                    sessionStorage.setItem("message", "successLogin");
                    sessionStorage.setItem("remember", data.remember);
                    if (data.remember) {
                      localStorage.setItem("token", res.data.access);
                    } else {
                      sessionStorage.setItem("token", res.data.access);
                    }

                    navigate("/?page=1");
                  })
                  .catch(() => {
                    Swal.fire(
                      "Warning",
                      "Incorrect username or password",
                      "warning"
                    );
                  });
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                dirty,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      User name
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                    />
                    <div className="form-text text-danger">
                      {errors.username && touched.username && errors.username}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      autoComplete="on"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <div className="form-text text-danger">
                      {errors.password && touched.password && errors.password}
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="row">
                      <div className="col-12 col-lg-6">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            name="remember"
                            className="form-check-input"
                            id="remember"
                            value="ok"
                            onChange={handleChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="remember"
                          >
                            Remember Password
                          </label>
                        </div>
                      </div>
                      <div className="col-12 col-lg-6 text-start text-lg-end">
                        <Link className="text-danger">Forgot password?</Link>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className={`btn ${Style.rightButtons_header_login}`}
                    disabled={!dirty}
                  >
                    Log in
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Login);

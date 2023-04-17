import axios from "axios";
import { memo, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";
import { MAKE } from "../../config/api";

import BannerOilTYpe from "./bannerPage/BannerOilTYpe";
import BannerDataOption from "./bannerPage/BannerDataOption";

const Form = () => {
  
  const [makes, setMake] = useState();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const page = searchParams.get("page");
  const site = searchParams.get("site");
  const price__gt = searchParams.get("price__gt");
  const price__lt = searchParams.get("price__lt");
  const make = searchParams.get("make");
  const exterior_color = searchParams.get("exterior_color");
  const year = searchParams.get("year");
  const transmission = searchParams.get("transmission");
  const bodystyle = searchParams.get("bodystyle");
  const fuel_type = searchParams.get("fuel_type");
  const mileage = searchParams.get("mileage");
  const body = useRef({ page });

  const thisYear = new Date().getFullYear();
  const options = [];

  for (let i = 0; i <= 60; i++) {
    options.push(thisYear - i);
  }

  useLayoutEffect(() => {
    if (site) body.current.site = site;
    if (price__gt) body.current.price__gt = price__gt;
    if (price__lt) body.current.price__lt = price__lt;
    if (make) body.current.make = make;
    if (exterior_color) body.current.exterior_color = exterior_color;
    if (year) body.current.year = year;
    if (transmission) body.current.transmission = transmission;
    if (bodystyle) body.current.bodystyle = bodystyle;
    if (fuel_type) body.current.fuel_type = fuel_type;
    if (mileage) body.current.mileage = mileage;
  }, [
    price__gt,
    price__lt,
    site,
    make,
    exterior_color,
    year,
    transmission,
    bodystyle,
    fuel_type,
    mileage,
  ]);

  const onChange = (e) => {
    if (e.target.value) {
      body.current[e.target.name] = e.target.value;
    }
  };

  const onSubmit = () => {
    navigate({
      pathname: "/",
      search: createSearchParams(body.current).toString(),
    });
  };

  useEffect(() => {
    axios
      .get(MAKE)
      .then((res) => {
        setMake(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container-fluid max_width">
      <div className="banner_form">
        <div className="banner_form">
          <nav>
            <div className="" id="nav-tab" role="tablist">
              <button
                className="banner_form_tab-btn banner_form_btn-1 active"
                id="nav-make-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-make"
                type="button"
                role="tab"
                aria-controls="nav-make"
                aria-selected="true"
              >
                Make
              </button>
              <button
                className="banner_form_tab-btn banner_form_btn-2"
                id="nav-body_style-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-body_style"
                type="button"
                role="tab"
                aria-controls="nav-body_style"
                aria-selected="false"
              >
                Body style
              </button>
            </div>
          </nav>

          <div className="tab-content banner_form_content" id="nav-tabContent">
            <div
              className="tab-pane fade active show"
              id="nav-make"
              role="tabpanel"
              aria-labelledby="nav-make-tab"
            >
              <div className="row">
                <div className="col-12 col-md-4 banner_form_input banner_form_input-lt">
                  <label className="banner_form-label" htmlFor="site">
                    Site
                  </label>
                  <select
                    className="form-control banner_form-control"
                    id="site"
                    name="site"
                    onChange={onChange}
                  >
                    <option value="">Site</option>
                    <option value="ebay.com">Ebay</option>
                    <option value="cars.com">Cars.com</option>
                  </select>
                </div>
                <div className="col-12 col-md-4 banner_form_input">
                  <label className="banner_form-label" htmlFor="make">
                    Make
                  </label>
                  <select
                    className="form-control banner_form-control"
                    id="make"
                    name="make"
                    onChange={onChange}
                  >
                    <option value="">Make</option>
                    {makes?.data &&
                      makes?.data.map((e) => {
                        return (
                          <option key={e.make} value={e.make}>
                            {e.make} - {e.dcount}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="col-12 col-md-4 banner_form_input banner_form_input-lb">
                  <label className="banner_form-label" htmlFor="model">
                    Model
                  </label>
                  <select
                    className="form-control banner_form-control"
                    id="model"
                    name="make_model"
                    onChange={onChange}
                  >
                    <option>All models</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4 banner_form_input banner_form_input-rt">
                  <div className="row">
                    <div className="col-6">
                      <label className="banner_form-label" htmlFor="price_gt">
                        Price is greater than
                      </label>
                      <input
                        className="form-control banner_form-control"
                        type="number"
                        name="price__gt"
                        placeholder="Price is greater than"
                        id="price__gt"
                        min={0}
                        onChange={onChange}
                      />
                    </div>
                    <div className="col-6">
                      <label className="banner_form-label" htmlFor="price_lt">
                        Price is less than
                      </label>
                      <input
                        className="form-control banner_form-control"
                        type="number"
                        name="price__lt"
                        placeholder="Price is less than"
                        id="price_lt"
                        min={0}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-2 banner_form_input banner_form_input-bb">
                  <label className="banner_form-label" htmlFor="mileage">
                    Mileage
                  </label>
                  <input
                    className="form-control banner_form-control"
                    type="number"
                    name="mileage"
                    placeholder="Mileage"
                    id="mileage"
                    min={0}
                    onChange={onChange}
                  />
                </div>
                <div className="col-12 col-md-2 banner_form_input banner_form_input-bb">
                  <label className="banner_form-label" htmlFor="make_zip">
                    ZIP
                  </label>
                  <input
                    className="form-control banner_form-control"
                    type="text"
                    name="make_zip"
                    placeholder="ZIP"
                    id="make_zip"
                    onChange={onChange}
                  />
                </div>
                <div className="col-12 col-md-4 banner_form_input banner_form_input-rb p-0">
                  <button className="banner_form_btn-red" onClick={onSubmit}>
                    Search
                  </button>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="nav-body_style"
              role="tabpanel"
              aria-labelledby="nav-body_style-tab"
            >
       
                    
                    <BannerDataOption onChange={onChange} options={options} />

                <BannerOilTYpe onChange={onChange} onSubmit={onSubmit}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Form);

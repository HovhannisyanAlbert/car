import axios from "axios";
import { memo, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";
import { MAKE } from "../../config/api";
import BannerOption from "./bannerPage/BannerOption";

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
    else if (price__gt) body.current.price__gt = price__gt;
    else if (price__lt) body.current.price__lt = price__lt;
    else if (make) body.current.make = make;
    else if (exterior_color) body.current.exterior_color = exterior_color;
    else if (year) body.current.year = year;
    else if (transmission) body.current.transmission = transmission;
    else if (bodystyle) body.current.bodystyle = bodystyle;
    else if (fuel_type) body.current.fuel_type = fuel_type;
    else if (mileage) body.current.mileage = mileage;
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

  const [price, setPrice] = useState({
    priceLess: 0,
    priceGreat: 0,
    mileage: "",
  });

  // const onChange = (e) => {

  //   if (e.target.value) {
  //     body.current[e.target.name] = e.target.value;
  //   } else {
  //     delete body.current[e.target.name];
  //   }
  // };

  const onChange = (e) => {
    setPrice({ ...price, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    axios
      .get(
        `http://65.109.11.93:10000/api/data/?price=&site=&stock_type=&make=&model=&bodystyle=&canonical_mmt=&customer_id=&fuel_type=&listing_id=&mileage=&seller_type=&trim=&year=&exterior_color=&transmission=&price__gt=${price.priceGreat}&price__lt=${price.priceLess}&mileage__gt=100&mileage__lt=100000`
      )
      .then((res) => console.log(res.data));
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
                        name="priceGreat"
                        placeholder="Price is greater than"
                        id="price_gt"
                        value={price.priceGreat}
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
                        name="priceLess"
                        placeholder="Price is less than"
                        id="price_lt"
                        value={price.priceLess}
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
                    value={price.mileage}
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
              <div className="row">
                <div className="col-12 col-md-4 banner_form_input banner_form_input-lt">
                  <BannerOption onChange={onChange} />
                </div>
                <div className="col-12 col-md-4 banner_form_input">
                  <label className="banner_form-label" htmlFor="year">
                    Year
                  </label>
                  <select
                    className="form-control banner_form-control"
                    id="year"
                    name="year"
                    onChange={onChange}
                  >
                    <option value="">Year</option>
                    {options.map((year) => {
                      return (
                        <option value={year} key={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-12 col-md-4 banner_form_input banner_form_input-lb">
                  <label className="banner_form-label" htmlFor="transmission">
                    Transmission
                  </label>
                  <select
                    className="form-control banner_form-control"
                    id="transmission"
                    name="transmission"
                    onChange={onChange}
                  >
                    <option value="">Transmission</option>
                    <option value="Manual">Manual</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Automatic CVT">Automatic CVT</option>
                    <option value="Automatic CVT">Electric</option>
                    <option value="6-Speed Automatic with Auto-Shift">
                      6-Speed Automatic with Auto-Shift
                    </option>
                    <option value="8-Speed Automatic">8-Speed Automatic</option>
                    <option value="7-Speed Automatic with Auto-Shift">
                      7-Speed Automatic with Auto-Shift
                    </option>
                    <option value="6-Speed Automatic with Auto-Shift">
                      6-Speed Automatic with Auto-Shift
                    </option>
                    <option value="9-Speed Automatic">9-Speed Automatic</option>
                    <option value="10-Speed Automatic">
                      10-Speed Automatic
                    </option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4 banner_form_input banner_form_input-bb">
                  <label className="banner_form-label" htmlFor="bodystyle">
                    Body Style
                  </label>
                  <select
                    className="form-control banner_form-control"
                    id="bodystyle"
                    name="bodystyle"
                    onChange={onChange}
                  >
                    <option value="">Body Style</option>
                    <option value="TRUCKS">TRUCKS</option>
                    <option value="SUV">SUV</option>
                    <option value="VANS">VANS</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Coupe">Coupe</option>
                    <option value="Wagon">Wagon</option>
                    <option value="Pickup">Pickup</option>
                    <option value="Pickup Truck">Pickup Truck</option>
                    <option value="Passenger Van">Passenger Van</option>
                    <option value="Convertible">Convertible</option>
                    <option value="4dr Car">4dr Car</option>
                  </select>
                </div>
                <div className="col-12 col-md-4 banner_form_input banner_form_input-rt">
                  <label className="banner_form-label" htmlFor="fuel_type">
                    Fuel Type
                  </label>
                  <select
                    className="form-control banner_form-control"
                    id="fuel_type"
                    name="fuel_type"
                    onChange={onChange}
                  >
                    <option value="">Fuel Type</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Gasoline">Gasoline</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Electric">Electric</option>
                  </select>
                </div>
                <div className="col-12 col-md-4 banner_form_input banner_form_input-rb p-0">
                  <button className="banner_form_btn-red" onClick={onSubmit}>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Form);

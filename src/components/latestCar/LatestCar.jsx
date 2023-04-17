import React, { memo, useEffect, useState } from "react";
import axios from "axios";
import Car from "../car/Car";
import { CAR_LIST } from "../../config/api";
import "bootstrap/dist/css/bootstrap.min.css";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { useNavigate, useSearchParams } from "react-router-dom";

const LatestCar = () => {
  const [data, setData] = useState();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const page = Number(searchParams.get("page"));
  // const site = searchParams.get("site");
  // const price__gt = searchParams.get("price__gt");
  // const price__lt = searchParams.get("price__lt");
  // const make = searchParams.get("make");
  // const exterior_color = searchParams.get("exterior_color");
  // const year = searchParams.get("year");
  // const transmission = searchParams.get("transmission");
  // const bodystyle = searchParams.get("bodystyle");
  // const fuel_type = searchParams.get("fuel_type");
  // const mileage = searchParams.get("mileage");

  useEffect(() => {
    const url = CAR_LIST + window.location.search;

    axios
      .get(url)
      .then((res) => {
   
        setData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchParams]);

  return (
    <div className="max_width container-fluid">
      <div className="d-flex justify-content-center">
        <PaginationControl
          page={page}
          between={4}
          total={data?.count}
          limit={50}
          changePage={(_p) => navigate("/?page=" + _p)}
          ellipsis={1}
        />
      </div>
      <div className="row">
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Make</th>
                <th scope="col" style={{ width: "155px" }}>
                  Model
                </th>
                <th scope="col">Body Style</th>
                <th scope="col" style={{ width: "155px" }}>
                  Exterior Color
                </th>
                <th scope="col" style={{ width: "155px" }}>
                  Transmission
                </th>
                <th scope="col">Year</th>
                <th scope="col">Mileage</th>
                <th scope="col">Fuel Type</th>
                <th scope="col" style={{ width: "155px" }}>
                  Price
                </th>
                <th scope="col">Vin</th>
                <th scope="col">URL</th>
              </tr>
            </thead>
            <tbody>
              {data?.results &&
                data.results.map((car, index) => {
                  return (
                    <Car
                      key={car.id}
                      index={index + 1}
                      make={car.make}
                      model={car.model}
                      bodyStyle={car.bodystyle}
                      exteriorColor={car.exterior_color}
                      transmission={car.transmission}
                      year={car.year}
                      mileage={car.mileage}
                      fuelType={car.fuel_type}
                      price={car.price}
                      mmrPrice={car.mmr_price}
                      vin={car.vin}
                      showDetails={car.url}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        {/* <PaginationControl
          page={page}
          between={4}
          total={data?.count}
          limit={50}
          changePage={(_p) => navigate("/?page=" - _p)}
          ellipsis={1}
        /> */}
      </div>
    </div>
  );
};

export default memo(LatestCar);

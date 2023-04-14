import React, { memo, useEffect, useState } from "react";
import Styles from "./cars.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Car from "../../components/car/Car";
import axios from "axios";
import { CAR_LIST } from "../../config/api";

const Cars = () => {
  const [data, setData] = useState();
  const [sortData, setSortData] = useState();
  const [filterData, setFilterData] = useState();

  useEffect(() => {
    setFilterData(data?.sort((a, b) => a.price - b.price));
  }, [data]);

  const sortChange = (e) => {
    setSortData(e.target.value);
  };

  useEffect(() => {
    if (sortData === "low") {
      setFilterData(data?.sort((a, b) => b.price - a.price));
    } else if (sortData === "hig") {
      setFilterData(data?.sort((a, b) => a.price - b.price));
    } else if (sortData === "noPrice") {
      setFilterData(data?.filter((a) => a.price === "26790"));
    }
  }, [sortData, data]);

  useEffect(() => {
    axios
      .get(CAR_LIST)
      .then((res) => {
        setData(res.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="max_width container-fluid">
        <div className="row">
          <h1 className={Styles.title}>Cars for sale</h1>
          <div className={Styles.sort}>
            <p className={Styles.sort_title}>Sort by:</p>
            <select
              className={Styles.sort_variant}
              value={sortData}
              onChange={sortChange}
            >
              <option value="low">Lowest price</option>
              <option value="hig">Highest price</option>
              <option value="noPrice">No price</option>
            </select>
          </div>
          <div className="col-12 col-lg-3"></div>
          <div className="col-12 col-lg-9">
            <div className="row">
              {filterData &&
                filterData.map((car) => {
                  return (
                    <div key={car.id} className="col-12 col-sm-6 col-lg-4">
                      <Car
                        img={car.image}
                        name={car.canonical_mmt}
                        listingPrice={car.price}
                        mmrPrice={car.mmr_price}
                        sellingPrice={car.price}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default memo(Cars);

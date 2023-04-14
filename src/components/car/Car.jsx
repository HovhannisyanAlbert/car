import React, { memo } from "react";
import "./car.css";

const Car = ({
  index,
  make,
  model,
  bodyStyle,
  exteriorColor,
  transmission,
  year,
  mileage,
  fuelType,
  mmrPrice,
  price,
  vin,
  showDetails,
}) => {
  console.log(price)
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{make}</td>
      <td>{model}</td>
      <td>{bodyStyle}</td>
      <td>{exteriorColor}</td>
      <td>{transmission}</td>
      <td>{year}</td>
      <td>{mileage}</td>
      <td>{fuelType}</td>
      <td>
        <span className="text-danger"> Listing {price} </span>
        <br />
        <span className="text-primary"> MMR {mmrPrice} </span>
        <br />
        <span className="text-success"> TAVA {mmrPrice - price} </span>
      </td>
      <td>{vin}</td>
      <td>
        <a
          href={showDetails}
          target="_blank"
          rel="noreferrer"
          className="car_show-btn"
        >
          Show
        </a>
      </td>
    </tr>
  );
};

export default memo(Car);

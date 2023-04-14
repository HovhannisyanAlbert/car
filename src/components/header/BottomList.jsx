import React, { memo } from "react";
import { Link } from "react-router-dom";

const BottomList = () => {
  return (
    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
      <li className="nav-item bottom_header-link">
        <Link to="/cars" className="nav-link">Cars for Sale</Link>
      </li>
      <li className="nav-item bottom_header-link">
        <a className="nav-link " href="#2">
          Sell you car
        </a>
      </li>
      <li className="nav-item bottom_header-link">
        <a className="nav-link " href="#3">
          Service
        </a>
      </li>
      <li className="nav-item bottom_header-link">
        <a className="nav-link " href="#4">
          Review
        </a>
      </li>
      <li className="nav-item bottom_header-link">
        <a className="nav-link " href="#5">
          News
        </a>
      </li>
    </ul>
  );
};

export default memo(BottomList);

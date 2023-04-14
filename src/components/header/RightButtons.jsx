import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

const RightButtons = ({ login }) => {
  const navigate = useNavigate();

  const LogOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
    window.location.reload();
  };


  return (
    <div className="ms-auto rightButtons_header d-flex">
      {login &&
        <div className="dropdown">
          <button
            className="btn rightButtons_header_login dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           {localStorage.getItem("user")}
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#reset_password">
                Reset password
              </a>
            </li>
            <li>
              <button className="dropdown-item" onClick={LogOut}>
                Log out
              </button>
            </li>
          </ul>
        </div>
      }
    </div>
  );
};

export default memo(RightButtons);

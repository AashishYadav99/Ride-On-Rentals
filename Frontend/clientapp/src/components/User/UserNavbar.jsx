import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

// import logoImage from "./RORLF.png"; // Import your logo image file
// import ROR from "../image/RORLF.png";
import ROR from "../../image/RORLF.png";

export default function UserNavbar() {
  const navigate = useNavigate();
  const token_data = localStorage.getItem("Token_key");
  const userLogout = (e) => {
    e.preventDefault();
    if (token_data===null) {
      navigate("/user_login");
    } else {
      localStorage.removeItem("Token_key");
      // window.location.reload();
      navigate("/");
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top fs-4 text-white">
        <div
          className="container-fluid p-5  text-white display-7 md-5"
          style={{ backgroundColor: "#e7926c" }}
        >
          <NavLink className="navbar-brand" to="/user_home">
            <img
              src={ROR}
              alt="ROR Logo"
              style={{ width: "250px", height: "80px", margin: "0" }}
            />
          </NavLink>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ms-5">
                <NavLink className="nav-link text-white fs-2" to="/user_home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item ms-5">
                <NavLink className="nav-link text-white fs-2" to="/Feedback">
                  Feedback
                </NavLink>
              </li>

              <li className="nav-item ms-5">
                <NavLink className="nav-link text-white fs-2" to="/YourBookings">
                  Your Bookings
                </NavLink>
              </li>

              <li className="nav-item ms-5">
                <NavLink className="nav-link text-white fs-2" onClick={userLogout}>
                  Logout
                </NavLink>
              </li>

              <li
                className="nav-item"
                style={{ marginLeft: "500px", height: "20px", width: "20px" }}
              >
                <NavLink className="nav-link text-white fs-2" to="/UserProfile">
                  <i
                    class="fa fa-user"
                    aria-hidden="true"
                    style={{ fontSize: "50px" }}
                  ></i>
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <div style={{ marginTop: "200px" }}> </div>
    </>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import ROR from "../image/RORLF.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top fs-4 text-white">
        <div className="container-fluid p-5  text-white display-7" style={{backgroundColor:"#e7926c"}}>
           <NavLink className="navbar-brand" to="/">
            <img src={ROR} alt="ROR Logo" style={{ width: "250px", height:"80px", margin: "0" }} />
          </NavLink>
         
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
            
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active fs-2 " aria-current="page" to="/" style={{marginLeft:"300px"}}>
                  <i className="fas fa-home" style={{ color: "white" }}></i>
                </NavLink>
              </li>
              <li className="nav-item fs-2">
                <NavLink className="nav-link text-white" to="/about_us" >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item fs-2">
                <NavLink className="nav-link text-white" to="/Contactus">
                  Contact Us
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link text-white" to="/Feedback">
                  Feedback
                </NavLink>
              </li> */}
              <li className="nav-item dropdown fs-2">
                <NavLink className="nav-link dropdown-toggle text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Login
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item fs-2" to="/shop_login">
                      Shop Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item fs-2" to="/UserLogin">
                      User Login
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle text-white fs-2" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Registration
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item fs-2" to="/shop">
                      Shop Owner
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item fs-2" to="/UserRegistration">
                      User
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" style={{ backgroundColor: "" }} type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div style={{marginBottom:"150px"}}></div>
    </>
  );
};

export default Navbar;

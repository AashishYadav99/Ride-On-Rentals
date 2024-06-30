import { NavLink, useNavigate } from "react-router-dom";
import ROR from "../../image/RORLF.png";
import { Dropdown } from "react-bootstrap";

const ShopNavbar = () => {
  const navigate = useNavigate();
  const token_data = localStorage.getItem("Token_key");

  const shopLogout = (e) => {
    e.preventDefault();
    if (token_data === null) {
      navigate("/shop_login");
    } else {
      localStorage.removeItem("Token_key");
      navigate("/shop_login");
    }
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary fs-4  text-white ">
      <div
        className="container-fluid p-5  text-white display-7 md-5"
        style={{ backgroundColor: "#e7926c" }}
      >
        <NavLink className="navbar-brand" to="/" >
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
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link fs-2"
                style={{ marginLeft: "80px" }}
                aria-current="page"
                to="/shop_home"
              >
                <i className="fas fa-home" style={{ color: "white" }}></i>
              </NavLink>
            </li>
            <li className="nav-item dropdown fs-2">
              <NavLink
                className="nav-link dropdown-toggle text-white"
                style={{ marginLeft: "50px" }}
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Vehicles
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/AddVehicles">
                    Add Vehicles
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/More">
                    MORE
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white fs-2"
                style={{ marginLeft: "50px" }}
                to="/allfeedbacks"
              >
                Feedback
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white fs-2"
                style={{ marginLeft: "50px" }}
                to="/allcontacts"
              >
                Contacts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-white fs-2"
                style={{ marginLeft: "50px", width: "200px" }}
                to="/add_offers"
              >
                Add Offers
              </NavLink>
            </li>

            
              <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle text-white fs-2"
                style={{ marginLeft: "50px" }}
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Booking Requests
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item fs-2" to="/AllPendingRequests">
                    Pending Requests
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item fs-2" to="/AllAcceptedRequests">
                  Accepetd Requests
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item fs-2" to="/AllRejectedRequests">
                  Rejected Requests
                  </NavLink>
                </li>
              </ul>
            </li>
            
            
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle text-white fs-2"
                style={{ marginLeft: "50px" }}
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pickup & Drops
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item fs-2" to="/AllPickup">
                    All Pickup
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item fs-2" to="/AllDrop">
                  All Drops
                  </NavLink>
                </li>
                
              </ul>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link text-white fs-2"
                style={{ marginLeft: "50px" }}
                onClick={shopLogout}
              >
                Logout
              </NavLink>
            </li>
           
            <li
              className="nav-item"
              style={{ marginLeft: "100px", height: "20px" }}
            >
              <NavLink className="nav-link text-white fs-2" to="/ShopProfile">
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

    <div style={{marginBottom:"150px"}}></div>
    </>
  );
};

export default ShopNavbar;

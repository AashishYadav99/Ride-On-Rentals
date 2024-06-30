import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import logo from "../../image/RORLF.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Navbar from "../Navbar";

function ShopLogin() {
  const MySwal = withReactContent(Swal);

  const URL = "http://localhost:9999/shop/shop_login";
  const [loading, setLoading] = useState(false); // State to manage loading state
  let [shop, setShop] = useState({ email: "", password: "" });
  const error_message = {};
  let [error, setError] = useState({});
  const navigate = useNavigate();

  // client side validation code

  const checkEmpty = () => {
    if (!shop.email) {
      error_message.email = "Email is required";
    }
    if (!shop.password) {
      error_message.password = "Password is required";
    }
  };

  const handleChange = (e) => {
    setShop({ ...shop, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Activate loading state
    try {
      checkEmpty();
      if (Object.keys(error_message).length > 0) {
        setError(error_message);
      } else {
        const response = await axios.post(URL, shop);
        setShop({ email: "", password: "" });
        Swal.fire({
          title: "Shop Owner Login Successfully",
          text: "Thankyou for login..",
          icon: "success",
        });
        console.log(response.data);
        if (response.data.code === 200) {
          navigate("/shop_home"); 
          localStorage.setItem("Token_key", response.data.token);
        } else if (response.data.code === 404) {
          Swal.fire({
            title: "Shop Owner Login failed",
            text: "Email or Password does not matched",
            icon: "info",
          });
        } else {
          alert("Shop does not exists");
        }
      } //else closed here
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false); // Deactivate loading state
    }
  };
  return (
    <>
      <Navbar />
      <div className="">
        {loading && ( // Conditionally render loader when loading state is true
          <div className="loader-overlay  ">
            {/* <div className="loader-container" style={{paddingLeft:"50%",paddingTop:"25%",width:"100%",height:"100%"}} > */}
            <div
              className="loader-container"
              style={{
                margin: "0px",
                paddingTop: "400px",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                justifyItems: "center",
              }}
            >
              <ClipLoader color={"green"} loading={loading} size={150} />
            </div>
          </div>
        )}
        {!loading && ( // Conditionally render form when loading state is false
          <div className="row">
            <div className="col-5  " style={{ backgroundColor: "transparent" }}>
              <img
                src={logo}
                alt="punch"
                style={{
                  width: "300px",
                  height: "80px",
                  marginLeft: "200px",
                  marginTop: "300px",
                }}
              />
              <h1
                className="text-primary"
                style={{ fontStyle: "italic", marginLeft: "50px" }}
              >
                Unlock unforgettable memories on the road. Your ride, your way.
              </h1>
            </div>

            <div className="col-7" style={{ backgroundColor: "transparent" }}>
              <form onSubmit={handleFormSubmit}  >
                <div
                  className=""
                  style={{
                    marginTop: "100px",
                    marginLeft: "150px",
                    marginRight: "300px",
                    height: "675px",
                  }}
                >
                  <div
                    className="card text-dark"
                    style={{
                      borderRadius: "1rem",
                      backgroundColor: "white",
                    }}
                  >
                    <div className="card-body p-5 text-center" >
                      <div className="">
                        <h2 className="fw-bold mb-2">Shop Login</h2>
                        <p className="text-dark-50 mb-5">
                          Please enter your Email and Password!
                        </p>

                        <div className="mb-3">
                          <input
                            type="email"
                            name="email"
                            className="form-control form-control-lg"
                            placeholder="Email"
                            onChange={handleChange}
                          />
                          {error.email && (
                            <div style={{ color: "red" }}>{error.email}</div>
                          )}
                        </div>
                        <div className="mb-3">
                          <input
                            type="password"
                            name="password"
                            className="form-control "
                            placeholder="Password"
                            onChange={handleChange}
                          />
                          {error.password && (
                            <div style={{ color: "red" }}>{error.password}</div>
                          )}
                        </div>

                        <p className="small mb-3 pb-lg-2">
                          <Link className="text-dark-50" to="/ForgotPassword">
                            Forgot password?
                          </Link>
                        </p>

                        <button
                          className="btn btn-outline-light btn-lg px-5 bg-dark form-control form-control-lg"
                          type="submit"
                        >
                          Login
                        </button>

                        <div className="d-flex justify-content-center text-center mt-3 pt-1">
                          <a href="#!" className="text-dark">
                            <i className="fab fa-facebook-f fa-lg"></i>
                          </a>
                          <a href="#!" className="text-dark">
                            <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                          </a>
                          <a href="#!" className="text-dark">
                            <i className="fab fa-google fa-lg"></i>
                          </a>
                        </div>
                      </div>

                      <div>
                        <p className="mb-0">
                          Don't have an account?{" "}
                          
                          <Link to="/shop" className="text-dark-50 fw-bold">
                            Sign Up
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ShopLogin;

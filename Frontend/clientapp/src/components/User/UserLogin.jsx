import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import logo from "../../image/RORLF.png";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Navbar from "../Navbar";


function UserLogin() {
  const MySwal=withReactContent(Swal)

  const URL = "http://localhost:9999/user/user_login";
  const [loading, setLoading] = useState(false); 
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Activate loading state
    try {
      const response = await axios.post(URL, user);
      setUser({ email: "", password: "" });
      
      console.log(response.data);
      if (response.data.code === 200) {
        Swal.fire({
          title: "Login Successfully",
          text: "Thankyou for login" ,
          icon: "success"
        });
        navigate("/user_home"); 
        localStorage.setItem("Token_key", response.data.token);
      } else if (response.data.code === 404) {
        Swal.fire({
          title: "Login Failed",
          text: "Email or Password does not match" ,
          icon: "info"
        });
      } else {
        alert("User does not exists");
      }
    } catch (err) {
      console.log("connection failed.. " + err);
    } finally {
      setLoading(false); // Deactivate loading state
    }
  };

  return (
    <>
    <Navbar/>
    <div className="" >
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
        <div className="row"  >
          <div className="col-5 "  style={{ backgroundColor: "transparent" }}>
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
              style={{ fontStyle: "italic", marginLeft: "50px",backgroundColor: "#f4e0d6" }}
            >
              Transforming ordinary drives into extraordinary memories....
            </h1>
          </div>

          <div className="col-7 " >
            <form onSubmit={handleFormSubmit}>
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
                  <div className="card-body p-5 text-center">
                    <div className="">
                      <h2 className="fw-bold mb-2">User Login</h2>
                      <p className="text-dark-50 mb-5">
                        Please enter your Email and password!
                      </p>

                      <div className="mb-3">
                      <input type="email" name="email" className="form-control form-control-lg" placeholder="Email" onChange={handleChange}  style={{backgroundColor: "#f4e0d6"}}/>
                    </div>
                    <div className="mb-3">
                      <input type="password" name="password" className="form-control form-control-lg" placeholder="Password" onChange={handleChange} style={{backgroundColor: "#f4e0d6"}}/>
                    </div>

                      <p className="small mb-3 pb-lg-2">
                        <a className="text-dark-50" href="#!">
                          Forgot password?
                        </a>
                      </p>

                      <button
                        className="btn btn-outline-light btn-lg px-5 bg-dark form-control "
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
                        <Link
                          to="/UserRegistration"
                          className="text-dark-50 fw-bold"
                        >
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

export default UserLogin;

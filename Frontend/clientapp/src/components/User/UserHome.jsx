import React from "react";
import UserNavbar from "./UserNavbar";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import bike1 from "../../image/bike1.png";
import punch1 from "../../image/car1.png";
import scooty1 from "../../image/scooty1.png";
import cycle1 from "../../image/cycle.png";

function UserHome() {
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const URL = "http://localhost:9999/user/profile";

  const imgfolderapi = "http://localhost:9999/uploads/";

  const navigate = useNavigate();
  const token_data = localStorage.getItem("Token_key");
  useEffect(() => {
    if (!token_data) {
      navigate("/UserLogin");
    }
    setEmail(token_data);

    fetchData();
  }, []);

  async function fetchData() {
    const token_data = localStorage.getItem("Token_key");
    console.log(`token data is ${token_data}`);
    if (!token_data) {
      navigate("/UserLogin");
    } else {
      const params = {
        userid: token_data,
      };
      try {
        const resp = await axios.get(URL, { params });
        console.log(resp.data);
        setProfile(resp.data);
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <>
      <UserNavbar />
      <div
        className=" container-fluid bg-warning py-5"
        style={{ height: "100vh" }}
      >
        <div class="row">
          <div className="col-3">
            <div className="card vehicle-card">
              <div
                className="card-body vehicle-image"
                style={{ backgroundImage: `url(${punch1})`,height:"500px",backgroundSize:"cover" }}
              ></div>
              <Link
                to="/UserAllCars"
                className="btn btn-primary  form-control-lg"
              >
                Book Cars
              </Link>
            </div>
          </div>

          <div className="col-3">
            <div className="card vehicle-card">
              <div
                className="card-body vehicle-image"
                style={{ backgroundImage: `url(${bike1})`,height:"500px",backgroundSize:"cover" }}
              ></div>
              <Link to="/UserAllBikes" className="btn btn-primary img-fluid">
                Book Bikes
              </Link>
            </div>
          </div>

          <div className="col-3">
            <div class="card vehicle-card">
              <div
                className="card-body vehicle-image"
                style={{ backgroundImage: `url(${scooty1})`,height:"500px" ,backgroundSize:"cover"}}
              ></div>
              <Link to="/UserAllScooty" className="btn btn-primary img-fluid ">
                Book Scootys
              </Link>
            </div>
          </div>

          <div className="col-3">
            <div className="card vehicle-card">
              <div
                className="card-body vehicle-image"
                style={{
                  backgroundImage: `url(${cycle1})`,height:"500px",backgroundSize:"cover" 
                }}
              ></div>
              <Link to="/UserAllCycle" className="btn btn-primary">
                Book Bicycles
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default UserHome;

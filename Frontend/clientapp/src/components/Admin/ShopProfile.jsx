// import pic from "../../image/danny2.jpeg";
import axios from "axios";

import React from "react";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import ShopNavbar from "./ShopNavbar";

function ShopProfile() {
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const URL = "http://localhost:9999/shop/profile";

  const navigate = useNavigate();
  useEffect(() => {
    const token_data = localStorage.getItem("Token_key");
    console.log(`token data is ${token_data}`);
    //if no value in token_data means user is not loggedin
    if (!token_data) {
      navigate("/shop_login");
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
        shopid: token_data,
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
      <ShopNavbar />
  
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col ">
             
            </div>
            <div className="col">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0 fs-5 fw-bold">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{profile.shop_name}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0 fs-5 fw-bold">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{profile.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0 fs-5 fw-bold">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{profile.phoneno}</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0 fs-5 fw-bold">City</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0 ">{profile.city}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0 fs-5 fw-bold">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0 ">{profile.address}</p>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/ShopEditProfile">
       
        <button type="click">Edit Profile</button>
      </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ShopProfile;

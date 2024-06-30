import React from "react";
import UserNavbar from "./UserNavbar";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function UserProfile() {
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

      <div className="container-fluid">
        <div className="row">
          <div className="col-4">

          </div>
          <div className="col-4 bg-light" style={{borderRadius:"40px"}}> 
          <h1 style={{textAlign:"center"}}>Profile</h1>

          <form className="" >

              <img
                src={`${imgfolderapi}${profile.imgURL}`}
                alt="Profile"
                className="img-fluid"
                style={{
                  marginLeft:"30%",
                  width: "200px",
                  height: "200px",
                  borderRadius: "100px",
                }}
              />

            <div className="row mt-5">
              <div className="col-sm-3">
                <p className="mb-0 fs-5 fw-bold">Full Name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{profile.user_name}</p>
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

                  <div className="mt-5 mb-5" style={{alignItems:"center"}}><Link to="/UserEditProfile">
              <button type="submit">Edit Profile</button>
            </Link></div>
            
          </form>
          </div>
          <div className="col-4">

          </div>
        </div>
      </div>
         
    </>
  );
}

export default UserProfile;

import React from "react";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserNavbar from "./UserNavbar";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function UserEditProfile() {
  // const [email, setEmail] = useState("");
  const [pic, setPic] = useState("");
  const [profile, setProfile] = useState({
    user_name: "",
    email:"",
    phoneno: "",
    city: "",
    address: ""
  });
  const URL = "http://localhost:9999/user/profile";
  const EDIT_URL = "http://localhost:9999/user/editUser_profile";

  const navigate = useNavigate();
  const token_data = localStorage.getItem("Token_key");

  useEffect(() => {
    if (!token_data) {
      navigate("/UserLogin");
    }
    setProfile(token_data);
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
  } //fetch data closed

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("user_name", profile.user_name);
      formData.append("email", profile.email);
      formData.append("phoneno", profile.phoneno);
      formData.append("city", profile.city);
      formData.append("address", profile.address);
      formData.append("pic", pic);
      const response = await axios.post(EDIT_URL, formData);

      if (response.data.acknowledged) {
        // alert("profle updated Successfully");
        Swal.fire({
          title: " Updated Successfully",
          text: " User Profile Updated Successfully " ,
          icon: "success"
        });
      } else {
        // alert("Failed to update profile");
        Swal.fire({
          title: " Updation  Failed",
          text: " User Profile Unsuccessfull " ,
          icon: "info"
        });
      }
    } catch (err) {
      console.log("backend connection failed" + err);
    }
  };

  return (
    <>
    <UserNavbar/>
      <div
        className="card mt-2"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          borderRadius: "1rem",
          overflowY: "auto",
          width: "30%",
          marginLeft: "30%",
          marginTop: "10%",
        }}
      >
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                value={profile.user_name}
                onChange={handleChange}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="phoneno">Your email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={profile.email}
                readOnly
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="phoneno">Your Phone:</label>
              <input
                type="tel"
                id="phoneno"
                name="phoneno"
                value={profile.phoneno}
                onChange={handleChange}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="address">Your Address:</label>
              <textarea
                id="address"
                name="address"
                value={profile.address}
                onChange={handleChange}
              ></textarea>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="phoneno">city:</label>
              <input
                type="text"
                id="city"
                name="city"
                value={profile.city}
                onChange={handleChange}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label className="form-label" htmlFor="form3Example2">
                UploadPic
              </label>
              <div className="form-outline">
                <input
                  type="file"
                  id="form3Example2"
                  className="form-control"
                  name="pic"
                  onChange={(e) => {
                    setPic(e.target.files[0]);
                  }}
                />
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default UserEditProfile;


import React from "react";
import axios from "axios";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShopNavbar from "../Admin/ShopNavbar"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function ShopEditProfile() {
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState({
    shop_name: "",
    phoneno: "",
    city: "",
    address: "",
  });
  const URL = "http://localhost:9999/shop/profile";
  const EDIT_URL = "http://localhost:9999/shop/editShop_profile";

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
      navigate("/ShopLogin");
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
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(EDIT_URL, profile);
      if (response.data.acknowledged) {
        // alert("profle updated Successfully");
        Swal.fire({
          title: " Updated Successfully",
          text: " Shop Profile Updated Successfully " ,
          icon: "success"
        });
      } else {
        // alert("Failed to update profile");
        Swal.fire({
          title: " Updation  Failed",
          text: " Shop Profile Unsuccessfull " ,
          icon: "info"
        });
      }
    } catch (err) {
      console.log("backend connection failed" + err);
    }
  };
  return (
    <>
    <ShopNavbar/>
    <div
        className="card mt-2"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          borderRadius: "1rem",
          overflowY: "auto",
          width: "30%",
        }}
      >
        <div className="card-body">
          <form onSubmit={handleForm}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                id="name"
                name="shop_name"
                value={profile.shop_name}
                onChange={handleChange}
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
                type="tel"
                id="phoneno"
                name="city"
                value={profile.city}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <Footer />
      
    </>
  );
}

export default ShopEditProfile;

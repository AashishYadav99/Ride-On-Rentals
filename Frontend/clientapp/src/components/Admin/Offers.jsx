import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import axios from "axios";
import ShopNavbar from "./ShopNavbar";

export default function Offers() {
  const URL = "http://localhost:9999/shop/addoffers";
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    vehicleType: "",
    discount: "",
    code: "",
    expiry: "",
  });
  const [pic, setPic] = useState("");

  const vehicleType = [
    { value: "", label: "Select Vehicle Type" },
    { value: "Bicycle", label: "Bicycle" },
    { value: "Scooty", label: "Scooty" },
    { value: "Motorcycle", label: "Motorcycle" },
    { value: "Car", label: "Car" },
    { value: "All Vehicles", label: "All  Vehicles" },
  ];

  useEffect(() => {
    const token_data = localStorage.getItem("Token_key");
    console.log(`Token Data is: ${token_data}`);
    if (!token_data) {
      navigate("/admin_login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPic(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("vehicleType", formData.vehicleType);
      formDataToSend.append("discount", formData.discount);
      formDataToSend.append("code", formData.code);
      formDataToSend.append("expiry", formData.expiry);
      formDataToSend.append("pic", pic);
      await axios.post(URL, formDataToSend);
      // Redirect or show success message
      setFormData({
        vehicleType: "",
        discount: "",
        code: "",
        expiry: "",
      });
      setPic("");

      // Reset file input
      document.getElementById("pic").value = "";
    } catch (error) {
      console.error("Error adding offer:", error);
      // Handle error
    }
  };

  return (
    <>
      <ShopNavbar />
      <center>
        <h2 className="mt-2">Add an Offer/Discount.</h2>
      </center>
      <div
        className="container mt-4"
        style={{ minHeight: "calc(100vh - 100px)" }}
      >
        <div className="row justify-content-center">
          <div
            className="card text-white mt-2"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              borderRadius: "1rem",
              overflowY: "auto",
              maxWidth: "700px",
            }}
          >
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="vehicleType">Vehicle Type</label>
                  <select
                    className="form-control"
                    id="vehicleType"
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                  >
                    {vehicleType.map((type, index) => (
                      <option key={index} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="discount">Discount</label>
                  <input
                    type="text"
                    className="form-control"
                    id="discount"
                    name="discount"
                    value={formData.discount}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="code">Offer Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="code"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="expiry">Expiry</label>
                  <input
                    type="text"
                    className="form-control"
                    id="expiry"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pic">Upload Offer Image</label>
                  <input
                    type="file"
                    className="form-control"
                    id="pic"
                    name="pic"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="row">
                  <div className="col-sm-4 offset-sm-4">
                    <button type="submit" className="mt-2 btn btn-danger">
                      Add offer
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

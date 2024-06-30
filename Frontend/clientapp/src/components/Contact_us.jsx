import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import pic from "../image/pic1.jpg";
import Footer from "./Footer";
// import "./css/Contactus.css";
// import "../css/Contactus.css"
const ContactUs = () => {
  const MySwal = withReactContent(Swal);
  const URL = "http://localhost:9999/contactUs";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    query: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(URL, formData);
      console.log(res.data);
      // Reset form fields after successful submission
      setFormData({ name: "", email: "", number: "", query: "" });
      Swal.fire({
        title: "Contact Details Submitted",
        text: res.data,
        icon: "success",
      });
    } catch (err) {
      console.log(err.message);
    
    }
  };

  return (
    <>
      <div
        className="col img-fluid d-flex justify-content-center align-items-center"
        style={{
          // backgroundColor: "red",
          width: "100%",
          height: "1000px",
          backgroundSize: "cover",
          backgroundImage: `url(${pic})`,
        }}
      >
        <h1
          className="text-center zoom-in-out"
          style={{ color: "white",
          fontSize: "100px",
          animation: "zoom-in-out 2s infinite",
           }}
        >
          We are here to help you !
        </h1>
      </div>

      {/* Form Section */}
      <div className="" style={{ backgroundColor: "rgb(106,161,158)" }}>
        <h2
          className="text-center mb-4"
          style={{
            color: "white",
            fontFamily: "Libre Caslon Text",
            fontSize: "58px",
          }}
        >
          Contact Information
        </h2>
        <p style={{ textAlign: "center", fontSize: "28px", color: "white" ,margin:"0px 200px 100px 200px"}}>
          We’d love to hear about your experience with Ride on Rentals. Please
          get in touch with any comments, suggestions or questions you might
          have.
        </p>
        <form onSubmit={handleFormSubmit}>
          <div className="container-fluid">
            <div className="row">
              <div className="col ">
                <input
                  type="text"
                  className="form-control mt-3 text-white"
                  style={{
                    backgroundColor: "rgb(106,161,158)",
                    height: "50px",
                    width: "50%",
                    marginLeft: "35.5%",
                    fontSize: "20px",
                    color: "white",
                    
                  }}
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col ">
                <input
                  type="email"
                  className="form-control mt-3 ms-0 text-white"
                  style={{
                    backgroundColor: "rgb(106,161,158)",
                    height: "50px",
                    width: "50%",
                    fontSize: "20px",
                  }}
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              type="tel"
              className="form-control mt-3 text-white"
              style={{
                backgroundColor: "rgb(106,161,158)",
                height: "50px",
                width: "57%",
                fontSize: "20px",
                marginLeft: "18%",
              }}
              id="phone"
              name="number"
              placeholder="Enter your phone number"
              value={formData.number}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group ">
            {/* <label htmlFor="query">Query</label> */}
            <textarea
              className="form-control mt-3 text-white"
              style={{
                backgroundColor: "rgb(106,161,158)",
                height: "150px",
                fontSize: "20px",
                width: "57%",
                marginLeft: "18%",
              }}
              id="query"
              name="query"
              rows="3"
              placeholder="Enter your Query here"
              value={formData.query}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button type="submit" className="mt-3 mb-5 btn btn-light btn-block " style={{alignItems:"center",marginLeft:"35%"}}>
            Submit
          </button>
        </form>
      </div>
      <div style={{marginTop:"50px"}}></div>
      <Footer/>
    </>
  );
};

export default ContactUs;

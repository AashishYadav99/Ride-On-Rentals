import React, { useState } from "react";
// import pic1 from "../../image/bike2.jpeg";
import ShopNavbar from "./ShopNavbar";
import axios from "axios";
import Footer from "../Footer";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function AddVehicle() {
  const MySwal=withReactContent(Swal)

  const URL = "http://localhost:9999/shop/addvehicle";
  // const [vehicleType, setVehicleType] = useState("");

  const [pic, setPic] = useState([]);

  // const [formData, setformData] = useState({
    const [formData, setFormData] = useState({
    dealer_id:"",
    vehicleType: "",
    NumberOfSeats: "",
    FuelType: "",
    company: "",
    model: "",
    color: "",
    vehicleNo: "",
    rent: "",
    price: "",
    duration: "",
    pic: []
  });

  const handleInput = (e) => {

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); //here name is use for identification in input box for exm name="email",name="remarks"
  };

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const formDataWithFiles = new FormData();
      Swal.fire({
        title: "Vehicle Added",
        text: "Thankyou for added vehicle" ,
        icon: "success"})
      Object.entries(formData).forEach(([key, value]) => {
        formDataWithFiles.append(key, value);
      });
      pic.forEach(file => {
        formDataWithFiles.append('pic_multiple', file);
      });
      const res = await axios.post(URL, formDataWithFiles);
      console.log(res.data);
      setFormData({
        vehicleType: "",
        NumberOfSeats: "",
        FuelType: "",
        company: "",
        model: "",
        color: "",
        vehicleNo: "",
        rent: "",
        price: "",
        duration: "",
        vehimage: "",
      }); // Clear the selected rating
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <ShopNavbar />
      <div className="container mt-5" style={{ width: "850px", minHeight: 'calc(100vh-100px)' }}>
        <form action=" " onSubmit={handleForm} className="ms-5"  style={{ width: "850px"}}>
          <div className="col-sm" id="form_border">
            <h1 className="h_one mt-2"  style={{ backgroundColor: "blue" }}>
              Add Vehicles
            </h1>

            {/* Vehicle Type Dropdown */}
            <div className="mb-3 row">
              <label htmlFor="vehicleType" className="col-sm-3 fs-4 col-form-label">
                Vehicle Type
              </label>
              <div className="col-sm-9 ">
                <select
                  style={{
                    width: "300px",
                    height: "50px",
                    borderRadius: "10px",
                  }}
                  id="vehicleType"
                  className="form-select fs-5"
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleInput}
                >
                  <option value="">Select vehicles</option>
                  <option value="Cycle">Cycle</option>
                  <option value="Scooty">Scooty</option>
                  <option value="Bike">Bike</option>
                  <option value="Car">Car</option>
                </select>
              </div>
            </div>

            {/* Number of Seats Input */}
            {formData.vehicleType === "Car" && (
              <div className="mb-3 row">
                <label
                  htmlFor="numberOfSeats"
                  className="col-sm-3 fs-4 col-form-label"
                >
                  Number of Seats
                </label>
                <div className="col-sm-9">
                  <input
                    style={{
                    
                      width: "300px",
                      height: "50px",
                      borderRadius: "10px",
                    }}
                    type="number"
                    id="numberOfSeats"
                    className="form-control fs-5"
                    name="NumberOfSeats"
                    value={formData.NumberOfSeats}
                    onChange={handleInput}
                    placeholder="Enter number of seats"
                  />
                </div>
              </div>
            )}

            <div className="mb-3  row">
              <label for="inputPassword" className="col-sm-3 fs-4 col-form-label ">
                Feul Type
              </label>
              <div className="col-sm-9">
                <select
                  id="FuelType"
                  className="form-select fs-5"
                  name="FuelType"
                  value={formData.FuelType}
                  onChange={handleInput}
                  style={{
                    width: "300px",
                    height: "50px",
                    borderRadius: "10px",
                  }}
                >
                  <option value="type">Select Fuel Type</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Electric">Electric</option>
                  <option value="Diesel">Diesel</option>
                </select>
              </div>
            </div>

            <div className="mb-3  row">
              <label for="inputPassword" className="col-sm-3 fs-4 col-form-label ">
                Company
              </label>
              <div className="col-sm-9">
                <input
                  value={formData.company}
                  onChange={handleInput}
                  name="company"
                  type="teNumberxt"
                  style={{ width: "300px" }}
                  className="input1"
                />
              </div>
            </div>

            <div className="mb-3  row">
              <label for="inputPassword" className="col-sm-3 fs-4 col-form-label ">
                Model
              </label>
              <div className="col-sm-9">
                <input
                  value={formData.model}
                  onChange={handleInput}
                  name="model"
                  type="text"
                  style={{ width: "300px" }}
                  className="input1"
                />
              </div>
            </div>

            <div className="mb-3  row">
              <label for="inputPassword" className="col-sm-3 fs-4 col-form-label ">
                Color
              </label>
              <div className="col-sm-9">
                <input
                  value={formData.color}
                  onChange={handleInput}
                  name="color"
                  type="text"
                  style={{ width: "300px" }}
                  className="input1"
                />
              </div>
            </div>

            <div className="mb-3  row">
              <label for="inputPassword" className="col-sm-3 fs-4 col-form-label ">
                Vehicle No
              </label>
              <div className="col-sm-9">
                <input
                  value={formData.vehicleNo}
                  onChange={handleInput}
                  type="teNumberxt"
                  name="vehicleNo"
                  style={{ width: "300px" }}
                  className="input1"
                />
              </div>
            </div>

            <div className="mb-3  row">
              <label for="inputPassword" className="col-sm-3 fs-4 col-form-label ">
                Rent
              </label>
              <div className="col-sm-9">
                <input
                  value={formData.rent}
                  onChange={handleInput}
                  type="teNumberxt"
                  name="rent"
                  style={{ width: "300px" }}
                  className="input1"
                />
              </div>
            </div>

            <div className="mb-3  row">
              <label for="inputPassword" className="col-sm-3 fs-4 col-form-label ">
                Price
              </label>
              <div className="col-sm-9">
                <input
                  value={formData.price}
                  onChange={handleInput}
                  type="teNumberxt"
                  name="price"
                  style={{ width: "300px" }}
                  className="input1"
                />
              </div>
            </div>

            <div className="mb-3  row">
              <label for="inputPassword" className="col-sm-3 fs-4 col-form-label ">
                Duration
              </label>
              <div className="col-sm-9">
                <input
                  value={formData.duration}
                  onChange={handleInput}
                  type="teNumberxt"
                  name="duration"
                  style={{ width: "300px" }}
                  className="input1"
                />
              </div>
            </div>

            

            <div className="mb-3  row">
              <label className="col-sm-3 fs-4 col-form-label" htmlFor="form3Example2">
                UploadPic
              </label>
              <div className="col-sm-9">
                <input
                multiple
                  type="file"
                  id="pic"
                  className="form-control"
                  style={{ width: "300px",height:"50px" }}
                  name="pic_multiple"
                  onChange={(e) => {
                    const files=e.target.files;
                    setPic(Array.from(files))
                  }}
                />
              </div>
            </div>

            <input
                  value={localStorage.getItem("Token_key")}
                  // onChange={handleInput}
                  type="teNumberxt"
                  name="dealer_id"
                  style={{ width: "300px" }}
                  className="input1"
                />

            {/* Add Button */}
            <div className="row">
              <div className="col-3"></div>
              <div className="col-7">
                <button
                  type="button"
                  className="btn btn-primary col-sm-6"
                  style={{ fontSize: "25px", fontWeight: "bold" }}
                  onClick={handleForm}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default AddVehicle;

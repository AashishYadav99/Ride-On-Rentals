// import pic2 from "../../image/pic2.jpg";
import "../../css/ShopStyle.css";
import pic1 from "../../image/pic1.jpg";
import { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";

function UserRegistration() {
  const URL = "http://localhost:9999/user/user_regis";
  const [user, setUser] = useState({
    user_name: "",
    email: "",
    phoneno: "",
    password: "",
    city: "",
    address: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value }); //here name is use for identification in input box for exm name="email",name="remarks"
  };

  const handleForm = async (e) => {
    e.preventDefault();
    if (
      !user.user_name ||
      !user.email ||
      !user.phoneno ||
      !user.password ||
      !user.city ||
      !user.address
    ) {
      Swal.fire({
        title: "Please fill out all required fields",
        icon: "warning",
      });
      return; // Exit the function without submitting the form
    }

    try {
      const res = await axios.post(URL, user);
      console.log(res.data);
      setUser({
        user_name: "",
        email: "",
        phoneno: "",
        password: "",
        city: "",
        address: "",
      }); 
      Swal.fire({
        title: "Registration Successfull",
        icon: "success",
      }).then(function () {
        // alert(2);
        window.location = "/UserLogin";
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={pic1} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm" id="form_border">
            <form className="container2" onSubmit={handleForm}>
              <h1 className="h_one" style={{ backgroundColor: "#e5b36a" }}>
                User Registration
              </h1>
              <div className="mb-3  row">
                <label for="inputPassword" className="col-sm-3 col-form-label ">
                  User Name
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    style={{ width: "300px" }}
                    name="user_name"
                    className="input1 form-control-lg"
                    value={user.user_name}
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="mb-3  row">
                <label for="inputPassword" className="col-sm-3 col-form-label ">
                  Email
                </label>
                <div className="col-sm-9">
                  <input
                    type="email"
                    style={{ width: "300px" }}
                    name="email"
                    className="input1"
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="mb-3  row">
                <label for="inputPassword" className="col-sm-3 col-form-label ">
                  Phone
                </label>
                <div className="col-sm-9">
                  <input
                    type="teNumberxt"
                    name="phoneno"
                    value={user.phoneno}
                    onChange={handleInput}
                    style={{ width: "300px" }}
                    className="input1"
                  />
                </div>
              </div>

              <div className="mb-3  row">
                <label for="inputPassword" className="col-sm-3 col-form-label ">
                  password
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    style={{ width: "300px" }}
                    name="password"
                    className="input1"
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="mb-3  row">
                <label for="inputPassword" className="col-sm-3 col-form-label ">
                  City
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    style={{ width: "300px" }}
                    name="city"
                    className="input1"
                    value={user.city}
                    onChange={handleInput}
                  />
                </div>
              </div>

              <div className="mb-3  row">
                <label for="inputPassword" className="col-sm-3 col-form-label ">
                  Address
                </label>
                <div className="col-sm-9">
                  <textarea
                    type="teNumberxt"
                    rows="3"
                    value={user.address}
                    onChange={handleInput}
                    name="address"
                    style={{ width: "300px" }}
                    className="input1"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-3"></div>
                <div className="col-7">
                  <button
                    type="submit"
                    className="btn btn-primary col-sm-6"
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      backgroundColor: "#e5b36a",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserRegistration;

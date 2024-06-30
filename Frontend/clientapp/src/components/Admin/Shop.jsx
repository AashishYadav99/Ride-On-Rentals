// import pic2 from "../../image/pic2.jpg";
import "../../css/ShopStyle.css";
import Shopregis from "../../image/pic1.jpg";
import { useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Shop() {
  const URL = "http://localhost:9999/shop/shop_regis";

  const [shop, setShop] = useState({
    shop_name: "",
    email: "",
    phoneno: "",
    password: "",
    city: "",
    address: "",
    owner_name: "",
    about_shop: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setShop({ ...shop, [name]: value }); //here name is use for identification in input box for exm name="email",name="remarks"
  };

  const handleForm = async (e) => {
    e.preventDefault();
    if (
      !shop.shop_name || !shop.email || !shop.phoneno || !shop.password || !shop.city || !shop.address || !shop.owner_name || !shop.about_shop
    ) {
      Swal.fire({
        title: "Please fill out all required fields",
        icon: "warning",
      });
      return; // Exit the function without submitting the form
    }
    try {
      const res = await axios.post(URL, shop);
      console.log(res.data);
      setShop({
        shop_name: "",
        email: "",
        phoneno: "",
        password: "",
        city: "",
        address: "",
        owner_name: "",
        about_shop: ""
      }); // Clear the selected rating
      Swal.fire({
        title: "Registration Successfull",
        icon: "success",
      }).then(function () {
        // alert(2);
        window.location = "/shop_login";
      });
    } catch (err) {
      console.log(err.message);
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
                  <img src={Shopregis} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm" id="form_border">
            <form className="container2" onSubmit={handleForm}>
              <h1 className="h_one" style={{backgroundColor:"#e5b36a"}}>Shop Registration</h1>
              <div className="mb-3  row">
                <label for="inputPassword" className="col-sm-3 col-form-label ">
                  Shop Name
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    style={{ width: "300px" }}
                    name="shop_name"
                    className="input1 form-control-lg"
                    value={shop.shop_name}
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
                    value={shop.email}
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
                    value={shop.phoneno}
                    onChange={handleInput}
                    style={{ width: "300px" }}
                    className="input1"
                  />
                </div>
              </div>

              <div className="mb-3  row">
                <label for="inputPassword" className="col-sm-3 col-form-label ">
                  Password
                </label>
                <div className="col-sm-9">
                  <input
                    type="password"
                    name="password"
                    value={shop.password}
                    onChange={handleInput}
                    style={{ width: "300px" }}
                    className="input1"
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
                    value={shop.city}
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
                    value={shop.address}
                    onChange={handleInput}
                    name="address"
                    style={{ width: "300px" }}
                    className="input1"
                  />
                </div>
              </div>

              <div className="mb-3  row">
                <label for="inputPassword" className="col-sm-3 col-form-label ">
                  Ower Name
                </label>
                <div className="col-sm-9">
                  <input
                    type="teNumberxt"
                    name="owner_name"
                    value={shop.owner_name}
                    onChange={handleInput}
                    style={{ width: "300px" }}
                    className="input1"
                  />
                </div>
              </div>

              <div className="mb-3  row">
                <label for="inputPassword" className="col-sm-3 col-form-label ">
                  About Shop
                </label>
                <div className="col-sm-9">
                  <textarea
                    type="teNumberxt"
                    rows="3"
                    name="about_shop"
                    value={shop.about_shop}
                    onChange={handleInput}
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
                    style={{ fontSize: "25px", fontWeight: "bold"  ,backgroundColor:"#e5b36a"}}
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

export default Shop;

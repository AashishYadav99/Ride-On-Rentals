import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

export default function AllCars() {
  const URL = "http://localhost:9999/allcars";
  const imgfolderapi = "http://localhost:9999/vehiclesimg/";

  const [cars, setCars] = useState([]);
  const [record, setRecord] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const resp = await axios.get(URL);
        setCars(resp.data);
        setRecord(resp.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCars();
  }, []);

  const Filter = (event) => {
    const searchTerm = event.target.value.toLowerCase();

    if (searchTerm === "") {
      setRecord(cars);
    } else {
      setRecord(
        cars.filter((car) => car.model.toLowerCase().includes(searchTerm))
      );
    }
  };

  const CarSlider = ({ images }) => {
    return (
      <>
        <Carousel
          prevIcon={
            <BsFillCaretLeftFill
              style={{ color: "red", height: "100px", width: "100px" }}
            />
          } // Set color to red
          nextIcon={
            <BsFillCaretRightFill
              style={{ color: "red", height: "100px", width: "100px" }}
            />
          } // Set color to red
        >
          {" "}
          {images.map((image, imageIndex) => (
            <Carousel.Item key={imageIndex}>
              <img
                src={`${imgfolderapi}${image.originalname}`}
                className="d-block w-100"
                alt={`Slide ${imageIndex}`}
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </>
    );
  };

  return (
    <>
      <div
        className="bg-info form-control"
        style={{ display: "flex", height: "80px", marginTop: "200px" }}
      >
        <h1
          className="form-control-lg"
          style={{ marginTop: "15px", marginLeft: "20px" }}
        >
          All Cars
        </h1>
        <input
          className="fs-5"
          type="text"
          placeholder="Search Car By Model"
          onChange={Filter}
          style={{
            width: "300px",
            height: "50px",
            marginLeft: "1300px",
            marginTop: "15px",
            border: "5px",
            borderRadius: "10px",
            backgroundColor: "lightgoldenrodyellow",
          }}
        />
      </div>

      {/* car list start form here */}
      <div className="conatiner">
        <div className="row">
          {record.map((car, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card ">
                <CarSlider images={car.image} />
              </div>
              <table className="bg-warning" style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td>
                      <div
                        style={{
                          marginBottom: "5px",
                          marginLeft: "0px",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "40px",
                            fontFamily: "Times New Roman",
                          }}
                        >
                          <span style={{ font: "20px", fontWeight: "bold" }}>
                            Model :{" "}
                          </span>
                          <span className="me-5" style={{ font: "15px" }}>
                            {car.model}
                          </span>
                          <span style={{ font: "20px", fontWeight: "bold" }}>
                            Company :{" "}
                          </span>
                          <span className="me-5">{car.company}</span>
                          <span style={{ font: "20px", fontWeight: "bold" }}>
                            Color :{" "}
                          </span>
                          <span className="me-5">{car.color}</span>
                        </div>
                        <div
                          style={{
                            fontSize: "40px",
                            fontFamily: "Times New Roman",
                          }}
                        >
                          <i
                            className="fas fa-chair me-2"
                            style={{ color: "blue" }}
                          ></i>
                          <span className="font20 latoBlack me-5">
                            {car.NumberOfSeats}
                          </span>
                          <span style={{ font: "20px", fontWeight: "bold" }}>
                            VehicleNo :
                          </span>
                          <span className="font20 latoBlack me-5">
                            {car.vehicleNo}
                          </span>
                          <i
                            className="fas fa-gas-pump me-2"
                            style={{ fontSize: "36px", color: "red" }}
                          ></i>
                          <span className="font20 latoBlack">
                            {car.FuelType}
                          </span>
                        </div>
                        <div
                          style={{
                            fontSize: "40px",
                            fontFamily: "Times New Roman",
                          }}
                        >
                          <span style={{ font: "20px", fontWeight: "bold" }}>
                            Rent :
                          </span>
                          <span className="font20 latoBlack me-5">
                            {car.rent}
                          </span>

                          <span>for booking you must login 👉🏿 </span>

                          <Link to={"/UserLogin"}>
                            <button
                              type="button"
                              className="btn btn-primary text-white font-weight-bold"
                            >
                              BOOK
                            </button>
                          </Link>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
          {/* </div> */}
          {/* 
          <div className="col-4">Ashish</div>
          <div className="col-4">Yadav</div> */}
        </div>
      </div>
    </>
  );
}

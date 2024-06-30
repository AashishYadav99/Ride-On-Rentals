import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

export default function AllBicycle() {
  const URL = "http://localhost:9999/allcycles";
  const imgfolderapi = "http://localhost:9999/vehiclesimg/";

  const [bicycle, setBicycle] = useState([]);
  const [record, setRecord] = useState([]);

  useEffect(() => {
    const fetchBicycle = async () => {
      try {
        const resp = await axios.get(URL);

        setBicycle(resp.data);
        setRecord(resp.data);
        console.log(bicycle);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBicycle();
  }, []);

  const Filter = (event) => {
    // setRecord(bicycle);
    const searchTerm = event.target.value.toLowerCase();

    if (searchTerm === "") {
      // If search term is empty, display all cars
      setRecord(bicycle);
    } else {
      // Filter cars based on the entered model number
      setRecord(
        bicycle.filter((bicycle2) =>
          bicycle2.model.toLowerCase().includes(searchTerm)
        )
      );
    }
  };

  const BicycleSlider = ({ images }) => {
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
      <div className="bg-info" style={{ display: "flex", height: "80px" ,marginTop:"200px"}}>
        <h1 style={{ marginTop: "15px", marginLeft: "20px" }}>All Bicycle</h1>
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
      <div className="row" style={{ margin: "10px 10px 10px 10px" }}>
        {record.map((bicycle1, index) => (
          <div className="" key={index}>
            <div>
              <BicycleSlider images={bicycle1.image} />
            </div>
            <table className="bg-warning" style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td>
                    <div
                      style={{
                        marginBottom: "5px",
                        marginLeft: "0px",
                        marginLeft: "300px",
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
                          {bicycle1.model}
                        </span>
                        <span style={{ font: "20px", fontWeight: "bold" }}>
                          Company :{" "}
                        </span>
                        <span className="me-5">{bicycle1.company}</span>
                        <span style={{ font: "20px", fontWeight: "bold" }}>
                          Color :{" "}
                        </span>
                        <span className="me-5">{bicycle1.color}</span>
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
                          {bicycle1.NumberOfSeats}
                        </span>
                        <span style={{ font: "20px", fontWeight: "bold" }}>
                          VehicleNo :
                        </span>
                        <span className="font20 latoBlack me-5">
                          {bicycle1.vehicleNo}
                        </span>
                        <i
                          className="fas fa-gas-pump me-2"
                          style={{ fontSize: "36px", color: "red" }}
                        ></i>
                        <span className="font20 latoBlack">
                          {bicycle1.FuelType}
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
                          {bicycle1.rent}
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
      </div>
    </>
  );
}

import UserNavbar from "./UserNavbar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";

function UserAllCycles() {
  const URL = "http://localhost:9999/allcycles";
  const imgfolderapi = "http://localhost:9999/vehiclesimg/";

  const [cycle, setCycle] = useState([]);
  const [record, setRecord] = useState([]);

  useEffect(() => {
    const fetchCycle = async () => {
      try {
        const resp = await axios.get(URL);
        setCycle(resp.data);
        setRecord(resp.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCycle();
  }, []);

  const Filter = (event) => {
    const searchTerm = event.target.value.toLowerCase();

    if (searchTerm === "") {
      setRecord(cycle);
    } else {
      setRecord(
        cycle.filter((cycle1) => cycle1.model.toLowerCase().includes(searchTerm))
      );
    }
  };

  const CycleSlider = ({ images }) => {
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
      <UserNavbar />
      <div className=" form-control" style={{ display: "flex", height: "80px",backgroundColor:"#e5b36a" }}>
        <h1
          className="form-control-lg"
          style={{ marginTop: "15px", marginLeft: "20px" }}
        >
          All cycle
        </h1>
        <input
          className="fs-5"
          type="text"
          placeholder="Search Cycles By Model"
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

      <div className="conatiner">
        <div className="row">
              {record.map((cycle, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card ">
                    <CycleSlider images={cycle.image} />
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
                              <span
                                style={{ font: "20px", fontWeight: "bold" }}
                              >
                                Model :{" "}
                              </span>
                              <span className="me-5" style={{ font: "15px" }}>
                                {cycle.model}
                              </span>
                              <span
                                style={{ font: "20px", fontWeight: "bold" }}
                              >
                                Company :{" "}
                              </span>
                              <span className="me-5">{cycle.company}</span>
                              <span
                                style={{ font: "20px", fontWeight: "bold" }}
                              >
                                Color :{" "}
                              </span>
                              <span className="me-5">{cycle.color}</span>
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
                                {cycle.NumberOfSeats}
                              </span>
                              <span
                                style={{ font: "20px", fontWeight: "bold" }}
                              >
                                VehicleNo :
                              </span>
                              <span className="font20 latoBlack me-5">
                                {cycle.vehicleNo}
                              </span>
                              <i
                                className="fas fa-gas-pump me-2"
                                style={{ fontSize: "36px", color: "red" }}
                              ></i>
                              <span className="font20 latoBlack">
                                {cycle.FuelType}
                              </span>
                            </div>
                            <div
                              style={{
                                fontSize: "40px",
                                fontFamily: "Times New Roman",
                              }}
                            >
                              <span
                                style={{ font: "20px", fontWeight: "bold" }}
                              >
                                Rent :
                              </span>
                              <span className="font20 latoBlack me-5">
                                {cycle.rent}
                              </span>

                              {/* <span>for booking you must login 👉🏿 </span> */}
                              <Link to={`/BookingForm/${cycle._id}`}>
                                <button
                                  type="button"
                                  className="btn btn-primary text-white font-weight-bold"
                                >
                                  Book
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
      </div>
    </>
  );
}

export default UserAllCycles;

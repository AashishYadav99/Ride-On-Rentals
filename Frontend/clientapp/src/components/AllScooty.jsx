import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs"; 

export default function AllScooty() {
  const URL = "http://localhost:9999/allscooty";
  const imgfolderapi = "http://localhost:9999/vehiclesimg/";

  const [scooty, setScooty] = useState([]);
  const [record, setRecord] = useState([]);


  useEffect(() => {
    const fetchScooty = async () => {
      try {
        const resp = await axios.get(URL);
        setScooty(resp.data);
        setRecord(resp.data)
      } catch (err) {
        console.log(err);
      }
    }
    fetchScooty();
  }, []);

  const Filter = (event) => {
    // setRecord(scooty);
    const searchTerm = event.target.value.toLowerCase();

    if (searchTerm === "") {
      // If search term is empty, display all cars
      setRecord(scooty);
    } else {
      // Filter cars based on the entered model number
      setRecord(
        scooty.filter((scooty2) => scooty2.model.toLowerCase().includes(searchTerm))
      );
    }
  };


  const ScootySlider = ({ images }) => {
    return (
      <>
 <Carousel prevIcon={<BsFillCaretLeftFill style={{ color: "red",height:"100px",width:"100px" }} />} // Set color to red
                  nextIcon={<BsFillCaretRightFill style={{ color: "red",height:"100px",width:"100px" }} />} // Set color to red
        >          {images.map((image, imageIndex) => (
            <Carousel.Item key={imageIndex}>
              <img
                src={`${imgfolderapi}${image.originalname}`}
                className="d-block w-100"
                alt={`Slide ${imageIndex}`}
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
       
      </>
    );
  };

  return (
    <>
      <div className="bg-info" style={{ display:"flex" ,height:"80px",marginTop:"200px"}}>
          <h1 style={{marginTop:"15px",marginLeft:"20px"}}>All Scooty</h1>
        <input
          className="fs-5"
          type="text"
          placeholder="Search Car By Model"
          onChange={Filter}
          style={{
            width: "300px",
            height: "50px",
            marginLeft:"1300px",
            marginTop:"15px",
            border: "5px",
            borderRadius: "10px",
            backgroundColor: "lightgoldenrodyellow",
          }}
        />   
        </div> 
      <div className="row" style={{ margin: "10px 10px 10px 10px" }}>
        {record.map((scooty1, index) => (
          <div className="" key={index}>
            <div>
              <ScootySlider images={scooty1.image} />
            </div>
            <table className="bg-warning" style={{width:"100%"}}>
              <tbody>
                <tr>
                  <td>
                    <div style={{ marginBottom: "5px", marginLeft: "0px",marginLeft:"300px" }}>
                      <div style={{ fontSize: "40px", fontFamily: "Times New Roman" }}>
                        <span style={{ font: "20px", fontWeight: "bold" }}>Model : </span>
                        <span className="me-5" style={{ font: "15px" }}>{scooty1.model}</span>
                        <span style={{ font: "20px", fontWeight: "bold" }}>Company : </span>
                        <span className="me-5">{scooty1.company}</span>
                        <span style={{ font: "20px", fontWeight: "bold" }}>Color : </span>
                        <span className="me-5">{scooty1.color}</span>
                      </div>
                      <div style={{ fontSize: "40px", fontFamily: "Times New Roman" }}>
                        <i className="fas fa-chair me-2" style={{ color: "blue" }}></i>
                        <span className="font20 latoBlack me-5">{scooty1.NumberOfSeats}</span>
                        <span style={{ font: "20px", fontWeight: "bold" }}>VehicleNo :</span>
                        <span className="font20 latoBlack me-5">{scooty1.vehicleNo}</span>
                        <i className="fas fa-gas-pump me-2" style={{ fontSize: "36px", color: "red" }}></i>
                        <span className="font20 latoBlack">{scooty1.FuelType}</span>
                      </div>
                      <div style={{ fontSize: "40px", fontFamily: "Times New Roman" }}>
                        <span style={{ font: "20px", fontWeight: "bold" }}>Rent :</span>
                        <span className="font20 latoBlack me-5">{scooty1.rent}</span>
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
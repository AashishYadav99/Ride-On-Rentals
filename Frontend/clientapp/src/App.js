import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css"; // Import custom CSS file for additional styling
import "./css/cardhover.css";
import Footer from "./components/Footer";

import videobg from "../src/image/bgvideo.mp4";
import offer from "../src/image/offer.png";
import faq from "../src/image/faq.png";
import traffic from "../src/image/traffic.png";

import routeimg from "../src/image/route.webp";
import helmet from "../src/image/helmet.webp";
import secure_payment from "../src/image/secure_payment.webp";
import hours from "../src/image/24_hours.webp";
import person from "../src/image/person.webp";
import cash from "../src/image/cash.webp";

// image for explore vahicles
import car from "../src/image/car.png";
import bikevehicle from "../src/image/motorcycle.png";
import scootyvehicle from "../src/image/scooter.png";
import cyclevehicle from "../src/image/bicycle.png";
import axios from "axios";

function App() {
  // code for getting user feedback on main  home page

  const URL = "http://localhost:9999/shop/allfeedbacks";
  const [feedback, setFeedback] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        console.log(response.data);
        setFeedback(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container-fluid  ">
        <div
          className=" d-flex justify-content-center align-items-center flex-column"
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <video
            autoPlay
            loop
            muted
            className="background-video"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: "-1",
            }}
          >
            <source src={videobg} type="video/mp4" />
            {/* Add additional source elements for different video formats if necessary */}
            Your browser does not support the video tag.
          </video>

          <div className="part1 text-light " style={{ textAlign: "center" }}>
            <div className="col-md-12 text-center">
              <h1>Ride On Rentals</h1>
              <h2>Explore Your Rides by Booking Car, Bike, Scooty, or Cycle</h2>
            </div>
            <h1>SELF RIDE VEHICLE RENTALS </h1>
          </div>
        </div>
      </div>

      <div className="container-fluid text-center bg-light">
        <div class="row">
          <div class="col" >
            <div className="cardhover1 mx-auto mt-2" style={{padding:"20px", borderRadius:"50%",width:"270px"}}>
               <img
              className="col mb-2 justify-content-center align-items-center"
              src={routeimg}
              alt="Description of the image"
              style={{ width: "200px", height: "200px", marginTop:"10px"}}
            /></div>
           
            <div>
              <h1> No Riding Limits</h1>
              <p className="fs-5">Odometer Won't Scare You Anymore.</p>
            </div>
          </div>
          <div class="col">
          <div className="cardhover1 mx-auto mt-2" style={{padding:"20px", borderRadius:"50%",width:"270px"}}>
            <img
              className="col  justify-content-center align-items-center"
              src={helmet}
              alt="Description of the image"
              style={{ width: "200px", height: "200px" , marginTop:"10px"}}
            />
            </div>
            <div>
              <h1> Freebies</h1>
              <p className="fs-5">Helmets Always, Sometimes More.</p>
            </div>
          </div>
          <div class="col">
          <div className="cardhover1 mx-auto mt-2" style={{padding:"20px", borderRadius:"50%",width:"270px"}}>
            <img
              className="col  justify-content-center align-items-center"
              src={secure_payment}
              alt="Description of the image"
              style={{ width: "200px", height: "200px", marginTop:"10px" }}
            />
            </div>
            <div>
              <h1> Secure Payments</h1>
              <p className="fs-5">Our Payment Partners are Industry Leaders.</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
          <div className="cardhover1 mx-auto mt-5" style={{padding:"20px", borderRadius:"50%",width:"270px"}}>
            <img
              className="col  justify-content-center align-items-center"
              src={hours}
              alt="Description of the image"
              style={{ width: "200px", height: "200px", marginTop:"10px"}}
            />
            </div>
            <div>
              <h1> No Bullshit</h1>
              <p  className="fs-5">A Day Rent is simply for 24 hrs, We mean it.</p>
            </div>
          </div>
          <div class="col">
          <div className="cardhover1 mx-auto mt-5" style={{padding:"20px", borderRadius:"50%",width:"270px"}}>
            <img
              className="col  justify-content-center align-items-center"
              src={person}
              alt="Description of the image"
              style={{ width: "200px", height: "200px", marginTop:"10px" }}
            />
            </div>
            <div>
              <h1> Verified Dealers</h1>
              <p  className="fs-5">Every Single Dealer is Committed to Quality Service.</p>
            </div>
          </div>
          <div class="col">
          <div className="cardhover1 mx-auto mt-5" style={{padding:"20px",border:"0px solid black", borderRadius:"50%",width:"270px"}}>
            <img
              className="col  justify-content-center align-items-center"
              src={cash}
              alt="Description of the image"
              style={{ width: "200px", height: "200px", marginTop:"10px" }}
            />
            </div>
            <div>
              <h1> 100% Moneyback</h1>
              <p  className="fs-5">Not Happy With Service, Take Your Money Back.</p>
            </div>
          </div>
        </div>
      </div>

<hr></hr>
      <h1
        className="mt-5 mb-5"
        style={{ textAlign: "center", backgroundColor: "red" }}
      >
        EXPLORE VEHICLES
      </h1>
      <hr></hr>

      <div className="container-fluid" style={{ marginBottom: "200px" }}>
        <div className="row">
          <div
            className=" cardhover col me-5 ms-5 rounded-circle bg-light  "
            style={{
              // borderStyle: "solid",
              textAlign: "center",
              // height: "500px",
              // width: "50px",
              boxShadow: "0px 0px 10px 5px grey",
            }}
          >
            <Link to="/allcars">
              <img
                className="col  justify-content-center align-items-center"
                src={car}
                alt="Description of the image"
                style={{ width: "350px", height: "350px" ,marginTop:"5%"}}
              />
            </Link>
          </div>

          <div
            className=" cardhover col me-5 ms-5 bg-light rounded-circle"
            style={{
              // borderStyle: "solid",
              textAlign: "center",
              // height: "500px",
              // width: "50px",
              boxShadow: "0px 0px 10px 5px grey",
            }}
          >
            <Link to="/allbikes">
              <img
                src={bikevehicle}
                alt="Description of the image"
                style={{ width: "350px", height: "350px" ,marginTop:"5%"}}
              />
            </Link>
          </div>

          <div
            className="cardhover col bg-light me-5 ms-5 rounded-circle "
            style={{
              // borderStyle: "solid",
              textAlign: "center",
              // height: "500px",
              // width: "50px",
              boxShadow: "0px 0px 10px 5px grey",
            }}
          >
            <Link to="/allscooty">
              <img
                src={scootyvehicle}
                alt="Description of the image"
                style={{ width: "350px", height: "350px" ,marginTop:"5%"}}
              />
            </Link>
          </div>

          <div
            className="cardhover col bg-light me-5 ms-5 rounded-circle"
            style={{
              // borderStyle: "solid",
              textAlign: "center",
              // height: "100px",
              boxShadow: "0px 0px 10px 5px grey",
            }}
          >
            <Link to="/allbicycles">
              <img
                src={cyclevehicle}
                alt="Description of the image"
                style={{ width: "350px", height: "350px" ,marginTop:"5%"}}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* card starts here */}

      <div className="card_main mt-5 mb-5">
        <div className="row">
          <div
            className="col ms-5 cardhover"
            style={{
              borderStyle: "solid",
              borderRadius: "25px",
              backgroundColor: "rgb(106,161,158)",
              position: "relative",
              height: "500px",
              textAlign: "center",
            }}
          >
            <img
              className="card-img-top"
              src={offer}
              alt="Card image cap"
              style={{ height: "200px", width: "200px" }}
            />

            <div
              className="card-body mt-5 border-top border-2 border-light bg-light p-25"
              style={{ boxShadow: "0px 0px 10px 5px grey" }}
            >
              <h5 className="card-title fw-bold">Offers & Discounts</h5>
              <p className="card-text fs-4">
                Don't miss out the offers and discounts. Utilize your best
                offers..
              </p>
              <Link
                to="/alloffers"
                className="btn "
                style={{ backgroundColor: "rgb(231,146,108)", width: "45%" }}
              >
                Explore latest Offers
              </Link>
            </div>
          </div>

          <div
            className="col ms-5 cardhover"
            style={{
              borderStyle: "solid",
              borderRadius: "25px",
              backgroundColor: "rgb(106,161,158)",
              height: "500px",
              textAlign: "center",
            }}
          >
            <img
              class="card-img-top"
              src={faq}
              alt="Card image cap"
              style={{ height: "200px", width: "200px" }}
            />
            <div
              class="card-body mt-5 border-top border-2 border-light bg-light p-25 "
              style={{ boxShadow: "0px 0px 10px 5px grey" }}
            >
              <h5 class="card-title fw-bold">FAQ</h5>
              <p class="card-text fs-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link
                to="/allfaqs"
                className="btn "
                style={{ backgroundColor: "rgb(231,146,108)", width: "45%" }}
              >
                FAQ'S
              </Link>
            </div>
          </div>

          <div
            className="col ms-5 me-5 cardhover"
            style={{
              borderStyle: "solid",
              borderRadius: "25px",
              backgroundColor: "rgb(106,161,158)",
              height: "500px",
              textAlign: "center",
            }}
          >
            <img
              class="card-img-top"
              src={traffic}
              alt="Card image cap"
              style={{ height: "200px", width: "200px" }}
            />
            <div
              className="card-body mt-5  border-top border-2 border-light bg-light p-25"
              style={{ boxShadow: "0px 0px 10px 5px grey" }}
            >
              <h5 class="card-title fw-bold">Traffic Rules</h5>
              <p class="card-text fs-4">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link
                to="/trafficrules"
                className="btn "
                style={{ backgroundColor: "rgb(231,146,108)", width: "45%" }}
              >
                Know Traffic Rules
              </Link>
            </div>
          </div>
        </div>
      </div>

<hr>
</hr>
<h1 style={{ textAlign: "center", backgroundColor: "red" }}>
          User Feedbacks
        </h1>
        <hr></hr>
      {/* New Section */}

      <div className="container-fluid  mt-5" style={{ marginTop: "400px" }}>
        
        <div className=" row mt-5" >
          {feedback.map((x, index) => {
            return (
              <div className="col-4 cardhover" key={index}>
                <div
                  className="bg-light mb-5 px-3 py-3 pt-3 pb-5 "
                  style={{ boxShadow: "0px 0px 10px 5px grey",height:"650px",margin:"0px 50px",borderRadius:"10px" }}
                >
                  <div className="mb-3 fs-1">
                    <span className="fw-bold  ">{x.name}</span>
                  </div>
                  <div className="mb-2 fs-1">{x.rating}</div>
                  <div className="fs-3"> {x.feedback}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        class="container-fluid text-center"
        style={{ backgroundColor: "rgb(106,161,158)" }}
      >
        <div class="row">
          <div class="col">
            <div className="announcement-section mt-5">
              <h1>Announcements:</h1>
              <marquee className="marquee" direction="up" loop="">
                <ul style={{ fontSize: "30px" }}>
                  <li>
                    New Fleet Addition: Check out our latest vehicle models!
                  </li>
                  <li>
                    Contactless Rental Experience: Book online and enjoy a
                    hassle-free rental process.
                  </li>
                  <li>
                    Holiday Special: Get 15% off on all rentals during the
                    festive season.
                  </li>
                </ul>
              </marquee>
            </div>
          </div>

          <div class="col">
            <div className="offer-section mt-5">
              <h1>Offers:</h1>
              <marquee className="marquee" direction="up" loop="">
                <ul style={{ fontSize: "30px" }}>
                  <li>
                    Weekend Special: Rent any vehicle from Friday to Sunday and
                    save 20%!
                  </li>
                  <li>
                    Corporate Deals: Exclusive rates and packages available for
                    corporate clients.
                  </li>
                  <li>
                    Referral Program: Refer a friend and get 10% off your next
                    rental!
                  </li>
                </ul>
              </marquee>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "100px" }}></div>
      <Footer />
    </>
  );
}

export default App;

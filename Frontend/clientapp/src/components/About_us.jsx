import React, { useState } from "react";
import car1 from "../image/cycle3.jpg";
import bike2 from "../image/bike2.jpg";
import car2 from "../image/car2.jpg";
import cycle2 from "../image/cycle3.jpg";
import scooty2 from "../image/scooty2.jpg";
import Footer from "./Footer";

function Aboutus() {
  const [showFullContent, setShowFullContent] = useState(false);

  const handleToggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <>
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
    <img src={car2} class="d-block w-100 "style={{height:"1000px"}} alt="Ashish"/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <img src={bike2} class="d-block w-100" style={{height:"1000px"}} alt="Kumar"/>
    </div>
    <div class="carousel-item"data-bs-interval="2000">
    <img src={cycle2} class="d-block w-100" style={{height:"1000px"}} alt="Yadav"/>
    </div>
    <div class="carousel-item"data-bs-interval="2000">
    <img src={scooty2} class="d-block w-100" style={{height:"1000px"}} alt="Yadav"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



      <div style={{ marginBottom: "10%" }}>
        <h2 style={{ textAlign: "center", fontSize: "80px" }}>About Us</h2>

        <p style={{ fontSize: "40px" }}>
          <span style={{ fontSize: "40px", color: "dark" }}>
            Ride on Rentals{" "}
          </span>
          is a leading Motorbike, Car, Bicycle and furniture rental & travel
          company that offers a diversified and exceptional range of
          two-wheelers, Cars, Bicycles and Furniture on rent. Travellers with a
          spirit governed by an intense passion for riding different bikes,
          Cars, and Bicycles have just landed in the right place. We also offer
          a range of furniture for rent.
        </p>

        {/* Render the first paragraph */}
        {showFullContent ? (
          <>
          <p style={{ fontSize: "40px" }}>
          <span style={{ fontSize: "40px", color: "dark" }}>
            Ride on Rentals{" "}
          </span>
          is a leading Motorbike, Car, Bicycle and furniture rental & travel
          company that offers a diversified and exceptional range of
          two-wheelers, Cars, Bicycles and Furniture on rent. Travellers with a
          spirit governed by an intense passion for riding different bikes,
          Cars, and Bicycles have just landed in the right place. We also offer
          a range of furniture for rent.
        </p>
            <button
              onClick={handleToggleContent}
              style={{
                backgroundColor: "rgb(231,146,108)",
                color: "white",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginLeft: "50%",
              }}
            >
              Read Less
            </button>
            
          </>
        ) : (
          <>
            <button
              onClick={handleToggleContent}
              style={{
                backgroundColor: "rgb(231,146,108)",
                color: "white",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginLeft: "50%",
              }}
            >
              Read More
            </button>
          </>
        )}

        {/* Render additional paragraphs if showFullContent is true */}
        {showFullContent && <>{/* Render additional paragraphs */}</>}

        <h3 style={{ fontSize: "80px", textAlign: "center" }}>
          Our mission is to make your spontaneous trips easy and affordable
        </h3>
        <p style={{ fontSize: "40px" }}>
          We want you to ditch the tour guides and unkept promises to travel
          whenever you feel like you need a break. At Ride on Rentals, you will
          rediscover the joy of travelling as we bring you the best handpicked
          and carefully curated tours, activities and attractions in and around
          your city. We give you the freedom to be spontaneous, because the best
          holidays are!
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Aboutus;

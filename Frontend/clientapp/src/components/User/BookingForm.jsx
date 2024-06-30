import UserNavbar from "./UserNavbar";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../../css/BookingForm.css";

function BookingForm() {
  const navigate = useNavigate();
  const { value } = useParams();

  const [profile, setProfile] = useState("");
  const profileURL = "http://localhost:9999/user/profile";
  const token_data = localStorage.getItem("Token_key");
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const token_data = localStorage.getItem("Token_key");
    console.log(`token data is ${token_data}`);
    if (!token_data) {
      navigate("/UserLogin");
    } else {
      const params = {
        userid: token_data,
      };
      try {
        const resp = await axios.get(profileURL, { params });
        console.log(resp.data);
        setProfile(resp.data);
        // Update usermail field in booking state
        setBooking({ ...booking, usermail: resp.data.email });
      } catch (err) {
        console.log(err);
      }
    }
  }
  useEffect(() => {
    if (profile) {
      setProfile((prevFormData) => ({
        ...prevFormData,
        usermail: profile.email,
      }));
    }
  }, [profile]);

  const URL = "http://localhost:9999/user/vehicleBooking";
  const [booking, setBooking] = useState({
    usermail: "",
    vehicleno: value,
    bookingtype: "",
    requestdate: new Date().toISOString().slice(0, 10),
    fromdate: "",
    pikuptime: "",
    todate: "",
    droptime: "",
    message: "",
    // bookingstatus: "",
    bookingresponse: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "bookingtype") {
      if (value === "HOURLY BASIS") {
        setBooking({
          ...booking,
          [name]: value,
          fromdate: booking.fromdate,
          todate: booking.fromdate,
        });
      } else {
        setBooking({ ...booking, [name]: value });
      }
    } else {
      setBooking({ ...booking, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(URL, booking);
      console.log(res.data);
      setBooking({
        usermail: "",
        bookingtype: "",
        fromdate: "",
        pikuptime: "",
        todate: "",
        droptime: "",
        bookingstatus: "",
        bookingresponse: "",
      }); 
      Swal.fire({ title: "Booking Done", text: res.data, icon: "success" });
    } catch (err) {
      console.log("Error Booking:", err);
      Swal.fire({
        title: "Error",
        text: "There was an error submitting feedback. Please try again later.",
        icon: "error",
      });
    }
  };

  // Function to format time to AM/PM
const formatTime = (timeString) => {
  return new Date(timeString).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
};
  return (
    <>
      <UserNavbar />
      <form action="" style={{ borderStyle: "solid" }} onSubmit={handleSubmit}>
        <input
          className="mt-3 w-25 fs-1"
          style={{ backgroundColor: "gray",color:"white" ,height:"80px"}}
          type="email"
          name="usermail"
          value={profile.email}
          // readOnly
          onChange={handleInput}
        />
        <br />

        {/* booking type */}

        <div className="mt-3" style={{ fontSize: "20px" }}>
          <label><h1>Booking Type:</h1></label>
          <label className="ms-5">
            <input
              type="radio"
              name="bookingtype"
              value="HOURLY BASIS"
              checked={booking.bookingtype === "HOURLY BASIS"}
              onChange={handleInput}
            />
           Hourly Basis
          </label>
          <label className="ms-3">
            <input
              type="radio"
              name="bookingtype"
              value="DAY BASIS"
              checked={booking.bookingtype === "DAY BASIS"}
              onChange={handleInput}
            />
            Day Basis
          </label>
        </div>

        <br />

        <br />
        <div className="d-flex">
          <div className="input-container1">
            <input
              className=""
              style={{ height: "120px", width: "350px",textAlign:"center" }}
              type="date"
              name="fromdate"
              value={booking.fromdate}
              placeholder="fromdate"
              onChange={handleInput}
            />
          </div>
          <div className="input-container2" >
            <input
              className=" "
              style={{ height: "120px", width: "350px" ,textAlign:"center"}}
              type="date"
              name="todate"
              value={booking.todate}
              placeholder="todate"
              onChange={handleInput}
            />
          </div>
        </div>

        <div className="d-flex">
          <div className="input-container_forPickupTime">

            <input
              className="  "
              style={{ height: "120px", width: "350px" ,textAlign:"center"}}
              type="time"
              name="pikuptime"
              value={booking.pikuptime}
              placeholder="pikuptime"
              onChange={handleInput}
            />
          </div>

          <div className="input-container_forDropTime">
            <input
              className=" "
              style={{ height: "120px", width: "350px",textAlign:"center" }}
              type="time"
              name="droptime"
              value={booking.droptime}
              placeholder="droptime"
              onChange={handleInput}
            />
          </div>
        </div>

        <button type="submit" className="mt-5 mb-5">
          submit
        </button>
      </form>
    </>
  );
}

export default BookingForm;

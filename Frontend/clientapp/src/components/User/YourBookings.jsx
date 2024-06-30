import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserNavbar from './UserNavbar';
import Footer from '../Footer';
import axios from 'axios';

const BookingDetails = () => {
  const URL = "http://localhost:9999/user/viewBookingRequests";
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token_data = localStorage.getItem("Token_key");
    if (!token_data) {
      navigate("/user_login");
    } else {
      fetchBookings(token_data);
    }
  }, [navigate]);

  async function fetchBookings(token) {
    const params = {
      userid: token
    };
    try {
      const resp = await axios.get(URL, { params });
      console.log(resp.data);
      setBookings(resp.data); // Set bookings to the fetched array of objects
    } catch (err) {
      console.log(`Error: ${err}`);
      setBookings(""); // Set bookings to an empty array if there's an error or no data
    }
  }

  return (
    <>
      <UserNavbar />

      <h1 style={{ textAlign: "center" }}>Your Booking Requests</h1>
      <div   style={{ marginLeft: "100px" }}>
        <div className="row ">
          {bookings.map((booking_detail, index) => {
            return (
              <div className="col mt-5 " key={index}>
                <table className="container-fluid"  style={{ borderStyle: "solid" }}>
                  <thead>
                    <tr >
                      <th>Usermail</th>
                      <th>Vehicleno</th>
                      <th>Bookingtype</th>
                      <th>Requestdate</th>
                      <th>Fromdate</th>
                      <th>Pickuptime</th>
                      <th>todate</th>
                      <th>Droptime</th>
                      <th>Bookingstatus</th>
                      <th>Bookingresponse</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ width: "200px" }}>
                        {booking_detail.usermail}
                      </td>
                      <td>{booking_detail.vehicleno}</td>
                      <td>{booking_detail.bookingtype}</td>
                      <td>{booking_detail.requestdate}</td>
                      <td>{booking_detail.fromdate}</td>
                      <td>{booking_detail.pikuptime}</td>
                      <td>{booking_detail.todate}</td>
                      <td>{booking_detail.droptime}</td>
                      <td>{booking_detail.bookingstatus}</td>
                      <td>{booking_detail.bookingresponse}</td>
                      
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{marginTop:"200px"}}></div>
      <Footer />
    </>);
};

export default BookingDetails;
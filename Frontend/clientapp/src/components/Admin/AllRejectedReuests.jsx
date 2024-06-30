import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ShopNavbar from './ShopNavbar';

export default function AllRejectedRequests() {
    const navigate = useNavigate();
    const URL = 'http://localhost:9999/shop/AllPendingRequests'; // Assuming this is the correct URL for fetching all booking requests
    const [rejectedBookingRequests, setRejectedBookingRequests] = useState([]);

    useEffect(() => {
        const token_data = localStorage.getItem('Token_key');
        if (!token_data) {
            navigate('/admin_login');
        }
        fetchData();
    }, [navigate]);

    const fetchData = async () => {
        try {
            const response = await axios.get(URL);
            const filteredRequests = response.data.filter((booking_detail) => booking_detail.bookingstatus === 'Rejected');
            setRejectedBookingRequests(filteredRequests);
        } catch (err) {
            console.log(`Error: ${err}`);
        }
    };

    return (
        <>
            <ShopNavbar />
            <h1 style={{ textAlign: 'center' }}>Rejected Booking Requests</h1>
            <div style={{marginLeft:"200px"}}>
                <div className='row'>
                    {rejectedBookingRequests.map((booking_detail, index) =>
                     {
                        return (
                          <div className="col mt-5" key={index}>
                            <table style={{ borderStyle: "solid" }}>
                              <thead>
                                <tr>
                                  <th>Usermail</th>
                                  <th>Vehicleno</th>
                                  <th>Bookingtype</th>
                                  <th>Requestdate</th>
                                  <th>Fromdate</th>
                                  <th>Pickuptime</th>
                                  <th>todate</th>
                                  <th>Droptime</th>
                                  <th>Bookingstatus</th>
                                  {/* <th>Bookingresponse</th> */}
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td style={{ width: "200px" }}>
                                    {booking_detail.usermail}
                                  </td>
                                  <td>{booking_detail.vehicleno?.vehicleNo}</td>
                                  <td>{booking_detail.bookingtype}</td>
                                  <td>{booking_detail.requestdate}</td>
                                  <td>{booking_detail.fromdate}</td>
                                  <td>{booking_detail.pikuptime}</td>
                                  <td>{booking_detail.todate}</td>
                                  <td>{booking_detail.droptime}</td>
                                  <td>{booking_detail.bookingstatus}</td>
                                  {/* <td>{booking_detail.bookingresponse}</td> */}
                                  <td>
                                    <button
                                      className="btn btn-success  "
                                      type="button"
                                    //   onClick={() => handleAccept(booking_detail)}
                                    >
                                      Pickup
                                    </button>
            
                                    <button
                                      className="btn btn-danger mt-3 "
                                      type="button"
                                    //   onClick={() => handleReject(booking_detail)}
                                    >
                                      Drop
                                    </button>
                                  </td>
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
        </>
    );
}
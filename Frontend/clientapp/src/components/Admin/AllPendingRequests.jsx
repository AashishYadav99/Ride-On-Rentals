import ShopNavbar from "./ShopNavbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../css/bookingRequest.css";
import Footer from "../Footer";

function AllPendingRequests() {
  const navigate = useNavigate();

  const URL = "http://localhost:9999/shop/AllPendingRequests";
  const [bookingrequests, setBookingRequests] = useState([]);
  useEffect(() => {
    const token_data = localStorage.getItem("Token_key");
    if (!token_data) {
      navigate("/admin_login");
    }
    fetchData();
  }, [navigate]);
  const fetchData = async () => {
    try {
      const response = await axios.get(URL);
      setBookingRequests(response.data);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  const handleAccept = async (ubr) => {
    try {
        const updatedRequest = {
            ...ubr,
            bookingstatus: 'Accepted',
            bookingresponse: "You can reach Ride On Rentals (S-55, Taopvan Upper, Rishikesh, Uttarakhand 248008) on the Pickup date."
        };
        await axios.patch(`${URL}/${ubr._id}`, updatedRequest);
        fetchData(); // Refresh data after update
    } catch (err) {
        console.log(`Error accepting request: ${err}`);
    }
};

const handleReject = async (ubr) => {
    try {
        const updatedRequest = {
            ...ubr,
            bookingstatus: 'Rejected',
            bookingresponse: "Sorry, we are unable to accept your request at this time. Please try again later."
        };
        await axios.patch(`${URL}/${ubr._id}`, updatedRequest);
        fetchData(); // Refresh data after update
    } catch (err) {
        console.log(`Error rejecting request: ${err}`);
    }
};

// Filter out only pending booking requests
const pendingBookingRequests = bookingrequests.filter(
    (ubr) => ubr.bookingstatus === 'Pending'
);

return (
    <>
        <ShopNavbar />
        <h1 style={{ textAlign: 'center' }}>Booking Requests</h1>
        <div className="container mt-3" style={{ minHeight: 'calc(100vh - 100px)' }}>
            <div className='row'>
                {pendingBookingRequests.map((ubr, index) => (
                    <div className="col-4" key={index}>
                        <div className="card bg-gradient text-white mt-3 p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', borderRadius: '1rem', overflowY: 'auto' }}>
                            <div className="card-body">
                                <h5 className="card-title">Request For: {ubr.vehiclemodel}</h5>
                                <h5 className="card-title">Vehicle No: {ubr.vehicleno.vehicleNo}</h5>
                                <h5 className="card-title">Vehicle Rent: {ubr.vehicleno.rent}</h5>
                                <p className="card-title">Request From: {ubr.usermail}</p>
                                <p className="card-text">Request Date: {ubr.requestdate}</p>
                                <p className="card-text">Request Type: {ubr.bookingtype}</p>
                                <p className="card-text">From: {ubr.fromdate}</p>
                                <p className="card-text">To: {ubr.todate}</p>
                                <p className="card-text">Max Rental Duartion: {ubr.vehicleno.vehrentingduration}</p>
                                <p className="card-text">Pickup Time: {ubr.pikuptime}</p>
                                <p className="card-text">Drop Time: {ubr.droptime}</p>
                                <p className="card-text">Status: {ubr.bookingstatus}</p>
                                <button type="button" className="mt-2 btn btn-success btn-block" onClick={() => handleAccept(ubr)}>Accept</button>
                                <button type="button" className="mt-2 btn btn-danger btn-block ms-4" onClick={() => handleReject(ubr)}>Reject</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Footer />
    </>
);
}

export default AllPendingRequests;

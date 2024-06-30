import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import ShopNavbar from './ShopNavbar';

const AllPickup = () => {

  const patchURL1 = 'http://localhost:9999/shop/AllPendingRequests';
  const patchURL2 = 'http://localhost:9999/shop/pickupanddrop';

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const token_data = localStorage.getItem('Token_key');
        if (!token_data) {
            navigate('/admin_login');
        }
    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:9999/shop/viewpicksdrops');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  const handleVehicleDropOff = async (ubr) => {
    try {
      const updatedRequest1 = {
        ...ubr,
        bookingstatus: 'Dropped Off',
        bookingresponse: "You have dropped off your Rented vehicle."
      };
      await axios.patch(`${patchURL1}/${ubr.pick_drop_id._id}`, updatedRequest1);
      const updatedRequest2 = {
        ...ubr,
        pickstatus: "false",
        dropstatus: 'true'
      };
      await axios.patch(`${patchURL2}/${ubr._id}`, updatedRequest2);
      fetchData(); // Refresh data after update
    } catch (err) {
      console.log(`Error dropping off vehicle: ${err}`);
    }
  };

  // Ensure data is an array before filtering
  const pickups = Array.isArray(data) ? data.filter(
    (ubr) => ubr.pickstatus === 'true'
  ) : [];

  return (
    <>
    <ShopNavbar />
    <div className="container">
      <div className="row">
        {pickups.map((item, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Pickup and Drop Details</h5>
                <p className="card-text">Pick Drop ID: {item.pick_drop_id?._id}</p>
                <p className="card-text">User Maill: {item.pick_drop_id?.email}</p>
                <p className="card-text">Status: {item.pick_drop_id?.bookingstatus}</p>
                <p className="card-text">Security Money: {item.securitymoney} (Paid)</p>
                <p className="card-text">Rent Total: {item.renttotal}</p>
                <p className="card-text">Aadhar Number: {item.aadharnumber}</p>
                <p className="card-text">DL Number: {item.dlnumber}</p>
                <button className="btn btn-primary" onClick={() => handleVehicleDropOff(item)}>Vehicle Dropped Off</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AllPickup;
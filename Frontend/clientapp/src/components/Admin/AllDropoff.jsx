import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import ShopNavbar from './ShopNavbar';


const AllDropoff = () => {


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

  // Ensure data is an array before filtering
  const pickups = Array.isArray(data) ? data.filter(
    (ubr) => ubr.pick_drop_id?.bookingstatus === 'Dropped Off'
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
                <p className="card-text">Pick Drop ID: {item.pick_drop_id._id}</p>
                <p className="card-text">User Maill: {item.pick_drop_id.usermail}</p>
                <p className="card-text">Status: {item.pick_drop_id?.bookingstatus}</p>
                <p className="card-text">Security Money: {item.securitymoney} (Returned)</p>
                <p className="card-text">Rent Total: {item.renttotal}</p>
                <p className="card-text">Aadhar Number: {item.aadharnumber}</p>
                <p className="card-text">DL Number: {item.dlnumber}</p>
                {/* <button className="btn btn-primary" onClick={() => handleVehicleDropOff(item)}>Vehicle Dropped Off</button> */}
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

export default AllDropoff;
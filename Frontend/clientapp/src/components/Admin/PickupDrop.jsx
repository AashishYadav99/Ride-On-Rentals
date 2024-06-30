// PickupDropForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../Footer';
import { useNavigate, useParams } from 'react-router-dom';
import ShopNavbar from './ShopNavbar';

const PickupDropForm = () => {

  const URL = "http://localhost:9999/shop/pickupanddrop";
  const patchURL = 'http://localhost:9999/shop/allbookingrequests';

  const navigate = useNavigate();

  const { value1 } = useParams();

  const [aadhardl, setaadhardl] = useState([])

  const [formData, setFormData] = useState({
    _id: value1,
    pickstatus: 'false',
    dropstatus: 'false',
    security: "",
    rent: "",
    aadharno: "",
    dlno: "",
    aadhardl: []
  });

  // const updateSecurityMoney = (value3) => {
  //   let security = 0;

  //   if (value3.startsWith("C")) {
  //     security = 5000;
  //   } else if (value3.startsWith("M")) {
  //     security = 2000;
  //   }
  //   else if (value3.startsWith("S")) {
  //     security = 1000;
  //   }
  //   else if (value3.startsWith("B")) {
  //     security = 600;
  //   }

  //   setFormData(prevState => ({
  //     ...prevState,
  //     security: security
  //   }));
  // };

  useEffect(() => {
    const token_data = localStorage.getItem('Token_key');
    if (!token_data) {
      navigate('/admin_login');
    }
    // updateSecurityMoney(value3);
    // fetchData();
  }, [navigate]);

  // console.log(value1)
  // console.log(value2)
  // console.log(value3)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleFileChange = (e) => {
  //   const { name, files } = e.target;
  //   setFormData({ ...formData, [name]: files });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedRequest = {
        ...formData,
        bookingstatus: 'Picked Up',
        bookingresponse: "You have picked up your vehicle please return the vehicle on dropofff date and time to prevent penalty."
      };
      await axios.patch(`${patchURL}/${value1}`, updatedRequest);
      // fetchData(); // Refresh data after update
    } catch (err) {
      console.log(`Error accepting request: ${err}`);
    }
    try {
      const formDataWithFiles = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataWithFiles.append(key, value);
      });
      aadhardl.forEach(file => {
        formDataWithFiles.append('pic_multiple', file);
      });
      // Send form data to backend API using Axios
      await axios.post(URL, formDataWithFiles);
      alert('Data submitted successfully!');
      // Clear form after submission
      setFormData({
        _id: '',
        pickstatus: 'false',
        dropstatus: 'false',
        security: "",
        rent: "",
        aadharno: '',
        dlno: '',
        aadhardl: []
      });
      setaadhardl([]);
      document.getElementById('aadhardl').value = '';

    } catch (error) {
      console.error('Error submitting data:', error);
      alert('An error occurred while submitting data.');
    }
  };



  return (
    <>
      <ShopNavbar />
      <div className="container">
        <h2>Enter Pickup and Drop Details</h2>
        <form onSubmit={handleSubmit}>
          {/* <div className="mb-3">
            <label htmlFor="pick_drop_id" className="form-label">Booking ID</label>
            <input type="text" className="form-control" id="pick_drop_id" name="pick_drop_id" value={formData._id} onChange={handleChange} required />
          </div> */}
          <div className="mb-3">
            <label htmlFor="securitymoney" className="form-label">Security Money</label>
            <input type="text" className="form-control" id="securitymoney" name="security" value={formData.security} onChange={handleChange}  />
          </div>

        

          <div className="mb-3">
            <label htmlFor="renttotal" className="form-label">Rent Total</label>
            <input type="number" className="form-control" id="renttotal" name="rent" value={formData.rent} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="aadharno" className="form-label">Aadhar Card Number</label>
            <input type="text" className="form-control" id="aadharno" name="aadharno" value={formData.aadharno} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="dlno" className="form-label">DL Endorsement Number</label>
            <input type="text" className="form-control" id="dlno" name="dlno" value={formData.dlno} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="aadhardl" className="form-label">Upload Aadhar and Driver's License Images</label>
            <input type="file" className="form-control" id="aadhardl" name="pic_multiple" onChange={(e) => {
              const files = e.target.files;
              setaadhardl(Array.from(files))
            }} multiple />
          </div>
          <div className="mb-3">
            <label className="form-check-label">Pickup Status</label>
            <select className="form-select" name="pickstatus" value={formData.pickstatus} onChange={handleChange}>
              <option value="false">Pickup Pending</option>
              <option value="true">Picked Up</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-check-label">Drop Status</label>
            <select className="form-select" name="dropstatus" value={formData.dropstatus} onChange={handleChange}>
              <option value="false">Dropoff Pending</option>
              <option value="true">Dropped off</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default PickupDropForm;
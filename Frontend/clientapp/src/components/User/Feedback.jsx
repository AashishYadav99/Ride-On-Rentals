// import pic from "../image/pic4.jpg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserNavbar from "./UserNavbar";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import feedback_image from "../../image/car.png";
import { useNavigate } from "react-router-dom";

const Feedback = () => {
  const navigate = useNavigate();
  const URL = "http://localhost:9999/user/addFeedback";
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    number: "",
    remarks: "",
    rating: "",
  });

  const [profile, setProfile] = useState("");
  const ProfileURL = "http://localhost:9999/user/profile";
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
        const resp = await axios.get(ProfileURL, { params });

        console.log(resp.data);
        setProfile(resp.data);
      } catch (err) {
        console.log(err);
      }
    }
  }

  useEffect(() => {
    if (profile) {
      setFeedback((prevFormData) => ({
        ...prevFormData,
        name: profile.user_name,
        email: profile.email,
        number: profile.phoneno,
      }));
    }
  }, [profile]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value }); //here name is use for identification in input box for exm name="email",name="remarks"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(URL, feedback);
      console.log(res.data);
      setFeedback({ name: "", email: "", number: "", rating: "", remarks: "" }); // Clear the selected rating
      Swal.fire({ title: "FeedBack Done", text: res.data, icon: "success" });
    } catch (err) {
      console.log("Error submitting feedback:", err);
      Swal.fire({
        title: "Error",
        text: "There was an error submitting feedback. Please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <>
      <UserNavbar />
      <div
        className="container-fluid "
        style={{
          backgroundImage: `url(${feedback_image})`,
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
      >
        <div className="row">
          <div className="col-4 ">give your precious feedback</div>

          <div className="col-8">
            <div className="card text-dark">
              <div className="card-body m-5">
                <h2 className="text-center mb-4 ">Feedback</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={profile.user_name}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={profile.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone No</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="number"
                      placeholder="Enter your phone number"
                      value={profile.phoneno}
                      onChange={handleInput}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="remark">Feedback</label>
                    <textarea
                      className="form-control"
                      id="remark"
                      name="remarks"
                      rows="3"
                      placeholder="Enter your feedback"
                      value={feedback.remarks}
                      onChange={handleInput}
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label htmlFor="rating">Rating</label>
                    <div className="rating-icons">
                      <input
                        type="radio"
                        id="rating1"
                        name="rating"
                        value="⭐"
                        onClick={handleInput}
                        checked={feedback.rating === "⭐"}
                      />
                      <label
                        htmlFor="rating1"
                        title="Poor"
                        style={{ marginRight: "10px" }}
                      >
                        <span role="img" aria-label="Poor">
                          ⭐
                        </span>
                      </label>

                      <input
                        type="radio"
                        id="rating2"
                        name="rating"
                        value="⭐⭐"
                        onClick={handleInput}
                        checked={feedback.rating === "⭐⭐"}
                      />
                      <label
                        htmlFor="rating2"
                        title="Fair"
                        style={{ marginRight: "10px" }}
                      >
                        <span role="img" aria-label="Fair">
                          ⭐
                        </span>
                      </label>

                      <input
                        type="radio"
                        id="rating3"
                        name="rating"
                        value="⭐⭐⭐"
                        onClick={handleInput}
                        checked={feedback.rating === "⭐⭐⭐"}
                      />
                      <label
                        htmlFor="rating3"
                        title="Good"
                        style={{ marginRight: "10px" }}
                      >
                        <span role="img" aria-label="Good">
                          ⭐
                        </span>
                      </label>

                      <input
                        type="radio"
                        id="rating4"
                        name="rating"
                        value="⭐⭐⭐⭐"
                        onClick={handleInput}
                        checked={feedback.rating === "⭐⭐⭐⭐"}
                      />
                      <label
                        htmlFor="rating4"
                        title="Very Good"
                        style={{ marginRight: "10px" }}
                      >
                        <span role="img" aria-label="Very Good">
                          ⭐
                        </span>
                      </label>

                      <input
                        type="radio"
                        id="rating5"
                        name="rating"
                        value="⭐⭐⭐⭐⭐"
                        onClick={handleInput}
                        checked={feedback.rating === "⭐⭐⭐⭐⭐"}
                      />
                      <label
                        htmlFor="rating5"
                        title="Excellent"
                        style={{ marginRight: "10px" }}
                      >
                        <span role="img" aria-label="Excellent">
                          ⭐
                        </span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-3 btn btn-primary btn-block"
                  >
                    Submit Feedback
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;

import ShopNavbar from "./ShopNavbar";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import "../../css/cardhover.css"

function AllFeedback() {
  const URL = "http://localhost:9999/shop/allfeedbacks";
  const [feedback, setFeedback] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        setFeedback(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  },[]);

return (
  <>
    <ShopNavbar />
    <h1 style={{ textAlign: "center" }}>user feedback</h1>
    <div className="conatiner-fluid">
    <div className="row">
      {feedback.map((uf,index) => {
        return (
          <div className="col-sm cardhover" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"><span className="fw-bold">Name:- </span>{uf.name}</h5>
                <p className="card-title"><span className="fw-bold">Id:- </span>{uf._id}</p>
                <p className="card-title"><span className="fw-bold">Rating:- </span>{uf.rating}</p>
                <p className="card-title"><span className="fw-bold">Email:- </span>{uf.email}</p>
                <p className="card-title"><span className="fw-bold">PhoneNo:- </span>{uf.phoneno}</p>
                <p className="card-title"><span className="fw-bold">feedback:- </span>{uf.feedback}</p>

              </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
    <Footer />
  </>
);
}
export default AllFeedback;

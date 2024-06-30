// import pic from "../../image/danny2.jpeg";
import axios from "axios";

import React from "react";
// import AdminHeader from "./AdminHeader";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import ShopNavbar from "./ShopNavbar";

function ShopHome() {
 

  return (
    <>
      <ShopNavbar />
      <div style={{ paddingTop: "100px" ,alignItems:"center"}}>
      <h1>This is Home Page</h1>
      </div>
    </>
  );
}

export default ShopHome;

import express from "express";
import {
  userRegistration,
  userLogin,
  profile,
  editUser_profile,
  addFeedback,
  vehicleBooking,
  allBookingRequests
} from "../controllers/user_controllers.js";

import upload_image from "../middleware/userprofile.multer.middleware.js";

const user_routes = express.Router();

user_routes.post("/user_regis", userRegistration); 
user_routes.post("/user_login", userLogin); 
user_routes.get("/profile", profile);
user_routes.post("/editUser_profile", upload_image, editUser_profile);
user_routes.post("/addFeedback",addFeedback) 
user_routes.post("/vehicleBooking",vehicleBooking) 
user_routes.get("/viewBookingRequests",allBookingRequests) 


export default user_routes;

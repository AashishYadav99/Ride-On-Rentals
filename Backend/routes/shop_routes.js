import express from "express";

import {
  shopRegistration,
  shopLogin,
  allcontacts,
  profile,
  editShop_profile,
  addOffers,
  addvehicle,
  AllPatchRequests,
  forgotPassword,
  pickupanddropoff,
  patchpickupanddropoff,
  allpicksanddrops,
  allBookingRequests

} from "../controllers/shop_controllers.js";
import { allfeedbacks } from "../controllers/shop_controllers.js";
import offer_image from "../middleware/offerimage.multer.middleware.js";
import upload_veh_images from "../middleware/vehimage.multer.middleware.js";
import upload_aadhardl from "../middleware/adhar.multer.middleware.js";

const shop_routes = express.Router();

shop_routes.post("/shop_regis", shopRegistration); //login and home function is used in admin_controllers
shop_routes.post("/shop_login", shopLogin);
shop_routes.get("/allfeedbacks", allfeedbacks); // data after login
shop_routes.get("/allcontacts", allcontacts); // data after login
shop_routes.get("/AllPendingRequests", allBookingRequests); 
shop_routes.get("/profile",profile)
shop_routes.post("/editShop_profile",editShop_profile)
shop_routes.post("/addoffers",offer_image, addOffers)
shop_routes.post("/addvehicle",upload_veh_images,addvehicle)
shop_routes.patch("/AllPendingRequests/:id", AllPatchRequests)
shop_routes.post("/forgotPassword",forgotPassword)
shop_routes.post("/pickupanddrop", upload_aadhardl, pickupanddropoff);
shop_routes.patch("/pickupanddrop/:id", patchpickupanddropoff);
shop_routes.get("/viewpicksdrops", allpicksanddrops);




export default shop_routes;

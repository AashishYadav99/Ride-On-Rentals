

import express from "express";
import {home,login} from "../controllers/admin_controllers.js";
const admin_route=express.Router();

 admin_route.get("/",home)
 admin_route.post("/login",login) //login and home function is used in admin_controllers

export default   admin_route

import express from "express";
import { home,contactUs , allCar, allBike, allScooty, allCycle ,alloffers} from "../controllers/common_controllers.js";

const common_route = express.Router();

common_route.get("/", home)
common_route.post("/contactUs",contactUs)
common_route.get("/allcars",allCar)
common_route.get("/allbikes",allBike)
common_route.get("/allscooty",allScooty)
common_route.get("/allcycles",allCycle)
common_route.get("/alloffers",alloffers)


export default common_route;
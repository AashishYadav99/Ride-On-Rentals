import contactusModel from "../models/contactus.models.js";
// import FeedbackModel from "../models/feedback.models.js";
import addvehicleModel from "../models/addvehicle.model.js";
import OffersModel from "../models/discount_offers.models.js";

export const home = (req, res) => {
  res.send("<h1>This is response from home XYZ</h1>");
};

export const contactUs = async (req, res) => {
  const conatctusObject = req.body;
  const { name, email, number, query } = conatctusObject;
  try {
    const contactusDoc = new contactusModel({
      name: name,
      email: email,
      phoneno: number,
      query: query,
    });

    //sequence should be same as contactus.models.js

    await contactusDoc.save();
  } catch (err) {
    console.log(err.message);
  }
  console.log(conatctusObject);
  res.send("Thank you for connecting Us");
};

// All Cars

export const allCar = async (req, res) => {
  try {
    // Fetch only car vehicles from MongoDB
    const cars = await addvehicleModel.find({ vehicleType: "Car" });
    if (cars.length > 0) {
      res.send(cars);
    } else {
      res.send(`No Cars Available yet!`);
    }
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(500).send(`Internal Server Error`);
  }
};

// All Motorcycles

export const allBike = async (req, res) => {
  try {
    // Fetch only motorcycle vehicles from MongoDB
    const bikes = await addvehicleModel.find({ vehicleType: "Bike" });
    if (bikes.length > 0) {
      res.send(bikes);
    } else {
      res.send(`No Bikes Available yet!`);
    }
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(500).send("Internal Server Error");
  }
};

// All Scooty's

export const allScooty = async (req, res) => {
  try {
    // Fetch only scooty vehicles from MongoDB
    const scootys = await addvehicleModel.find({ vehicleType: "Scooty" });
    if (scootys.length > 0) {
      res.send(scootys);
    } else {
      res.send(`No Scooty Available yet!`);
    }
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

// All Bicycles
export const allCycle = async (req, res) => {
  try {
    const bicycles = await addvehicleModel.find({ vehicleType: "Cycle" });
    if (bicycles.length > 0) {
      res.send(bicycles);
    } else {
      res.send(`No Bicycles Available yet!`);
    }
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(500).send("Internal Server Error");
  }
};

// All offers
export const alloffers = async (req, res) => {
  try {
    const offerData = await OffersModel.find();
    res.send(offerData);
    // console.log(offerData);
  } catch (err) {
    console.error(err);
  }
};

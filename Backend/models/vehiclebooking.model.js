import mongoose from "mongoose";

const vehiclebookingmodelSchema = new mongoose.Schema({
  usermail: {
    type: String,
    required: true,
  },
  vehicleno: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "VehicleDetail" // References the model name (AddVehicleModel)
    // type: String,
    // required: true,
  },
  bookingtype: {
    type: String,
    required: true,
  },
  requestdate: {
    type: String,
    required: true,
  },
  fromdate: {
    type: String,
    required: true,
  },
  pikuptime: {
    type: String,
    required: true,
  },
  todate: {
    type: String,
    required: true,
  },
  droptime: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
  bookingstatus :{
    type:String,
    enum: ["Pending", "Accepted", "Rejected", "Picked Up", "Dropped Off"],
    default:"Pending"
},
bookingresponse :{
    type: String,
    enum: ["Awaiting Response", 
    "You can reach Ride On Rentals (S-55, Taopvan Upper, Rishikesh, Uttarakhand 248008) on the Pickup date.",
    "Sorry, we are unable to accept your request at this time. Please try again later.",
    "You have picked up your vehicle please return the vehicle on dropofff date and time to prevent penalty.",
    "You have dropped off your Rented vehicle.",
],
    default : "Awaiting Response"
}
});

const vehiclebookingmodel = mongoose.model(
  "BookingRequest",
  vehiclebookingmodelSchema
); //Shop is  name of collection in DataBase
export default vehiclebookingmodel;

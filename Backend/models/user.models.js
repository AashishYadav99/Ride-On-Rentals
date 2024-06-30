import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  user_name: { type: String, required: true },
  email: { type: String, required: true },
  phoneno: { type: String, required: true },
  password: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  imgURL: { type: String }
});

const userModel = mongoose.model("user", userSchema); //Shop is  name of collection in DataBase
export default userModel;

import mongoose from "mongoose";
const adminSchema = new mongoose.Schema({
  admin_id: {
    type: String,
    required: true,
    unique: true,
    trim: true, //remove extra spaces
  },

  admin_pass: {
    type: String,
    required: true,
    min: 8,
  },
});
const AdminModel=mongoose.model("AdminDetail",adminSchema)

export default AdminModel;

import mongoose from "mongoose";

const contactusSchema=new mongoose.Schema(

    {
        name:{type:String,required:true},
        email:{type:String,required:true},
        phoneno:{type:String,required:true},
        query:{type:String,required:true},

    }
)

const contactusModel=mongoose.model("Contact_us",contactusSchema)
export default contactusModel;
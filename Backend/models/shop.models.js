import mongoose from "mongoose";

const shopSchema=new mongoose.Schema(

    {
        shop_name:{type:String,required:true},
        email:{type:String,required:true},
        phoneno:{type:String,required:true},
        password:{type:String,required:true},
        city:{type:String,required:true},
        address:{type:String,required:true},
        owner_name:{type:String,required:true},
        about_shop:{type:String,required:true},

    }
)

const shopModel=mongoose.model("Shop",shopSchema) //Shop is  name of collection in DataBase
export default shopModel;
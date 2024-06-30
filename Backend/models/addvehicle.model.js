import mongoose from "mongoose";

const addvehicleSchema=new mongoose.Schema(

    {
        vehicleType:{type:String,required:true},
        NumberOfSeats:{type:String},
        FuelType:{type:String,required:true},
        company:{type:String,required:true},
        model:{type:String,required:true},
        color:{type:String,required:true},
        vehicleNo:{type:String,required:true},
        rent:{type:String,required:true},
        price:{type:String,required:true},
        duration:{type:String,required:true},
        image:{type:Array,default:[]}

    }
)

const addvehicleModel=mongoose.model("VehicleDetail",addvehicleSchema) //Shop is  name of collection in DataBase
export default addvehicleModel;

import mongoose from "mongoose";
const dbURL="mongodb+srv://ay64612:Ashish%4099@cluster0.nasecga.mongodb.net/ror_db"

// use  @=%40

const connect_db=async()=>{
    try{

        const connectionOnject=await mongoose.connect(`${dbURL}`)
        console.log("connection stablished  with mongoDB");
    }
    catch(err){
        console.log(err.message);

    }
}

export default connect_db;

import mongoose from "mongoose";

const feedbackSchema=new mongoose.Schema(

    {
        name:{type:String,required:true},
        phoneno:{type:String,required:true},
        email:{type:String,required:true},
        feedback:{type:String,required:true},
        rating:{type:String,required:true},

    }//this sequence of attribute should be use in common controllers in same sequence
)

const FeedbackModel=mongoose.model("Feedback",feedbackSchema)
export default FeedbackModel
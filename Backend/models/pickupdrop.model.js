import mongoose from "mongoose";

const  pickupanddropSchema = new mongoose.Schema(
    {
        pick_drop_id:{
            type: mongoose.Schema.ObjectId,
            ref: "BookingRequest",
            // required: true
        },
        securitymoney:{
            type: Number,
            //  required: true
        },
        renttotal:{
            type: Number,
            // required: true
        },
        pickstatus:{
            type: String,
            // required: true,
            enum: ["false", "true"],
            default:"false"
        },
        dropstatus: {
            type: String,
            // required: true,
            enum: ["false", "true"],
            default:"false"
        },
        aadharnumber:{
            type: String,
            // required: true
        },
        dlnumber:{
            type: String,
            // required: true
        },
        aadhardlimage: {
            type: Array,
            default: []
        }
    }
)

const PickupandDropModel = mongoose.model("pickupanddrop",pickupanddropSchema);
export default PickupandDropModel;
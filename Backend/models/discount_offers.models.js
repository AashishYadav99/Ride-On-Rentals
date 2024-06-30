import mongoose, { Mongoose } from "mongoose";

const offerSchema = new mongoose.Schema(
    {
        vehicletype: { type: String, required: true },
        discount: { type: String, required: true },
        code: { type: String, required: true },
        expiry: { type: String, required: true },
        offimg: {type: String}
    }
)

const OffersModel = mongoose.model("OfferDetail",offerSchema);
export default OffersModel;
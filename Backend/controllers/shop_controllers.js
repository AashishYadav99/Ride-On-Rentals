import FeedbackModel from "../models/feedback.models.js";
import shopModel from "../models/shop.models.js";
import contactusModel from "../models/contactus.models.js";
import OffersModel from "../models/discount_offers.models.js";
import vehiclebookingmodel from "../models/vehiclebooking.model.js"
import addvehicleModel from "../models/addvehicle.model.js";
import PickupandDropModel from "../models/pickupdrop.model.js";

// Shop/shop registration start here
export const shopRegistration = async (req, res) => {
  const shopObject = req.body;
  console.log(shopObject);
  const {
    shop_name,
    email,
    phoneno,
    password,
    city,
    address,
    owner_name,
    about_shop
  } = shopObject; //object destructring
  try {
    const shopDoc = new shopModel({
      shop_name: shop_name,
      email: email,
      phoneno: phoneno,
      password: password,
      city: city,
      address: address,
      owner_name: owner_name,
      about_shop: about_shop,
    });
    //sequence should be same as shop.models.js we can say its create schema in mongoDB

    await shopDoc.save();
  } catch (err) {
    console.log(err.message);
  }
  res.send(
    "Thank You for your submmition Shop Owner"
  );
};

//shopLogin /shopLogin start from here
export const shopLogin = async (req, res) => {
  try {
    let account_Info = req.body;
    console.log(account_Info);
    const { email, password } = account_Info; //destructring it shoul be same as useState data
    const shop_data = await shopModel.findOne({ email: email }); //atrribute:value
    console.log(shop_data);
    if (shop_data !== null) {
      if (shop_data.password === password) {
        res.send({ code: 200, message: "shop exists", token: shop_data.email });
      } else {
        // res.send("incorrect password");
        res.send({ code: 404, message: "Password error" });
      }
    } else {
      res.send("shop not found");
    }
  } catch (err) {
    console.log(err);
  }
};

//add vehicles 

export const addvehicle=async(req,res)=>{
  const addVehicleObject = req.body;
  console.log(addVehicleObject);
  const { vehicleType, NumberOfSeats, FuelType,company,model, color,vehicleNo,rent,price,duration} = addVehicleObject; //object destructring
  const image=req.files
  try {
    const addVehicleDoc = new addvehicleModel({
        vehicleType: vehicleType,
        NumberOfSeats: NumberOfSeats,
        FuelType: FuelType,
        company:company,
        model:model,
        color: color,
        vehicleNo: vehicleNo,
        rent:rent,
        price:price,
        duration:duration,
        image:image
    });
          //sequence should be same as shop.models.js we can say its create schema in mongoDB

    await  addVehicleDoc.save()
  } catch (err) {
    console.log(err.message);
  }
  
  res.send("Thank You for your submmition Shop Owner");

}

// feedbacks(for veiwing feecbacks)=> shpologin>feedback then display data of feedback

export const allfeedbacks = async (req, res) => {
  try {
    const feedbackData = await FeedbackModel.find();
    if (feedbackData != null) res.send(feedbackData);
    else res.send("No feedback yet");
  } catch (err) {
    console.log(err);
  }
};

// for contact that is in after login page (to see contact data on contacts click in shop/shop login)

export const allcontacts = async (req, res) => {
  try {
    const contactsData = await contactusModel.find();
    if (contactsData != null) res.send(contactsData);
    else res.send(" No contacts yet");
  } catch (err) {
    console.log(err);
  }
};

export const profile = async (req, res) => {
  try {
    const sid = req.query.shopid;
    console.log(`data received from react ${sid}`);
    const shop_data = await shopModel.findOne({ email: sid });
    console.log(shop_data);
    res.send(shop_data);
  } catch (err) {
    console.log(err);
  }
};

//shopEdit Profile code start form here

export const editShop_profile = async (req, res) => {
  try {
    let shop_data = req.body;
    const { shop_name, phoneno, city, address, email } = shop_data;
    // const { email } = shop_data;
    const updateDoc = {
      $set: {
        shop_name: shop_name,
        phoneno: phoneno,
        city: city,
        address: address,
      },
    };
    const filter_condition = { email: email };
    const status = await shopModel.updateOne(filter_condition, updateDoc);
    console.log(status);
    res.send(status);
  } catch (err) {
    console.log("connection failed to the server" + err);
  }
};

// admin adding offers/discounts
export const addOffers = async (req, res) => {
  const offerObject = req.body;
  const { vehicleType, discount, code, expiry } = offerObject;
  const offimg = req.file.filename;
  try {
    const offerDoc = OffersModel({
      vehicletype: vehicleType,
      discount: discount,
      code: code,
      expiry: expiry,
      offimg: offimg
    });
    await offerDoc.save();
  } catch (err) {
    console.log("Caught an error", err);
  }
  res.send(`Thank  you for Adding the Offer`);
};

//All Pending Requests 

export const allBookingRequests = async(req,res)=>{
  try {
      const requestsData = await vehiclebookingmodel.find({bookingstatus: {$in: ["Pending", "Accepted", "Rejected"]}}).populate("vehicleno");
  
      if (requestsData.length > 0) {
          res.send(requestsData);
      } else {
          res.send(`No Requests yet!`);
      }
  } catch (err) {
      console.log(`Error: ${err}`);
    }
}

export const AllPatchRequests = async(req,res)=>{

  const requestId = req.params.id;
    // console.log(requestId)
    const { bookingstatus, bookingresponse } = req.body;

    try {
        const updatedRequest = await vehiclebookingmodel.findByIdAndUpdate(requestId, { bookingstatus, bookingresponse }, { new: true });
        if (!updatedRequest) {
            return res.status(404).json({ message: 'Booking request not found' });
        }
        res.status(200).json({ message: 'Booking request updated successfully', updatedRequest });
    } catch (error) {
        console.error(`Error updating booking request: ${error.message}`);
        res.status(500).json({ message: 'Failed to update booking request', error });
    }
};


//forgot password

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const shopOwner = await shopModel.findOne({ email });
    
    if (shopOwner) {
      res.json({ emailVerified: true });
    } else {
      res.json({ emailVerified: false });
    }
  } catch (error) {
    console.error("Error finding shop:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


// pickup and dropoff for filling form
export const pickupanddropoff = async(req,res)=>{
  const pickupdropObject = req.body;
  const { _id, pickstatus, dropstatus, security, rent, aadharno, dlno} = pickupdropObject;
  const aadhardl = req.files;
  try{
      const pickupdropDoc = PickupandDropModel({
          pick_drop_id: _id,
          securitymoney: security,
          renttotal: rent,
          aadharnumber: aadharno,
          dlnumber: dlno,
          aadhardlimage: aadhardl,
          pickstatus: pickstatus,
          dropstatus: dropstatus
      })
      await pickupdropDoc.save();
  }
  catch (err){
      console.log(`Error: ${err}`)
  }
  res.send(`Thank You`)
}

// view pickup and dropoff's
export const allpicksanddrops= async(req,res)=>{
  try {
      const requestsData = await PickupandDropModel.find().populate("pick_drop_id")

      if (requestsData !== null) {
          res.send(requestsData)
          
      } else {
          res.send(`No Requests yet!`)
      }
  } catch (err) {
      console.log( `Error: ${err}`)
  }
}

// patch pickup and dropoff

export const patchpickupanddropoff = async(req,res)=>{
  const requestId = req.params.id;
  // console.log(requestId)
  const { pickstatus, dropstatus} = req.body;
  try {
      const updatedRequest = await PickupandDropModel.findByIdAndUpdate(requestId, { pickstatus, dropstatus }, { new: true });

      if (!updatedRequest) {
          return res.status(404).json({ message: 'Booking request not found' });
      }
      res.status(200).json({ message: 'Booking request updated successfully', updatedRequest });
  } catch (error) {
      console.error(`Error updating booking request: ${error.message}`);
      res.status(500).json({ message: 'Failed to update booking request', error });
  }
};
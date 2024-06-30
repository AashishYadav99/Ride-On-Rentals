import userModel from "../models/user.models.js";
import FeedbackModel from "../models/feedback.models.js";
import vehiclebookingmodel from "../models/vehiclebooking.model.js";

// user Registrtation code start from here

export const userRegistration = async (req, res) => {
  const userObject = req.body;
  console.log(userObject);
  const { user_name, email, phoneno, password, city, address } = userObject; //object destructring
  try {
    const shopDoc = new userModel({
      user_name: user_name,
      email: email,
      phoneno: phoneno,
      password: password,
      city: city,
      address: address
    });
    await shopDoc.save();
  } catch (err) {
    console.log(err.message);
  }
  res.send("Thank You for your submmition User");
};

//userLogin code start form here

export const userLogin = async (req, res) => {
  try {
    let user_loginObject = req.body;
    // console.log("user_loginObject is ---->"+user_loginObject);
    const { email, password } = user_loginObject;
    const user_data = await userModel.findOne({ email: email }); //atrribute:value
    console.log(user_data);
    if (user_data !== null) {
      if (user_data.password === password) {
        res.send({ code: 200, message: "user exists", token: user_data.email });
      } else {
        res.send({ code: 404, message: "Password error" });
      }
    } else {
      res.send("user not found");
    }
  } catch (err) {
    console.log(err);
  }
};

//user Profile code start form here

export const profile = async (req, res) => {
  try {
    const uid = req.query.userid;
    console.log(`data received from react ${uid}`);
    const user_data = await userModel.findOne({ email: uid });
    console.log(user_data);
    res.send(user_data);
  } catch (err) {
    console.log(err);
  }
};

//userEdit Profile code start form here

export const editUser_profile = async (req, res) => {
  try {
    let user_data = req.body;
    const { user_name, phoneno, city, address,email } = user_data;
    const imgURL=req.file.filename
    console.log(`URL path is ${imgURL}`);
    const updateDoc = {
      $set: {
        user_name: user_name,
        phoneno: phoneno,
        city: city,
        address: address,
        imgURL:imgURL
      },
    };
    const filter_condition = { email: email };
    const status = await userModel.updateOne(filter_condition, updateDoc);
    console.log(status);
    res.send(status);
  } catch (err) {
    console.log("connection failed to the server" + err);
  }
};

export const addFeedback = async (req, res) => {
  const feedbackObject = req.body;
  console.log(feedbackObject);
  const { name, email, number, remarks, rating } = feedbackObject; //objecf destructring
  try {
    const FeedBackDoc = new FeedbackModel({
      name: name,
      phoneno: number,
      email: email,
      feedback: remarks,
      rating: rating,
    });
    await FeedBackDoc.save();
  } catch (err) {
    console.log(err.message);
  }
  res.send("Thank You for your feedback");
};


//vehicle booking controlller

export const vehicleBooking = async (req, res) => {
  const vehicleBookingObject = req.body;
  console.log(vehicleBookingObject);
  const { usermail, vehicleno, bookingtype, requestdate, fromdate,pikuptime,todate,droptime} = vehicleBookingObject; //objecf destructring
  try {
    const vehicleBookingDoc = new vehiclebookingmodel({
      usermail: usermail,
      vehicleno: vehicleno,
      bookingtype: bookingtype,
      requestdate: requestdate,
      fromdate: fromdate,
      pikuptime:pikuptime,
      todate:todate,
      droptime:droptime
    });

    await vehicleBookingDoc.save();
  } catch (err) {
    console.log(err.message);
  }

  res.send("Thank You for your Booking");
};


// View Booking Status

export const allBookingRequests = async (req, res) => {
  try {
    const uid = req.query.userid;
    //   console.log(data received from react ${uid});
    const booking_data = await vehiclebookingmodel.find({ usermail: uid });
    res.send(booking_data);
  } catch (err) {
    console.log(err);
  }
};
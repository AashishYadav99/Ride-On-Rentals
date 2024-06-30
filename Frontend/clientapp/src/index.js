import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./components/Layout";
import About_us from "./components/About_us";
import Contact_us from "./components/Contact_us";
import UserLogin from "./components/User/UserLogin";
import ShopNavbar from "./components/Admin/ShopNavbar";
import ShopLogin from "./components/Admin/ShopLogin";
import UserRegistration from "./components/User/UserRegistration";
import Shop from "./components/Admin/Shop";
import AllCars from "./components/AllCars";
import AllBikes from "./components/AllBikes";
import AllScooty from "./components/AllScooty";
import AllBicycle from "./components/AllBicycle";
import AllFeedback from "./components/Admin/AllFeedback";
import FAQPage from "./components/FAQPage";
import TrafficRules from "./components/TrafficRules";
import AllOffers from "./components/AllOffers";
import UserHome from "./components/User/UserHome";
import ShopEditProfile from "./components/Admin/ShopEditProfile";
import ShopHome from "./components/Admin/ShopHome";
import AddVehicle from "./components/Admin/AddVehicles";
import More from "./components/Admin/More";
import AllContact from "./components/Admin/AllContact";
import Offers from "./components/Admin/Offers";
import AllPendingRequests from "./components/Admin/AllPendingRequests";
import AllAcceptedRequests from "./components/Admin/AllAcceptedRequests";
import AllRejectedRequests from "./components/Admin/AllRejectedReuests";
import ShopProfile from "./components/Admin/ShopProfile";
import UserEditProfile from "./components/User/UserEditProfile";
// import Feedback from 'react-bootstrap/esm/Feedback';
import VehicleBookingForm from "./components/User/VehicleBookingForm";
import UserProfile from "./components/User/UserProfile";
import BookingForm from "./components/User/BookingForm";
import UserAllCars from "./components/User/UserAllCars";
import UserAllBikes from "./components/User/UserAllBikes";
import UserAllScooty from "./components/User/UserAllScooty";
import UserAllCycles from "./components/User/UserAllCycles";
import App from "./App";
import Feedback from "./components/User/Feedback";
import YourBookings from "./components/User/YourBookings";
import PickupDrop from "./components/Admin/PickupDrop";
import AllPickup from "./components/Admin/AllPickup";
import AllDropoff from "./components/Admin/AllDropoff";

const websiterouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<App />} />
        <Route path="/about_us" element={<About_us />} />
        <Route path="/Contactus" element={<Contact_us />} />
        <Route path="/ShopNavbar" element={<ShopNavbar />} />

        <Route path="/allbicycles" element={<AllBicycle />} />
        <Route path="/allcars" element={<AllCars />} />
        <Route path="/allbikes" element={<AllBikes />} />
        <Route path="/allscooty" element={<AllScooty />} />
        <Route path="allfaqs" element={<FAQPage />} />
        <Route path="/trafficrules" element={<TrafficRules />} />
        <Route path="/alloffers" element={<AllOffers />} />
        {/* 
        
        
        <Route path="/ForgotPassword" element={<ForgotPassword/>}/> */}
      </Route>

      {/* User  */}

      <Route>
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/UserRegistration" element={<UserRegistration />} />
        <Route path="/user_home" element={<UserHome />} />
        <Route path="/UserEditProfile" element={<UserEditProfile />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/VehicleBooking" element={<VehicleBookingForm />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/BookingForm/:value" element={<BookingForm />} />
        <Route path="/UserAllCars" element={<UserAllCars />} />
        <Route path="/UserAllBikes" element={<UserAllBikes />} />
        <Route path="/UserAllScooty" element={<UserAllScooty />} />
        <Route path="/UserAllCycle" element={<UserAllCycles />} />
        <Route path="/YourBookings" element={<YourBookings />} />
      </Route>

      {/* shop */}

      <Route>
        <Route path="/shop_login" element={<ShopLogin />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/allfeedbacks" element={<AllFeedback />} />
        <Route path="/ShopEditProfile" element={<ShopEditProfile />} />
        <Route path="/shop_home" element={<ShopHome />} />
        <Route path="/AddVehicles" element={<AddVehicle />} />
        <Route path="/More" element={<More />} />
        <Route path="/allcontacts" element={<AllContact />} />
        <Route path="/add_offers" element={<Offers />} />
        <Route path="/AllPendingRequests" element={<AllPendingRequests />} />
        <Route path="/AllAcceptedRequests" element={<AllAcceptedRequests />} />
        <Route path="/AllRejectedRequests" element={<AllRejectedRequests />} />
        <Route path="/PickupDrop/:value1" element={<PickupDrop />} />  
        {/* upar vale se only form khulega isase  */}
        <Route path="/ShopProfile" element={<ShopProfile />} />
        <Route path="/AllPickup" element={<AllPickup />} />
        <Route path="/AllDrop" element={<AllDropoff />} />

      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={websiterouter}></RouterProvider>
  </React.StrictMode>
);

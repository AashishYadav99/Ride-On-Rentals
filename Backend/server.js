// import express, { request, response } from "express";
import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import connect_db from './database/db.js'
import common_routes from './routes/common_routes.js'
import shop_routes from './routes/shop_routes.js'
import user_routes from './routes/user_routes.js'
//create server using express

const serverApp = express();

dotenv.config();

serverApp.use(cors())

serverApp.use(express.json())
serverApp.use(express.urlencoded({ extended: true }))
serverApp.use(express.static("public"))

// creating an endpoint with controller
serverApp.use("/", common_routes)
serverApp.use("/shop",shop_routes)
serverApp.use("/user",user_routes)



connect_db()

serverApp.get("/contact", (request, response) => {
  response.send("<h1>this is contact us </h1>");
});

serverApp.get("/users", (request, response) => {
  const user = [
    {
      name: "Ashish",
      email: "ashish@gmail.com",
    },
    {
      name: "him",
      email: "him@gmail.com",
    },
  ];
  response.send(user)
});

// const PORT = 9999;
const PORT = process.env.PORT_NUMBER || 9999;
// listening server on a port
serverApp.listen(PORT, () => {
  console.log(`server is running on  http://localhost:${PORT}`); // no spaces need after the local host
});

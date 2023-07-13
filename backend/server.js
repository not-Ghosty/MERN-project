const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); //to use env variables inside .env file

const list = require("./routes/bucketList");
//express app
const app = express();

const port = process.env.PORT; // accessing PORT from .env file by global object "process"

//middlware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

//writing all routes in a seperate file inside routes folder//
//ROUTES
app.use("/api/bucketlist", list);

//connect to cloud db
mongoose
  .connect(process.env.MONGO_URI) // ASYNC FUNCTION
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening to http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

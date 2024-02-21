const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const usersRouter = require('./routes/users');


// connect to MongoDB
mongoose.connect("mongodb://localhost:27017/form");
mongoose.connection.on("connected", ()=>{
  console.log("Connected to MongoDB");
});

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3149;
app.use("/users", usersRouter);

app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
});

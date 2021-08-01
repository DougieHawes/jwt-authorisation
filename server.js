require("dotenv").config();

const mongoUri = process.env.MONGODB_URI;
const port = process.env.PORT;

const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(cookieParser());
app.use(express.json());

app.listen(port, console.log(`express app running on port:${port}`));

mongoose.connect(
  mongoUri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log("mongodb connected")
);

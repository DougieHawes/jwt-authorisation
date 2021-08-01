require("dotenv").config();

const mongoUri = process.env.MONGODB_URI;
const port = process.env.PORT;

const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(express.json());

app.use("/auth", require("./routes/auth"));
app.use("/user", require("./routes/user"));

app.listen(port, console.log(`express app running on port:${port}`));

mongoose.connect(
  mongoUri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log("mongodb connected")
);

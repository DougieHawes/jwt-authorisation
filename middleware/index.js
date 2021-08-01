const jwt = require("jsonwebtoken");

const User = require("../models/User");

exports.isAuth = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ msg: "unauthorised" });
    }

    next();
  } catch (err) {
    return res.status(401).json({ msg: "unauthorised" });
  }
};

exports.isAdmin = async (req, res, next) => {
  try {
    const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);

    const user = await User.find({ _id: decoded.user });

    if (user[0].role !== "auth") {
      return res.status(401).json({ msg: "unauthorised" });
    }

    next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

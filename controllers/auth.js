const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

exports.signUp = async (req, res) => {
  try {
    const { username, email, password, password2 } = req.body;

    if (!username || !email || !password || !password2) {
      return res.status(400).json({
        msg: "please enter a usernam, email, password, and confirm password",
      });
    }
    if (username.length < 6) {
      return res.status(400).json({
        msg: "please enter a username 6 characters or longer",
      });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({
        msg: "please enter a valid email",
      });
    }
    if (password !== password2) {
      return res.status(400).json({
        msg: "your passwords do not match",
      });
    }

    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return res.status(400).json({ msg: "invalid credentials" });
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({ username, email, password: passwordHash });

    const savedUser = await newUser.save();

    const token = jwt.sign({ user: savedUser._id }, process.env.JWT_SECRET);

    res.cookie("token", token, { httpOnly: true }).send();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        msg: "please enter a usernam, email, password, and confirm password",
      });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({
        msg: "please enter a valid email",
      });
    }

    const checkUser = await User.findOne({ email });
    const checkPassword = await bcrypt.compare(password, checkUser.password);
    if (!checkUser || !checkPassword) {
      return res.status(400).json({ msg: "invalid credentials" });
    }

    const token = jwt.sign({ user: checkUser._id }, process.env.JWT_SECRET);

    res.cookie("token", token, { httpOnly: true }).send();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

exports.signOut = (req, res) => {
  try {
    res.cookie("token", "", { httpOnly: true, expires: new Date(0) }).send();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

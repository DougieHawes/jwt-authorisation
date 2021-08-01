import { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import "./style.min.css";

const Signup = () => {
  const [state, setState] = useState({
    username: "DarleneAlderson",
    email: "darlenealderson@fsociety.net",
    password: "Rose42",
    password2: "Rose42",
  });

  const { username, email, password, password2 } = state;

  const handleChange = (name) => (e) => {
    setState({ ...state, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, {
        username,
        email,
        password,
        password2,
      });
    } catch (err) {
      console.log("ERROR-" + err.message);
    }
  };

  return (
    <form className="route form" onSubmit={handleSubmit}>
      <h2 className="form-title">Signup</h2>
      <label className="label" htmlFor="username">
        username
      </label>
      <input
        className="input"
        value={username}
        onChange={handleChange("username")}
        placeholder="enter username"
      />
      <label className="label" htmlFor="email">
        email
      </label>
      <input
        className="input"
        value={email}
        onChange={handleChange("email")}
        placeholder="enter email"
      />
      <label className="label" htmlFor="password">
        password
      </label>
      <input
        className="input"
        value={password}
        onChange={handleChange("password")}
        type="password"
        placeholder="enter password"
      />
      <label className="label" htmlFor="password">
        confirm
      </label>
      <input
        className="input"
        value={password2}
        onChange={handleChange("password2")}
        type="password"
        placeholder="confirm password"
      />
      <button type="submit" className="button">
        submit
      </button>
      <Link to="/signin">signin</Link>
    </form>
  );
};

export default Signup;

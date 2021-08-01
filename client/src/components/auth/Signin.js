import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./style.min.css";

const Signin = () => {
  const [state, setState] = useState({
    email: "darlenealderson@fsociety.net",
    password: "Rose42",
  });

  const { email, password } = state;

  const handleChange = (name) => (e) => {
    setState({ ...state, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/auth/signin`, {
        email,
        password,
      });
    } catch (err) {
      console.log("ERROR-" + err.message);
    }
  };

  return (
    <form className="route form" onSubmit={handleSubmit}>
      <h2 className="form-title">Signin</h2>
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
      <button type="submit" className="button">
        submit
      </button>
      <Link to="/signup">signup</Link>
    </form>
  );
};

export default Signin;

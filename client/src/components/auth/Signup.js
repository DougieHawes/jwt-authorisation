import { Link } from "react-router-dom";

import "./style.min.css";

const Signup = () => {
  return (
    <form className="route form">
      <h2 className="form-title">Signup</h2>
      <label className="label" for="username">
        username
      </label>
      <input className="input" placeholder="enter username" />
      <label className="label" for="email">
        email
      </label>
      <input className="input" placeholder="enter email" />
      <label className="label" for="password">
        password
      </label>
      <input className="input" type="password" placeholder="enter password" />
      <label className="label" for="password">
        confirm
      </label>
      <input className="input" type="password" placeholder="confirm password" />
      <button type="submit" className="button">
        submit
      </button>
      <Link to="/signin">signin</Link>
    </form>
  );
};

export default Signup;

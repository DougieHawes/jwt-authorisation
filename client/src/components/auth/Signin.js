import { Link } from "react-router-dom";

import "./style.min.css";

const Signin = () => {
  return (
    <form className="route form">
      <h2 className="form-title">Signin</h2>
      <label className="label" for="email">
        email
      </label>
      <input className="input" placeholder="enter email" />
      <label className="label" for="password">
        password
      </label>
      <input className="input" type="password" placeholder="enter password" />
      <button type="submit" className="button">
        submit
      </button>
      <Link to="/signup">signup</Link>
    </form>
  );
};

export default Signin;

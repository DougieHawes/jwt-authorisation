import { Link, NavLink } from "react-router-dom";
import axios from "axios";

import "./style.min.css";

const Navbar = () => {
  const signout = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_API_URL}/auth/signout`);
    } catch (err) {
      console.log("ERROR-" + err.message);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo-box">
        <h1 className="navbar-logo">
          <Link to="/">JWT-Authorisation</Link>
        </h1>
      </div>
      <div className="navbar-links-box">
        <ul className="navbar-links">
          <NavLink activeClassName="selected" to="/dashboard">
            <li className="navbar-link">dashboard</li>
          </NavLink>
          <li className="navbar-link" onClick={signout}>
            signout
          </li>
          <NavLink activeClassName="selected" to="/signin">
            <li className="navbar-link">signin</li>
          </NavLink>
          <NavLink activeClassName="selected" to="/signup">
            <li className="navbar-link">signup</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

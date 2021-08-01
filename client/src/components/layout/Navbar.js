import { Link } from "react-router-dom";

import "./style.min.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo-box">
        <h1 className="navbar-logo">
          <Link to="/">JWT-Authorisation</Link>
        </h1>
      </div>
      <div className="navbar-links-box">
        <ul className="navbar-links">
          <Link activeClassName="selected" to="/dashboard">
            <li className="navbar-link">dashboard</li>
          </Link>
          <Link activeClassName="selected" to="/signin">
            <li className="navbar-link">signin</li>
          </Link>
          <Link activeClassName="selected" to="/signup">
            <li className="navbar-link">signup</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

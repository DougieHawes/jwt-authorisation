import { Link } from "react-router-dom";

import "./style.min.css";

const Landing = () => {
  return (
    <div className="route">
      <h2 className="route-title">Welcome to my JWT-Auth app</h2>
      <p className="route-subtitle">Please sign up</p>
      <Link to="/signup">signup</Link>
    </div>
  );
};

export default Landing;

import { Link } from "react-router-dom";

import "./style.min.css";

const Admin = () => {
  return (
    <div className="route">
      <h2 className="route-title">Welcome to the admin dashboard</h2>
      <p className="route-subtitle">Only admins can see this page</p>
      <Link to="/dashboard">dashboard</Link>
    </div>
  );
};

export default Admin;

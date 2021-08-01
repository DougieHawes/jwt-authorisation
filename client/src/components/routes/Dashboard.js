import { Link } from "react-router-dom";

import "./style.min.css";

const Dashboard = () => {
  return (
    <div className="route">
      <h2 className="route-title">Welcome to the dashboard</h2>
      <p className="route-subtitle">You need validation to see this page</p>
      <Link to="/admin">admin dashboard</Link>
    </div>
  );
};

export default Dashboard;

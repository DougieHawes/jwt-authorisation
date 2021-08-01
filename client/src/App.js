import { Route } from "react-router-dom";
import axios from "axios";

import "./style.min.css";

import Navbar from "./components/layout/Navbar";

import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";

import Landing from "./components/routes/Landing";
import Dashboard from "./components/routes/Dashboard";
import Admin from "./components/routes/Admin";

axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="app">
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/admin" component={Admin} />
    </div>
  );
}

export default App;

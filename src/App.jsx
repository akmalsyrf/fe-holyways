import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";

// pages
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";
import RaiseFund from "./pages/RaiseFund";
import DetailDonate from "./pages/DetailDonate";
import MakeFund from "./pages/MakeFund";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import ViewFund from "./pages/ViewFund";

import { UserContext } from "./context/UserContext";

function App() {
  const [state, dispatch] = useContext(UserContext);
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (String(token) == "Authenticated") {
      dispatch({ type: "AUTHENTICATED" });
    }
  });
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/detail-donate/:id" component={DetailDonate} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/raise-fund" component={RaiseFund} />
        <PrivateRoute exact path="/view-fund/:id" component={ViewFund} />
        <PrivateRoute exact path="/make-fund" component={MakeFund} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
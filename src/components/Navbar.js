import React from "react";
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../logo.png";
import PlaceInteraction from "./PlaceInteraction";
import VehicleActivity from "./VehicleActivity";
import { Button } from 'reactstrap';

const Navbar = () => {
  return(
    <>
      <div className="navbar-logo">
          <img className="logo" src={logo} alt="Numadic Logo" />
          <p className="brandName">Numadic</p>
      </div>
      <div className="navigate">
        <Router>
          <div className="links">
            <Link className="link" to="/PlaceInteraction">
              <Button id="btn" outline color="secondary">PlaceInteraction</Button>
            </Link>
            <Link className="link" to="/VehicleActivity">
              <Button id="btn" outline color="secondary">VehicleActivity</Button>
            </Link>
          </div>
          <Switch>
            <Route path="/PlaceInteraction"><PlaceInteraction /></Route>
            <Route path="/VehicleActivity"><VehicleActivity /></Route>
          </Switch>
        </Router>
      </div>
    </>
  )
}

export default Navbar;
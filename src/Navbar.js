import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, NavLink
} from "react-router-dom";

import Home from "./Home";
import Galerie from "./Galerie";
import Contact from "./Contact";

import './css/navbar.css'

export default function Navbar() {
    return(
        <Router>
            <div class="navbar">
                <div class="links">
                    <ul>
                        <NavLink exact to="/" activeClassName="navbar__link--active"><li>Accueil</li></NavLink>
                        <NavLink to="/galerie" activeClassName="navbar__link--active"><li>Galerie</li></NavLink>
                        <NavLink to="/contact" activeClassName="navbar__link--active"><li>Contact</li></NavLink>
                    </ul>
                </div>
                <Switch>
                    <Route path="/galerie">
                        <Galerie />
                    </Route>
                    <Route path="/contact">
                         <Contact/>
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

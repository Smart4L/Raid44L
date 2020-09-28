import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link, NavLink,
    withRouter
} from "react-router-dom";

import Home from "./Home";
import Sponsors from "./Sponsors";
import Galerie from "./Galerie";
import Contact from "./Contact";

import './css/navbar.css'

export default function Navbar() {
    return(
        <Router>
            <div class="navbar">
                <div class="links">
                    <ul>
                        <li><NavLink exact to="/" activeClassName="navbar__link--active">Accueil</NavLink></li>
                        <li><NavLink to="/sponsors" activeClassName="navbar__link--active">Sponsors</NavLink></li>
                        <li><NavLink to="/galerie" activeClassName="navbar__link--active">Galerie</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="navbar__link--active">Contact</NavLink></li>
                    </ul>
                </div>
                <Switch>
                    <Route exact path="/" component={withRouter(Home)} />
                    <Route exact path="/sponsors" component={withRouter(Sponsors)} />
                    <Route exact path="/galerie" component={withRouter(Galerie)} />
                    <Route exact path="/contact" component={withRouter(Contact)} />
                </Switch>
            </div>
        </Router>
    )
}

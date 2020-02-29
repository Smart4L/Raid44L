import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
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
                        <Link to="/"><li>Accueil</li></Link>
                        <Link to="/galerie"><li>Galerie</li></Link>
                        <Link to="/contact"><li>Contact</li></Link>
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
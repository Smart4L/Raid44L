import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return(
        <div class="navbar">
            <div class="links">
                <ul>
                    <li><NavLink exact to="/" activeClassName="navbar__link--active">Accueil</NavLink></li>
                    <li><NavLink to="/sponsors" activeClassName="navbar__link--active">Sponsors</NavLink></li>
                    <li><NavLink to="/galerie" activeClassName="navbar__link--active">Galerie</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="navbar__link--active">Contact</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

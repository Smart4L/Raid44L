import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

import "../../assets/css/Navbar.css";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const tap = () => {
        let invertOpen = !isOpen
        setIsOpen(invertOpen)
    }

    const close = () => {
        setIsOpen(false)
    }

    return (
    
        <div> 
            <div className="hide-mobile">
                <div className="navbar">
                    <div className="links">
                        <ul>
                            <li><NavLink to="/" className={(navData) => navData.isActive ? "navbar__link--active" : "" }>Accueil</NavLink></li>
                            <li><NavLink to="/sponsors" className={(navData) => navData.isActive ? "navbar__link--active" : "" }>Sponsors</NavLink></li>
                            <li><NavLink to="/galerie" className={(navData) => navData.isActive ? "navbar__link--active" : "" }>Galerie</NavLink></li>
                            <li><NavLink to="/follow" className={(navData) => navData.isActive ? "navbar__link--active" : "" }>Nous suivre</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="hide-desktop">
                <div className="navbar-mobile">
                    <div className="top">
                        <span className="burger"><NavLink exact to="/" className={(navData) => navData.isActive ? "navbar__link--active" : "" } onClick={close}>Raid 44L</NavLink></span>
                        <span className="burger" onClick={tap}>{ isOpen ? <ImCross/> : <GiHamburgerMenu/> }</span>
                    </div>
                    <div className={`bottom ${isOpen? '': 'none'}`}>
                        <NavLink to="/" className={(navData) => navData.isActive ? "navbar__link--active" : "" } onClick={ close }>Accueil</NavLink>
                        <NavLink to="/sponsors" className={(navData) => navData.isActive ? "navbar__link--active" : "" } onClick={ close }>Sponsors</NavLink>
                        <NavLink to="/galerie" className={(navData) => navData.isActive ? "navbar__link--active" : "" } onClick={ close }>Galerie</NavLink>
                        <NavLink to="/follow" className={(navData) => navData.isActive ? "navbar__link--active" : "" } onClick={ close }>Nous suivre</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

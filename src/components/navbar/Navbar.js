import React from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    tap = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    close = () => {
        this.setState({ isOpen: false });
    }

    getIcon = () => {
        return this.state.isOpen ? <GiHamburgerMenu/> : <ImCross/>
    }

    render() {
        return (
        
            <div> 
                <div className="hide-mobile">
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
                </div>
                <div className="hide-desktop">
                    <div class="navbar-mobile">
                        <div class="top">
                            <span className="burger"><NavLink exact to="/" activeClassName="navbar__link--active" onClick={ this.close }>Raid 44L</NavLink></span>
                            <span className="burger" onClick={ this.tap }>{ this.state.isOpen ? <ImCross/> : <GiHamburgerMenu/> }</span>
                        </div>
                        <div className={`bottom ${this.state.isOpen? '': 'none'}`}>
                            <NavLink exact to="/" activeClassName="navbar__link--active" onClick={ this.close }>Accueil</NavLink>
                            <NavLink to="/sponsors" activeClassName="navbar__link--active" onClick={ this.close }>Sponsors</NavLink>
                            <NavLink to="/galerie" activeClassName="navbar__link--active" onClick={ this.close }>Proposition</NavLink>
                            <NavLink to="/contact" activeClassName="navbar__link--active" onClick={ this.close }>Contact</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

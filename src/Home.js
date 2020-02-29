import React from "react";
import './css/index.css'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <div className="bg-opacity">
                    <div className="logo-4ltrophy">
                        <img src="/logo-4ltrophy.png" alt="4L Trophy"/>
                    </div>
                    <div className="subtitle">
                        <div className="border-left"></div>
                        <h1>Découvrir notre projet</h1>
                        <div className="border-right"></div>
                    </div>
                </div>
                <div className="bg-home">
                </div>
                <div className="menu">
                    <div>
                        <img className="icon-menu" src="car.png" alt="volant"/>
                        <p>Raid 44L</p>
                    </div>
                    <div>
                        <img className="icon-menu" src="racing-flag.png" alt="drapeau"/>
                        <p>Le 4L Trophy</p></div>
                    <div>
                        <img className="icon-menu" src="helmet.png" alt="casque"/>
                        <p>Pilotes</p>
                    </div>
                </div>
            </div>
        )
    }
}
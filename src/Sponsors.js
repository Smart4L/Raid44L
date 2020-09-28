import React from "react";
import {Link} from "react-router-dom";
import './css/sponsors.css'

export default class Sponsors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {

        return(
            <div>
                <div className="bg-orange">
                    <div className="remerciements">
                        <h1>Merci à eux !</h1>
                    </div>
                </div>
                <div className="sponsors">
                    <div className="sponsors-top">
                        <div className="border-top-sponsor"></div>
                        <h2>Les Sponsors</h2>
                        <div className="border-bottom-sponsor"></div>
                    </div>
                    <div className="container sponsors-bottom">
                        Soyez le prochain <Link to="/contact">Contactez-nous</Link>
                        <div className="sponsor-img">
                            <div className="sponsor">
                                <a href="https://twitter.com/EuroArcSautron" target="_blank"><img src="/sponsors/euro-arc-sautron-logo.jpg" /></a>
                            </div>
                            <div className="sponsor">
                                <a href="https://th-web.fr" target="_blank"><img src="/sponsors/th-web.svg" /></a>
                            </div>
                            <div className="sponsor">
                                <a href="https://cedricmenanteau.fr" target="_blank"><img src="/sponsors/cedricmenanteau.png" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
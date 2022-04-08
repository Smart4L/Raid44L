import React from "react";
import { Link } from "react-router-dom";

export const SponsorsImg = () => {
    return (
        <div className="sponsors">
            <div className="sponsors-top">
                <div className="border-top-sponsor"></div>
                <h2>Les Sponsors</h2>
                <div className="border-bottom-sponsor"></div>
            </div>
            <div className="sponsors-bottom">
                <div>Soyez le prochain <Link to="/contact">Contactez-nous</Link></div>
                <div className="sponsor-img">
                    <div className="sponsor">
                        <a href="https://twitter.com/EuroArcSautron" target="_blank" rel="noopener noreferrer">
                        <img alt="euro-arc" src="/sponsors/euro-arc-sautron-logo.jpg" />
                        </a>
                    </div>
                    <div className="sponsor">
                        <a href="https://th-web.fr" target="_blank" rel="noopener noreferrer">
                        <img alt="th-web" src="/sponsors/th-web.svg" />
                        </a>
                    </div>
                    <div className="sponsor">
                        <a href="https://cedricmenanteau.fr" target="_blank" rel="noopener noreferrer">
                        <img alt="cedric" src="/sponsors/cedricmenanteau.png" />
                        </a>
                    </div>
                    <div className="sponsor">
                        <a href="https://particuliers.societegenerale.fr" target="_blank" rel="noopener noreferrer">
                        <img alt="societegenerale" src="/sponsors/societe-generale.png" />
                        </a>
                    </div>
                    <div className="sponsor">
                        <a href="https://www.dynamips.com/" target="_blank" rel="noopener noreferrer">
                        <img alt="dynamips" src="/sponsors/dynamips.png" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from "react";
import './css/galerie.css'

export default class Galerie extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="galerie">
                <div className="big-video">
                    <iframe src="https://www.youtube.com/embed/92sXWVxRr0g" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </div>
                <div className="small-videos">
                    <div className="small-video">
                        <img src="/illustration-1.png"/>
                        <div className="text-video">
                            Avec un TEXTE super long, vraiment super long c'est trop chiant
                            <p className="date">14/05/2020</p>
                            <p className="lieu">Nantes</p>
                        </div>
                    </div>
                    <div className="small-video">
                        <img src="/illustration-1.png"/>
                        <div className="text-video">
                            Avec un TEXTE super long, vraiment super long c'est trop chiant
                            <p className="date">14/05/2020</p>
                            <p className="lieu">Nantes</p>
                        </div>
                    </div>
                    <div className="small-video">
                        <img src="/illustration-1.png"/>
                        <div className="text-video">
                            Avec un TEXTE super long, vraiment super long c'est trop chiant
                            <p className="date">14/05/2020</p>
                            <p className="lieu">Nantes</p>
                        </div>
                    </div>
                </div>
                <div className="bandeaux">
                    <div className="bandeaux-block">
                        <div className="button">
                            Toutes les Vidéos
                        </div>
                    </div>
                    <div className="bandeaux-block">
                        <div className="subtitle-galerie">
                            <div className="border-top-galerie"></div>
                            <h1>vivre l'expérience</h1>
                            <div className="border-bottom-galerie"></div>
                        </div>
                    </div>
                </div>
                <div className="photos">
                    <div className="photo">
                        <img src="/illustration-1.png"/>
                        <div className="text">Le départ</div>
                    </div>
                    <div className="photo">
                        <img src="/illustration-1.png"/>
                        <div className="text">Le départ</div>
                    </div>
                    <div className="photo">
                        <img src="/illustration-1.png"/>
                        <div className="text">Le départ</div>
                    </div>
                    <div className="photo">
                        <img src="/illustration-1.png"/>
                        <div className="text">Le départ</div>
                    </div>
                    <div className="photo">
                        se préparer
                    </div>
                    <div className="photo">
                        <img src="/illustration-1.png"/>
                        <div className="text">Le départ</div>
                    </div>
                    <div className="photo">
                        <img src="/illustration-1.png"/>
                        <div className="text">Le départ</div>
                    </div>
                    <div className="photo">
                        <img src="/illustration-1.png"/>
                        <div className="text">Le départ</div>
                    </div>
                    <div className="photo">
                        <img src="/illustration-1.png"/>
                        <div className="text">Le départ</div>
                    </div>
                    <div className="photo">
                        <img src="/illustration-1.png"/>
                        <div className="text">Le départ</div>
                    </div>
                    <div className="photo">
                        réparer
                    </div>
                    <div className="photo">
                        <img src="/illustration-1.png"/>
                        <div className="text">Le départ</div>
                    </div>
                    <div className="photo">
                        <img src="/illustration-1.png"/>
                        <div className="text">Le départ</div>
                    </div>
                    <div className="photo">
                        <img src="/illustration-1.png"/>
                        <div className="text">Le départ</div>
                    </div>
                    <div className="photo">
                        <img src="/illustration-1.png"/>
                        <div className="text">Le départ</div>
                    </div>
                    <div className="photo">
                        partager
                    </div>
                </div>
                <div className="bandeaux">
                    <div className="bandeaux-block">
                        <div className="subtitle-galerie">
                            <div className="border-top-galerie"></div>
                            <h1>capturer l'instant</h1>
                            <div className="border-bottom-galerie"></div>
                        </div>
                    </div>
                    <div className="bandeaux-block">
                        <div className="button">
                            Toutes les Photos
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

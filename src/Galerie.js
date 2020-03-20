import React from "react";
import './css/galerie.css'

import {getData} from "./request"
import {shuffle} from "./shuffle"

const R = require('ramda');

export default class Galerie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgs: [],
            dict: ["Se Préparer", "Réparer", "Partager", "Soutenir"],
            display: []
        }
    }

    componentWillMount() {
        this.getImgs()
    }

    getImgs = async() => {
        let imgs = await getData("http://127.0.0.1:8000/imgs/")
        this.setState({imgs})
        this.shuffleArray()
    }

    shuffleArray = () =>{
        let display = shuffle(R.concat(this.state.imgs,this.state.dict))
        this.setState({ display })
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
                    {
                        this.state.imgs.map((item,i) =>
                            <div className="photo">
                                <img src={`data:image/jpeg;base64,${item.fields.img}`}/>
                                <div className="text">
                                    {item.fields.description}
                                    <div className="date">{item.fields.date}</div>
                                    <div className="lieu">{item.fields.lieu}</div>
                                </div>
                            </div>
                        )
                    }
                    {
                        this.state.dict.map((item,i) =>
                            <div className="photo">
                                {item}
                            </div>
                        )
                    }
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

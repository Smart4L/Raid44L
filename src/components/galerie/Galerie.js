import React from "react";
import {getData} from "../../utils/request"
import {shuffle} from "../../utils/shuffle"

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
        let imgs = await getData("http://88.99.25.19/imgs/")
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
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Z0XgC8eJWxY" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
                <div className="small-videos">
                    <div className="small-video">
                    <img src="/illustration-1.png"/>
                    <div className="text-video">
                        Images à Venir
                        <p className="date">14/05/2020</p>
                        <p className="lieu">Nantes</p>
                    </div>
                </div>
                    <div className="small-video">
                        <img src="/photos/recuperation.jpg"/>
                        <div className="text-video">
                            Récupération de la Voiture
                        <p className="date">02/06/2020</p>
                        <p className="lieu">Tillières</p>
                    </div>
                    </div>
                    <div className="small-video">
                        <img src="/illustration-1.png"/>
                        <div className="text-video">
                            Images à Venir
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
                    {/*<div className="photo">*/}
                    {/*    <img src="https://drive.google.com/uc?export=view&id=10j2rCDwJ-byTAMD5wr0DNMH_OHBGtTkI"/>*/}
                    {/*</div>*/}
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

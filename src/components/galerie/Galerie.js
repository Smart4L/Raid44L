import React from "react";
import { getData } from "../../utils/request";
import { shuffle } from "../../utils/shuffle";

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
        let data = await getData("https://www.instagram.com/raid_44L/?__a=1")
        //this.setState({imgs})
        //console.log(data)
        //console.log(data.graphql.user.edge_owner_to_timeline_media.edges)
        let imgs = data.graphql.user.edge_owner_to_timeline_media.edges
        this.setState({imgs})
        this.shuffleArray()
    }

    shuffleArray = () => {
        let display = shuffle(R.concat(this.state.imgs,this.state.dict))
        this.setState({ display })
        console.log(display)
    }

    displayPhoto = (photo) => {
        if(typeof photo === 'object'){
            return(
                <img src={photo.node.display_url}/>
            )
        }
        return(
            photo
        )
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
                    <img src="/photos/4L_bleu.jpg"/>
                        <div className="text-video">
                            Et voilà notre voiture
                            <p className="date">17/10/2020</p>
                            <p className="lieu">Rezé</p>
                        </div>
                    </div>
                    <div className="small-video">
                        <img src="/photos/recuperation.jpg"/>
                        <div className="text-video">
                            La 4L d'une autre équipe
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
                        this.state.display.map((item,i) =>
                            <div className="photo">
                                {this.displayPhoto(item)}
                                {/* <img src={item.node.display_url}/> */}
                                {/* <div className="text"> */}
                                    {/* {item.fields.description} */}
                                    {/* <div className="date">{item.fields.date}</div> */}
                                    {/* <div className="lieu">{item.fields.lieu}</div> */}
                                {/* </div> */}
                            </div>
                        )
                    }
                    {/* {
                        this.state.dict.map((item,i) =>
                            <div className="photo">
                                {item}
                            </div>
                        )
                    } */}
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

import React from "react";
import { getData } from "../../utils/request";
import env from "react-dotenv";

export default class Galerie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgs: [],
            dict: ["Se Préparer", "Réparer", "Partager", "Soutenir", "Partir à l'Aventure"],
            display: []
        }
    }

    componentWillMount() {
        this.getImgs()
    }

    getImgs = async() => {
        try {
            let data = await getData(`https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp&access_token=${env.INSTA_TOKEN}`)
            let imgs = data.data
            this.setState({imgs})
        } 
        catch (error) {
        }
        this.organiseArray()
    }

    organiseArray = () => {
        this.state.dict.forEach(word => {
            let rand = Math.floor(Math.random() * this.state.imgs.length)
            this.state.imgs.splice(rand, 0, word)
        })
        let display = this.state.imgs
        this.setState({ display })
    }

    displayPhoto = (photo, i) => {
        if(typeof photo === 'object'){
            return(
                <img alt={photo.id} src={photo.media_url}/>
            )
        }
        return(
            <span alt={i}>{photo}</span>
        )
    }

    render() {
        return(
            <div className="galerie">
                <div className="big-video">
                    <iframe title="video" width="560" height="315" src="https://www.youtube.com/embed/2BjlPoMVa0k" frameBorder="0"
                            allowFullScreen></iframe>
                </div>
                <div className="small-videos">
                    <div className="small-video">
                    <img alt="left" src="/photos/4L_bleu.jpg"/>
                        <div className="text-video">
                            Et voilà notre voiture
                            <p className="date">17/10/2020</p>
                            <p className="lieu">Rezé</p>
                        </div>
                    </div>
                    <div className="small-video">
                        <img alt="center" src="/photos/recuperation.jpg"/>
                        <div className="text-video">
                            La 4L d'une autre équipe
                        <p className="date">02/06/2020</p>
                        <p className="lieu">Tillières</p>
                    </div>
                    </div>
                    {/* <div className="small-video">
                        <img alt="right" src="/illustration-1.png"/>
                        <div className="text-video">
                            Images à Venir
                            <p className="date">14/05/2020</p>
                            <p className="lieu">Nantes</p>
                        </div>
                    </div> */}
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
                                {this.displayPhoto(item, i)}
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

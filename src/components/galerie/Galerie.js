import React, { useState, useEffect } from "react";
import { getData } from "../../utils/request";
import env from "react-dotenv";

import "../../assets/css/Galerie.css";

const R = require('ramda');
const moment = require('moment');

export const Galerie = () => {

    const [imgs, setImgs] = useState([])
    const [dict] = useState(["Se Préparer", "Réparer", "Partager", "Soutenir", "Partir à l'Aventure"])
    const [display, setDisplay] = useState([])
    const [nextLink, setNextLink] = useState(null)

    useEffect(() => {
        getImgs()
    }, [])

    const getImgs = async() => {
        try {
            let data = await getData(`https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp&access_token=${env.INSTA_TOKEN}`)
            let img = data.data
            let link = ""
            if(data.paging.next){
                link = data.paging.next
            } else {
                link = null
            }
            setImgs(img)
            setNextLink(link)
            organiseArray(img)
        } 
        catch (error) {
        }
    }

    const fetchNewMedias = async() => {
        try {
            let data = await getData(nextLink)
            console.log('fetch next')
            let newImgs = R.concat(imgs, data.data)
            let link
            if(data.paging.next){
                link = data.paging.next
            } else {
                link = null
            }
            setImgs(newImgs)
            setDisplay([...newImgs])
            setNextLink(link)
        } 
        catch (error) {
        }
    }

    const organiseArray = (img) => {
        dict.forEach(word => {
            let rand = Math.floor(Math.random() * img.length)
            img.splice(rand, 0, word)
        })
        let display = img
        setDisplay(display)
    }

    const displayPhoto = (photo, i) => {
        if(typeof photo === 'object'){
            return(
                <div key={photo.id} className="photo">
                    <img alt={photo.id} src={photo.media_url}/>
                    <div className="text">
                        <span>{photo.caption}</span>
                        <span>{moment(photo.timestamp).format("DD-MM-YYYY")}</span>
                    </div>
                </div>
            )
        }
        return(
            <div className="text-block" key={i}>{photo}</div>
        )
    }


    return(
        <div className="galerie">
            <div className="big-video">
                <iframe title="video" width="560" height="315" src="https://www.youtube.com/embed/_Qr9zNErTMg" frameBorder="0"
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
                display.map((item,i) =>
                    displayPhoto(item, i)
                )
            }
        </div>
        {nextLink && 
            <div className="loadButtonContainer">
                <div onClick={() =>fetchNewMedias()} className="loadButton">
                    Afficher plus de photos
                </div>
            </div>
            
        }
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

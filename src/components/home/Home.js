import React from "react";
import Img from '../sponsors/Sponsors_img'

export default class Home extends React.Component {
    render() {
        return(
            <div>
                <div className="bg-opacity">
                    <div>
                        <img className="trophy" src="/logo-4ltrophy.png" alt="4L Trophy"/>
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
                <div className="bg-orange">
                    <div className="presentation">
                        <div className="top">
                            <img className="icon" src="/car.png" alt=""/>
                            <h2>Raid 44L</h2>
                        </div>
                        <p>
                            Raid 44L est une jeune association créée en Février 2020.
                            Elle assiste les équipages à participer au 4L Trophy, l'objectif est d'apporter du matériel éducatif et des denrées alimentaires aux plus démunis.
                            <br/>
                            Raid 44L aide ces membres à la réalisation du projet 4L Trophy, aides administratives, conseils mécaniques, ...
                            Elle possède un petit réseau associatif comprenant un garagiste, un carrosier et plusieurs ex-participant du 4L Trophy.

                        </p>
                        <hr/>
                    </div>
                    <img className="car-icon" src="/logo-Raid-44L-black.png" alt=""/>
                </div>
                <div className="transition">
                    <img src="/illustration.jpg" alt="renault 4L"/>
                    <div className="bg-grey">
                        <h3>" Une expérience unique "</h3>
                    </div>
                </div>
                <div className="raid">
                    <div className="race">
                        <div className="top">
                            <img className="icon" src="/racing-flag.png" alt=""/>
                            <h2>Le 4L Trophy</h2>
                        </div>
                        <div className="center">
                            <p>Créé en 1997 le 4L Trophy est le plus grand raid humanitaire d’Europe, ouvert uniquement aux jeunes de 18 à 28 ans. A bord d’une des plus iconiques voiture des années 2000, la Renault 4L.
                                Le raid du 4L Trophy est une course d’orientation où l’entraide et la capacité de navigation de chaque participant sera mis à l’épreuve. </p>
                            <h3>Du 18 au 28 février 2021</h3>
                            <p>Le début de l’aventure se déroule en France, à Biarritz.
                                A bord des magnifiques 4L il faudra atteindre le détroit de Gibraltar avant d’entamer un parcours dans le désert, nous irons à Marrakech pour un total de plus 6000km. </p>
                            <h3>Objectifs</h3>
                            <p>Lors de ce Raid, les objectifs sont multiples. La participation à une association humanitaire. L’envie de participer à notre échelle et nos moyens une population locale. Notre but est de suscité de l’engouement pour ce projet et les valeurs qu’il transporte.
                                Le défi est également sportif, la préparation de la 4L, son entretien et les réparations durant la course.</p>
                        </div>
                        <div className="bottom">
                            <h3>En résumé</h3>
                            <p>1 course - 3000 participants - 20 000 enfants aidés</p>
                        </div>
                    </div>
                    <img src="/map.png" alt="" className="map"/>
                </div>
                <div className="pilotes">
                    <div className="top">
                        <img className="icon" src="/helmet.png" alt=""/>
                        <div className="border-top"></div>
                        <h2>Les pilotes de la 404L</h2>
                        <div className="border-bottom"></div>
                    </div>
                    <div className="container">
                        <div className="p1">
                            <img src="jp.png" alt=""/>
                            <h3>Pilote : Jules Peguet</h3>
                            <p>21 ans<br/>Etudiant en 3ème année à l’EPSI Nantes.<br/>
                                En alternance chez Sopra Steria.<br/>
                                Passionné de Mécanique</p>
                        </div>
                        <div className="p2">
                            <img src="jp.png" alt=""/>
                            <h3>Co-Pilote : Clément Baranger</h3>
                            <p>21 ans<br/>Etudiant en 3ème année à l’EPSI Nantes.<br/>
                                En alternance chez Dassault Système.<br/>
                                Patient, sens de l’orientation </p>
                        </div>
                    </div>
                </div>
                <Img />
            </div>
        )
    }
}

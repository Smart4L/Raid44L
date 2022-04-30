import React, { useState, forwardRef, useImperativeHandle } from 'react';
import Leaflet from 'leaflet';
import { Map as MapContainer, Marker, Popup, TileLayer, Polyline } from 'react-leaflet';

import "../../assets/css/Map.css";
import 'leaflet/dist/leaflet.css';

const R = require('ramda')

Leaflet.Icon.Default.imagePath = '../node_modules/leaflet';

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export const suitcasePoint = new Leaflet.Icon({
    iconUrl: require('../../assets/img/4l-blue-map.png'),
    iconRetinaUrl: require('../../assets/img/4l-blue-map.png'),
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
    iconSize: [40, 40],
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    shadowSize: [29, 40],
    shadowAnchor: [7, 40],
})

export const Map = forwardRef((props, ref) => {

    const [zoom] = useState(13)
    const [carPosition, setCarPosition] = useState({ lat: 47.218371, lng: -1.553621 })
    const [mapPosition, setMapPosition] = useState({ lat: 47.218371, lng: -1.553621 })
    const [isCenter, setIsCenter] = useState(true)
    const [vehiclePath, setVehiclePath] = useState([{ lat: 47.2233615, lng: -1.5637241 }])

    const updateCar = (newPosition) => {
        let newPath = R.concat(vehiclePath, newPosition)
        
        setCarPosition(newPosition.at(-1))
        setVehiclePath([...newPath])

        if(isCenter){
            setMapPosition(newPosition.at(-1))
        }
    }

    useImperativeHandle(ref, () => ({

        addCarPosition(carPosition) {
            updateCar(carPosition);
        }
    
    }))

    /**
     * 
     * @param {L.LatLng} obj Object you want to get the position
     * @return {[]} Object position in array
     */
    const getPosition = (obj) => {
        try{
            return [obj.lat, obj.lng];
        }
        catch(e){
            console.error(e.message);
            throw new Error(e.message);
        }
    }

    const onMoveEvent = () => {
        if(isCenter){
            setIsCenter(false)
        }
    }

    const recenter = () => {
        let newPosition = {}
        newPosition.lat = mapPosition.lat - 0.0000001
        newPosition.lng = mapPosition.lng - 0.0000001
        setIsCenter(true)
        setMapPosition(newPosition)
    }

    let nantes = [47.218371, -1.553621];
    let biarritz = [43.4831519, -1.558626];
    let gibraltar = [36.1322349185365, -5.352273330719015];
    let tanger = [35.759465, -5.833954];

    let marrakech = [31.630000, -8.008889];

    let lineOption = { color: 'lime' };
    return(
        <div className="map_container">
            <div className="leaflet-container">
                <MapContainer center={getPosition(mapPosition)} zoom={zoom}
                    onmouseup={onMoveEvent}
                >
                    <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={nantes}>
                        <Popup>
                            Nantes <br/> Une belle ville 
                        </Popup>
                    </Marker>
                    <Marker position={biarritz}>
                        <Popup>
                            Biarritz <br/> Village départ
                        </Popup>
                    </Marker>
                    <Marker position={gibraltar}>
                        <Popup>
                            Gibraltar <br/> Embarquement pour le Maroc
                        </Popup>
                    </Marker>
                    <Marker position={tanger}>
                        <Popup>
                            Tanger <br/> Début du parcours au Maroc
                        </Popup>
                    </Marker>
                    <Marker position={marrakech}>
                        <Popup>
                            Marrakech <br/> Fin du 4L Trophy 2022
                        </Popup>
                    </Marker>
                    <Marker position={getPosition(carPosition)} icon={suitcasePoint}>
                        <Popup>
                            L'équipage 404L
                        </Popup>
                    </Marker>
                    <Polyline pathOptions={lineOption} positions={vehiclePath} />
                    {/* <Legend /> */}
                </MapContainer>
            </div>
            <div className={`bottom ${isCenter ? '' : 'show'}`} onClick={recenter}>
                <span className="content">
                    Recentrer
                </span>
            </div>
        </div>
    )
})
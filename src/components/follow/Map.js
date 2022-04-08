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

    const [NantesToBiarritz,] = useState([
        { lat: 47.2182933, lng: -1.5535941 },
        { lat: 47.2184301, lng: -1.5533079 },
        { lat: 47.2145391, lng: -1.5502408 },
        { lat: 47.21529719999999, lng: -1.5477545 },
        { lat: 47.2156723, lng: -1.5470418 },
        { lat: 47.2132912, lng: -1.5448705 },
        { lat: 47.209108, lng: -1.541388 },
        { lat: 47.202966, lng: -1.536338 },
        { lat: 47.200243, lng: -1.534125 },
        { lat: 47.1937896, lng: -1.5289544 },
        { lat: 47.1721973, lng: -1.5143934 },
        { lat: 47.027409, lng: -1.4034224 },
        { lat: 46.3467498, lng: -0.3035259 },
        { lat: 44.886325, lng: -0.5071293 },
        { lat: 44.8796639, lng: -0.5102211 },
        { lat: 44.8057639, lng: -0.5304243 },
        { lat: 44.78932349999999, lng: -0.6205444 },
        { lat: 44.785399, lng: -0.629024 },
        { lat: 44.6342608, lng: -0.8449899999999999 },
        { lat: 44.5376498, lng: -0.8358192999999999 },
        { lat: 44.5347286, lng: -0.8381761999999999 },
        { lat: 44.52923370000001, lng: -0.8372712 },
        { lat: 43.6332346, lng: -1.3901086 },
        { lat: 43.4479352, lng: -1.547969 },
        { lat: 43.4506628, lng: -1.5554225 },
        { lat: 43.45185379999999, lng: -1.555941 },
        { lat: 43.46725439999999, lng: -1.5402953 },
        { lat: 43.475158, lng: -1.545304 },
        { lat: 43.4766641, lng: -1.5485688 },
        { lat: 43.4784098, lng: -1.5549287 },
        { lat: 43.47838, lng: -1.557031 },
        { lat: 43.4778341, lng: -1.5569595 },
        { lat: 43.4792822, lng: -1.5585933 },
        { lat: 43.4810434, lng: -1.5589242 },
        { lat: 43.4818939, lng: -1.557926 },
        { lat: 43.4829306, lng: -1.5581201 },
        { lat: 43.4829593, lng: -1.5587494 }
    ])
    const [BiarritzToGibraltar] = useState([
        { lat: 43.4830547, lng: -1.5587521 },
        { lat: 43.4841859, lng: -1.5575671 },
        { lat: 43.4809959, lng: -1.541193 },
        { lat: 43.475474, lng: -1.545512 },
        { lat: 43.467503, lng: -1.5406307 },
        { lat: 43.4511528, lng: -1.5566215 },
        { lat: 43.4502628, lng: -1.5542669 },
        { lat: 43.4499916, lng: -1.5534348 },
        { lat: 43.3398764, lng: -1.752593 },
        { lat: 43.3065392, lng: -1.8884246 },
        { lat: 43.2011165, lng: -2.4299084 },
        { lat: 43.1908322, lng: -2.4311682 },
        { lat: 42.9087932, lng: -2.7044428 },
        { lat: 42.88385, lng: -2.6959514 },
        { lat: 42.7348508, lng: -2.8711822 },
        { lat: 42.72136829999999, lng: -2.8667444 },
        { lat: 42.3355472, lng: -3.6208896 },
        { lat: 42.3324367, lng: -3.6291629 },
        { lat: 42.3164826, lng: -3.6978799 },
        { lat: 42.3046355, lng: -3.745486199999999 },
        { lat: 41.5069741, lng: -4.974143799999999 },
        { lat: 41.5135921, lng: -5.006545099999999 },
        { lat: 41.1782037, lng: -5.369860099999999 },
        { lat: 41.1747972, lng: -5.3743873 },
        { lat: 41.1723621, lng: -5.3702806 },
        { lat: 41.1743618, lng: -5.3744911 },
        { lat: 40.956248, lng: -5.7094926 },
        { lat: 40.9561825, lng: -5.7112364 },
        { lat: 40.95584729999999, lng: -5.708666600000001 },
        { lat: 38.9513584, lng: -6.3432841 },
        { lat: 38.9168555, lng: -6.373812300000001 },
        { lat: 38.9075501, lng: -6.376049999999999 },
        { lat: 37.3852815, lng: -6.0259038 },
        { lat: 37.3427726, lng: -5.9857821 },
        { lat: 37.3404649, lng: -5.983069899999999 },
        { lat: 37.2383912, lng: -5.911069599999999 },
        { lat: 36.6582158, lng: -6.0850538 },
        { lat: 36.6537124, lng: -6.089282 },
        { lat: 36.1717226, lng: -5.4594295 },
        { lat: 36.2074915, lng: -5.390159199999999 },
        { lat: 36.2063724, lng: -5.3859954 },
        { lat: 36.2056794, lng: -5.3850829 },
        { lat: 36.1916029, lng: -5.3852395 },
        { lat: 36.1824909, lng: -5.3811921 },
        { lat: 36.1682903, lng: -5.3687871 },
        { lat: 36.1668498, lng: -5.3647845 },
        { lat: 36.164817, lng: -5.3610571 },
        { lat: 36.162498, lng: -5.357393 },
        { lat: 36.1586672, lng: -5.353608400000001 },
        { lat: 36.1563197, lng: -5.3517886 },
        { lat: 36.1558853, lng: -5.352052599999999 },
        { lat: 36.1550748, lng: -5.348385599999999 },
        { lat: 36.1545187, lng: -5.348431199999999 },
        { lat: 36.1467575, lng: -5.3504214 },
        { lat: 36.1463492, lng: -5.350839199999999 },
        { lat: 36.14599949999999, lng: -5.352500399999999 },
        { lat: 36.1344622, lng: -5.352733499999999 },
        { lat: 36.1338604, lng: -5.3528316 },
        { lat: 36.1337532, lng: -5.3526886 },
        { lat: 36.1337514, lng: -5.3525287 }
    ])
    const [TangerToMidelt] = useState([
        { lat: 35.7594156, lng: -5.833995199999999 },
        { lat: 35.7591348, lng: -5.833514099999999 },
        { lat: 35.75885450000001, lng: -5.8337534 },
        { lat: 35.7585404, lng: -5.832932899999999 },
        { lat: 35.7560183, lng: -5.834868699999999 },
        { lat: 35.754856, lng: -5.832235499999999 },
        { lat: 35.6818564, lng: -5.9213286 },
        { lat: 34.2300771, lng: -6.5645097 },
        { lat: 34.232173, lng: -6.570856399999999 },
        { lat: 34.2283898, lng: -6.571324499999999 },
        { lat: 34.0132513, lng: -6.5402702 },
        { lat: 34.0060409, lng: -6.543576 },
        { lat: 33.8304223, lng: -5.5134813 },
        { lat: 33.8340134, lng: -5.5172029 },
        { lat: 33.82715719999999, lng: -5.5150133 },
        { lat: 33.8009867, lng: -5.5017144 },
        { lat: 33.7497956, lng: -5.4814645 },
        { lat: 33.731512, lng: -5.468575599999999 },
        { lat: 33.6918046, lng: -5.4001575 },
        { lat: 33.6789343, lng: -5.3725463 },
        { lat: 33.4558365, lng: -5.2366388 },
        { lat: 33.4402785, lng: -5.2024814 },
        { lat: 33.4356723, lng: -5.2057173 },
        { lat: 32.683483, lng: -4.74308 },
        { lat: 32.6799036, lng: -4.740926 },
        { lat: 32.6795257, lng: -4.735087699999999 },
        { lat: 32.6788319, lng: -4.732878599999999 },
        { lat: 32.6795297, lng: -4.7327813 }
    ])
    const [MideltToMerzouga] = useState([
        { lat: 32.6796868, lng: -4.7329713 },
        { lat: 32.6788319, lng: -4.732878599999999 },
        { lat: 31.9747946, lng: -4.4933001 },
        { lat: 31.9812206, lng: -4.4692927 },
        { lat: 31.9420259, lng: -4.4100025 },
        { lat: 31.8609247, lng: -4.270834 },
        { lat: 31.4354561, lng: -4.2333469 },
        { lat: 31.13942549999999, lng: -4.024155299999999 },
        { lat: 31.099455, lng: -4.0169287 },
        { lat: 31.1003956, lng: -4.0179048 },
        { lat: 31.0603237, lng: -4.013984 }
    ])
    const [MerzougaToZagora] = useState([
        { lat: 31.0600622, lng: -4.0159139 },
        { lat: 31.0603237, lng: -4.013984 },
        { lat: 31.2879609, lng: -4.2569832 },
        { lat: 31.28373989999999, lng: -4.2690428 },
        { lat: 31.2779678, lng: -4.2857896 },
        { lat: 31.2878952, lng: -4.2904164 },
        { lat: 30.7803127, lng: -5.566194299999999 },
        { lat: 30.3181583, lng: -5.8283271 },
        { lat: 30.32105679999999, lng: -5.8347223 },
        { lat: 30.323014, lng: -5.8403561 },
        { lat: 30.3232154, lng: -5.8425259 },
        { lat: 30.3400236, lng: -5.839673299999999 },
        { lat: 30.3454386, lng: -5.8419358 }
    ])
    const [ZagoraToMarrakech] = useState([
        { lat: 30.3456501, lng: -5.8405987 },
        { lat: 30.3457722, lng: -5.8398852 },
        { lat: 30.34657259999999, lng: -5.8400623 },
        { lat: 30.3468543, lng: -5.8383655 },
        { lat: 30.6936351, lng: -6.448055999999999 },
        { lat: 30.8994213, lng: -6.9108299 },
        { lat: 30.9403653, lng: -6.985506399999999 },
        { lat: 30.9896721, lng: -7.1376937 },
        { lat: 31.5486374, lng: -7.637889799999999 },
        { lat: 31.5764413, lng: -7.813612399999999 },
        { lat: 31.5872062, lng: -7.888324300000001 },
        { lat: 31.5870877, lng: -7.8887795 },
        { lat: 31.6125981, lng: -7.9457168 },
        { lat: 31.6226364, lng: -7.970832700000001 },
        { lat: 31.61998269999999, lng: -7.971603500000001 },
        { lat: 31.6151525, lng: -7.975227899999999 },
        { lat: 31.6147617, lng: -7.975861 },
        { lat: 31.61412959999999, lng: -7.979626799999998 },
        { lat: 31.6126202, lng: -7.9838912 },
        { lat: 31.6107066, lng: -7.9894013 },
        { lat: 31.6134107, lng: -7.992888099999999 },
        { lat: 31.6149499, lng: -7.9953106 },
        { lat: 31.6215325, lng: -7.9989874 },
        { lat: 31.619387, lng: -8.004552 },
        { lat: 31.6300377, lng: -8.0124658 }
    ])

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
    let midelt = [32.6852, -4.74512];
    let merzouga = [31.080168, -4.013361];
    let zagora = [30.330556, -5.838056];
    let marrakech = [31.630000, -8.008889];

    let start = [47.2233615, -1.5637241];
    let end = [47.17185449999999, -1.5731352];
    let lineOption = { color: 'lime' };
    let desertLine = { color: 'red', dashArray: '20, 20', dashOffset: '0'};
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
                    <Polyline pathOptions={lineOption} positions={NantesToBiarritz} />
                    <Polyline pathOptions={lineOption} positions={BiarritzToGibraltar} />
                    <Polyline pathOptions={desertLine} positions={TangerToMidelt} />
                    <Polyline pathOptions={desertLine} positions={MideltToMerzouga} />
                    <Polyline pathOptions={desertLine} positions={MerzougaToZagora} />
                    <Polyline pathOptions={desertLine} positions={ZagoraToMarrakech} />
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
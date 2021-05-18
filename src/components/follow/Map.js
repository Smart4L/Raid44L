import React from 'react';
import moment from 'moment';
import Leaflet from 'leaflet';
import L from 'leaflet';
import { Map as MapContainer, Marker, Popup, TileLayer, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

Leaflet.Icon.Default.imagePath = '../node_modules/leaflet';

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export const suitcasePoint = new L.Icon({
    iconUrl: require('../../assets/img/4l-blue-map.png'),
    iconRetinaUrl: require('../../assets/img/4l-blue-map.png'),
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
    iconSize: [40, 40],
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    shadowSize: [29, 40],
    shadowAnchor: [7, 40],
})

export default class Map extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            now :  moment(),
            zoom: 13,
            carPosition: {
                lat: 47.218371,
                lng: -1.553621,
            },
            mapPosition:{
                lat: 47.218371,
                lng: -1.553621,
            },
            isCenter: true,
            vehiclePath: [
                { lat: 47.2233615, lng: -1.5637241 }
            ],
            index: 0,
            tab:[
                { lat: 47.2233615, lng: -1.5637241 },
                { lat: 47.2245026, lng: -1.5657757 },
                { lat: 47.2245026, lng: -1.5657757 },
                { lat: 47.22528699999999, lng: -1.5669614 },
                { lat: 47.22528699999999, lng: -1.5669614 },
                { lat: 47.2274979, lng: -1.5698755 },
                { lat: 47.2274979, lng: -1.5698755 },
                { lat: 47.22953889999999, lng: -1.5723043 },
                { lat: 47.22953889999999, lng: -1.5723043 },
                { lat: 47.2224995, lng: -1.5853759 },
                { lat: 47.2224995, lng: -1.5853759 },
                { lat: 47.2241069, lng: -1.588684 },
                { lat: 47.2241069, lng: -1.588684 },
                { lat: 47.2220019, lng: -1.5919246 },
                { lat: 47.2220019, lng: -1.5919246 },
                { lat: 47.2227345, lng: -1.5991413 },
                { lat: 47.2227345, lng: -1.5991413 },
                { lat: 47.2213746, lng: -1.6025811 },
                { lat: 47.2213746, lng: -1.6025811 },
                { lat: 47.2182486, lng: -1.603972 },
                { lat: 47.2182486, lng: -1.603972 },
                { lat: 47.2172787, lng: -1.612122 },
                { lat: 47.2172787, lng: -1.612122 },
                { lat: 47.21977529999999, lng: -1.6237367 },
                { lat: 47.21977529999999, lng: -1.6237367 },
                { lat: 47.2161304, lng: -1.6253342 },
                { lat: 47.2161304, lng: -1.6253342 },
                { lat: 47.1700812, lng: -1.5839666 },
                { lat: 47.1700812, lng: -1.5839666 },
                { lat: 47.168927, lng: -1.5798577 },
                { lat: 47.168927, lng: -1.5798577 },
                { lat: 47.17185449999999, lng: -1.5731352 }
              ]
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ now: moment() }), 1000);
        //this.changePos = setInterval(() => this.updateCar(this.state.tab[Math.floor(this.state.tab.length * Math.random())]), 1500);
        this.changePos = setInterval(() => this.updateCar(this.state.tab[this.state.index]), 200);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
        clearInterval(this.changePos);
    }

    updateCar = (newPosition) => {
        let index = this.state.index
        index++
        if(index >= this.state.tab.length){
            index = this.state.tab.length -1
        }
        this.setState({ 
            carPosition: newPosition,
            vehiclePath: [
                ...this.state.vehiclePath,
                newPosition
            ],
            index
        })
        if(this.state.isCenter){
            this.setState({ 
                mapPosition: newPosition
            })
        }
    }

    /**
     * 
     * @param {L.LatLng} obj Object you want to get the position
     * @return {[]} Object position in array
     */
    getPosition = (obj) => {
        try{
            return [obj.lat, obj.lng];
        }
        catch(e){
            console.error(e.message);
            throw new Error(e.message);
        }
    }

    onMoveEvent = () => {
        console.log('move')
        if(this.state.isCenter){
            this.setState({
                isCenter: false
            })
        }
    }

    recenter = () => {
        let newPosition = {}
        newPosition.lat = this.state.mapPosition.lat - 0.0000001
        newPosition.lng = this.state.mapPosition.lng - 0.0000001
        console.log(newPosition)
        this.setState({
            isCenter: true,
            mapPosition: newPosition
        })
    }

    render(){
        let nantes = [47.218371,-1.553621];
        let start = [47.2233615, -1.5637241];
        let end = [47.17185449999999, -1.5731352];
        let lineOption = { color: 'lime' };
        return(
            <div className="map_container">
                <div className="leaflet-container">
                    <MapContainer center={this.getPosition(this.state.mapPosition)} zoom={this.state.zoom}
                        onmouseup={this.onMoveEvent}
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
                        <Marker position={start}>
                            <Popup>
                                Nantes <br/> Une belle ville 
                            </Popup>
                        </Marker>
                        <Marker position={end}>
                            <Popup>
                                Nantes <br/> Une belle ville 
                            </Popup>
                        </Marker>
                        <Marker position={this.getPosition(this.state.carPosition)} icon={suitcasePoint}>
                            <Popup>
                                L'équipage 404L
                            </Popup>
                        </Marker>
                        <Polyline pathOptions={lineOption} positions={this.state.vehiclePath} />
                    </MapContainer>
                </div>
                <div className={`bottom ${this.state.isCenter ? '' : 'show'}`} onClick={this.recenter}>
                    <span className="content">
                        Recentrer
                    </span>
                </div>
            </div>
        )
    }
}
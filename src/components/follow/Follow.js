import React, { useState, useEffect, useRef } from 'react'
import { Map } from './Map'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import moment from 'moment';
import localization from 'moment/locale/fr';
import env from "react-dotenv";

import "../../assets/css/Follow.css";


moment.updateLocale('fr', localization);

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    zoomPlugin
);

const zoomOptions = {
    pan: {
      enabled: true,
      mode: 'x',
    },
    zoom: {
        wheel: {
            enabled: true,
        },
        pinch: {
            enabled: true
        },
        drag: {
            enabled: false
        },
        mode: 'x',
    },
  };

const tempsOptions = {
    responsive: false,
    plugins: {
        zoom: zoomOptions,
        legend: {
        position: 'top',
        },
        title: {
            display: true,
            text: 'Température ambiante',
        }
    },
    scales: {
        y: {
            min: -10,
            max: 60
        }
    }
};

const engineOptions = {
    responsive: false,
    plugins: {
        zoom: zoomOptions,
        legend: {
        position: 'top',
        },
        title: {
            display: true,
            text: 'Température moteur',
        }
    },
    scales: {
        y: {
            min: 0,
            max: 110
        }
    }
}

export const Follow = () => {
    useEffect(() => {
        fetchDatas()
    }, [])

    const mapRef = useRef();
    const [lastUpdate, setLastUpdate] = useState(moment())

    const [tempsGraph, setTempsGraph] = useState({
        labels: Array(1).fill(0),
        datasets: [
            {
                label: 'Température Intérieure',
                data: [0, 10, 5],
                borderColor: 'rgb(173, 209, 158)',
                backgroundColor: 'rgba(173, 209, 158, 0.5)',
            },
            {
                label: 'Température Extérieure',
                data: [0, 10, 5],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ]
    })

    const [engineGraph, setEngineGraph] = useState({
        labels: Array(1).fill(0),
        datasets: [
            {
                label: 'Température huile',
                data: [0, 10, 5],
                borderColor: 'rgb(247, 147, 63)',
                backgroundColor: 'rgba(247, 147, 63, 0.5)',
            },
            {
                label: 'Température eau',
                data: [0, 10, 5],
                borderColor: 'rgb(51, 136, 255)',
                backgroundColor: 'rgba(51, 136, 255, 0.5)',
            }
        ]
    })

    const updateTempsGraph = (int, ext) => {
        let newLabels = int.map(el => moment(el.date).format('D/MM/YYYY HH:MM'))
        let newTempsData = {
            labels: newLabels,
            datasets: [
                {
                    label: 'Température Intérieure',
                    data: int.map(el => el.value.temperature),
                    borderColor: 'rgb(173, 209, 158)',
                    backgroundColor: 'rgba(173, 209, 158, 0.5)',
                },
                {
                    label: 'Température Extérieure',
                    data: ext.map(el => el.value.temperature),
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                }
            ]
        }
        setTempsGraph(newTempsData)
    }
    
    const updateEngineGraph = (water, oil) => {
        let newTempsData = {
            labels: water.map(el => moment(el.createdAt).format('D/MM/YYYY HH:MM')),
            datasets: [
                {
                    label: 'Température huile',
                    data: oil.map(el => el.value.temperature),
                    borderColor: 'rgb(247, 147, 63)',
                    backgroundColor: 'rgba(247, 147, 63, 0.5)',
                },
                {
                    label: 'Température eau',
                    data: water.map(el => el.value.temperature),
                    borderColor: 'rgb(51, 136, 255)',
                    backgroundColor: 'rgba(51, 136, 255, 0.5)',
                }
            ]
        }
        setEngineGraph(newTempsData)
    }

    const fetchDatas = async() => {
        try {
            let past = moment().subtract(2, 'days')
            let future = moment().add(1, 'days')

            await axios.get(`https://ycqc4785.directus.app/items/smart4l?filter={"createdAt": {"_between": ["${past.format('YYYY-MM-DD')}", "${future.format('YYYY-MM-DD')}"]}}&sort=createdAt&limit=-1`)
            .then(response =>{
                let APIdata = response.data.data
                let DHT11_25 = APIdata.filter(el => el.name == "DHT11_25")

                let DS18B20_28_ext = APIdata.filter(el => el.name == "DS18B20_RED")

                let DS18B20_28_water = APIdata.filter(el => el.name == "DS18B20_BLACK")

                let DS18B20_28_oil = APIdata.filter(el => el.name == "DS18B20_BLUE")
                
                let SIM7600G_H_GPS = APIdata.filter(el => el.name == "SIM7600G_H_GPS")
                let carPath  = SIM7600G_H_GPS.map(el => {return { lat: el.value.latitude, lng: el.value.longitude } })

                if(DHT11_25.length !=0 && DS18B20_28_ext.length !=0){
                    updateTempsGraph(DHT11_25, DS18B20_28_ext)
                }
                
                if(DS18B20_28_water.length !=0 && DS18B20_28_oil.length !=0){
                    updateEngineGraph(DS18B20_28_water, DS18B20_28_oil)
                    setLastUpdate(moment(DS18B20_28_water.at(-1).createdAt))
                }

                if(carPath.length != 0){
                    mapRef.current.addCarPosition(carPath)
                }
            });
        }
        catch (error) {
        }
        
    }
    return(
        <div>
            <Map ref={mapRef}/>
            <span className='lastUpdate'>Dernière mise à jour: {lastUpdate.format('LLL')} </span>
            <div className='graph'>
                <Line options={tempsOptions} data={tempsGraph} height={400} width={600}/>
                <Line options={engineOptions} data={engineGraph} height={400} width={600}/>
            </div>
        </div>
    )
}
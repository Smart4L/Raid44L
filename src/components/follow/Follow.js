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
      mode: 'xy',
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
        mode: 'xy',
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
            text: 'Température extérieure',
        }
    },
    scales: {
        y: {
            min: 0,
            max: 50
        }
    }
};

const engineOptions = {
    responsive: false,
    plugins: {
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
            max: 100
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

    const updateTempsGraph = (datas) => {
        let newLabels = datas.map(el => moment(el.date).format('LLL'))
        let newData = datas.map(el => el.value.temperature)
        console.log(datas)
        let newTempsData = {
            labels: newLabels,
            datasets: [
                {
                    label: 'Température Extérieure',
                    data: newData,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                }
            ]
        }
        setTempsGraph(newTempsData)
    }
    
    const updateEngineGraph = (water, oil) => {
        let newTempsData = {
            labels: oil.map(el => moment(el.createdAt).format('LLL')),
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
            await axios.get('https://4lapi.methaverse.fr/api/smart4ls', { headers: {"Authorization" : `Bearer ${env.API_TOKEN}`}})
            .then(response =>{
                let DHT11_25 = response.data.filter(el => el.name == "DHT11_25")
                let temps = DHT11_25.map(el => {el.value = JSON.parse(el.value); return el})
                console.log(temps)
                let DS18B20_28_water = response.data.filter(el => el.name == "DS18B20_28-01193a2abb07")
                let water = DS18B20_28_water.map(el => {el.value = JSON.parse(el.value); return el})
                let DS18B20_28_oil = response.data.filter(el => el.name == "DS18B20_28-01193a459cac")
                let oil = DS18B20_28_oil.map(el => {el.value = JSON.parse(el.value); return el})
                
                let SIM7600G_H_GPS = response.data.filter(el => el.name == "SIM7600G_H_GPS")
                let gps  = SIM7600G_H_GPS.map(el => JSON.parse(el.value))
                let carPath  = gps.map(el => {return { lat: el.latitude, lng: el.longitude } })

                updateTempsGraph(temps)
                updateEngineGraph(water, oil)
                setLastUpdate(moment(water.at(-1).createdAt))
                mapRef.current.addCarPosition(carPath)
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
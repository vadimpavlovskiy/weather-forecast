import React, {useEffect, useState} from "react";
import { ForecastCurrent } from "../forecast_current/forecast-current.component";
import { ForecastDaily } from "../forecast_daily/forecast-daily.component";
import './css/forecast.styles.css';

const Forecast = props => {
    const [searchCoord, setSearchCoord] = useState();
    const [searchCity, setSearchCity] = useState(); 
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        getCurrentWeather()   
    },  [props.location])

    useEffect(() => {
        getSearchForecast();
    }, [searchCoord])

    const getSearchWeather = async (event)  => {
        event.preventDefault();
            await (fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=${props.api}`)
            .then(response => {response.json().then(data => setSearchCoord(data.coord, () => {}))}))
    }
    const getSearchForecast = async () => {
        await (fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${searchCoord.lat}&lon=${searchCoord.lon}&units=metric&exclude=minutely,hourly,alerts&appid=${props.api}`)
        .then(response => {response.json().then(data => setForecast(data))}))
    }
    const getCurrentWeather = async () => {
             await (fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${props.location.latitude}&lon=${props.location.longitude}&units=metric&appid=${props.api}`)
            .then((response) => {setTimeout(response.json().then(data => setForecast(data)),1000)})); 
    }
    const getDailyWeather = async () => {
        await (fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.location.latitude}&lon=${props.location.longitude}&exclude=minutely,hourly,alerts&units=metric&appid=${props.api}`)
        .then((response)=> {setTimeout(response.json().then(data => setForecast(data)),1000)}))
    }
    return (
       <div >
           <div className="forecast_flex">
                <button onClick={getCurrentWeather}>Current Weather</button>
                <button onClick={getDailyWeather}>Daily Weather</button>
            <form onSubmit={getSearchWeather}>
                <input className="input" type="text" value={searchCity} placeholder="Weather in your city" onChange={(e)=>setSearchCity(e.target.value)}/>
                <input className="send" type="submit"/>
            </form>
            </div>
            <ForecastCurrent weather={forecast}/>
            <ForecastDaily weather={forecast} />
        </div>
    )
}

export default Forecast;
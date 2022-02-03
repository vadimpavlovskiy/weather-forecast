import React, {useEffect, useState} from "react";
import { ForecastCurrent } from "../forecast_current/forecast-current.component";
import { ForecastDaily } from "../forecast_daily/forecast-daily.component";
import { ForecastSearch } from "../forecast_search/forecast_search.component";
import './css/forecast.styles.css';

const Forecast = props => {
    const [searchCoord, setSearchCoord] = useState();
    const [searchCity, setSearchCity] = useState(); 
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        getCurrentWeather()   
    },  [props.location])

    const getSearchWeather = async (event)  => {
        event.preventDefault();
            await (fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=${props.api}`)
            .then(response => {setTimeout(response.json().then(data => setSearchCoord(data.coord)),1000)}))
            await (fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${searchCoord.lat}&lon=${searchCoord.lon}&units=metric&exclude=minutely,hourly,alerts&appid=${props.api}`)
            .then(response => {setTimeout(response.json().then(data => setForecast(data)),1000)}));
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
                <button onClick={getDailyWeather}>Daily weather button</button>
            <form onSubmit={getSearchWeather}>
                <input type="text" value={searchCity} placeholder="Weather in your city" onChange={(e)=>setSearchCity(e.target.value)}/>
                <input type="submit"/>
            </form>
            </div>
            <ForecastCurrent weather={forecast}/>
            <ForecastDaily weather={forecast} />
        </div>
    )
}

export default Forecast;
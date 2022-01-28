import React, {useEffect, useState} from "react";
import { ForecastCurrent } from "../forecast_current/forecast-current.component";
import { ForecastDaily } from "../forecast_daily/forecast-daily.component";
import './css/forecast.styles.css';

const Forecast = props => {
    const [forecast, SetForecast] = useState([]);

    useEffect(() => {
        getCurrentWeather()   
    },  [props.location])

    const getCurrentWeather = async () => {
             await (fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${props.location.latitude}&lon=${props.location.longitude}&units=metric&appid=${props.api}`)
            .then((response) => {setTimeout(response.json().then(data => SetForecast(data)),1000)})); 
    }
    const getDailyWeather = async () => {
        await (fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.location.latitude}&lon=${props.location.longitude}&exclude=minutely,hourly,alerts&units=metric&appid=${props.api}`)
        .then((response)=> {setTimeout(response.json().then(data => SetForecast(data)),1000)}))
    }
    return (
       <div >
           <div className="forecast_flex">
                <button onClick={getCurrentWeather}>Current Weather</button>
                <button onClick={getDailyWeather}>Daily weather button</button>
                <button>Month forecast</button>
            </div>
            <ForecastCurrent weather={forecast}/>
            <ForecastDaily weather={forecast} />
        </div>
    )
}

export default Forecast;
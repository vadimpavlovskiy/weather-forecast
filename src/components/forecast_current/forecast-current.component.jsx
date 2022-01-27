import React, { useEffect } from "react";
import './css/forecast_current.styles.css'

export const ForecastCurrent = (props) => {
    useEffect(()=> {
            const screen = document.getElementById('loader');  
            if(props.weather.cod === 200 ){
                // Without 2 setTimout doenst work, solve it later
                setTimeout(() => {
                screen.classList.add('avalible')
                setTimeout(()=> {
                    screen.outerHTML = ''    
                },1000)
              },1000)
            }
    })

    return (
    <div >
        {(typeof props.weather.main != "undefined") ? (
            <div className="forecast">
                <div>Your city: <span>{props.weather.name}</span></div>
                <div>Temperature: <span>{props.weather.main.temp} °C</span></div>
                <div>Weather: <span>{props.weather.weather[0].main}</span></div>
            </div>
    ) : ('')}
    </div>
    )          
}
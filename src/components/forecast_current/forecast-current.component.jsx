import React, { useEffect } from "react";
import './css/forecast_current.styles.css'

export const ForecastCurrent = (props) => {
    useEffect(()=> {
            const screen = document.getElementById('loader');  
            if(props.weather.cod === 200 ){
                // Without 2 setTimout doenst work, solve it later
                setTimeout(() => {
                screen.classList.add('avalible')
              },1000)
            }
    })
    return (
    <div className="forecast">
        {(typeof props.weather.main != "undefined") ? (
            <div>
                <div className="current_card">
                    <div className="current_info">
                       <p> Your city: <span>{props.weather.name}</span> </p>
                       <p> Weather: <span>{props.weather.weather[0].main}</span> </p>
                       <p> Temperature: <span>{Math.round(props.weather.main.temp)} °C</span> </p>
                        </div>
                    <div className="current_img">
                        <img src={`http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`} alt="" />
                    </div>
                </div>
            </div>
    ) : ('')}
    </div>
    )          
}
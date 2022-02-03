import React from "react";
import './css/forecast-daily-card.styles.css'

export const ForecastDailyCard = props => 
    (
    <div className="forecast_card">
        <div className="forecast_date">
            <div className="forecast_day">
                <span>
                    {props.month[(new Date(props.time * 1000).getMonth())]} {[(new Date(props.time * 1000).getDate())]},
                    {props.days[(new Date(props.time * 1000).getDay())]}
                </span>
            </div>
        </div>
        <hr />
        <div className="forecast_icon">
            <img src ={`http://openweathermap.org/img/wn/${props.detail[0].icon}@2x.png`} alt={`${props.detail[0].desc}`} />
        </div>
        <div className="forecast_temp_desc">
            <p>Morning:</p>
            <p>Day:</p>
            <p>Night:</p>
        </div>
        <div className="forecast_temp">
            <p> {Math.round(props.temperature.morn) } °C</p>
            <p> {Math.round(props.temperature.day) } °C</p>
            <p> {Math.round(props.temperature.night) } °C</p>
        </div>    
    </div>
)
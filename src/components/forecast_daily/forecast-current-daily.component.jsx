import React from "react"

export const ForecastCurrentDaily = (props) => (
        <div className="forecast_card_now">
        <div className="forecast_date_now">
            <div className="forecast_day">
                <span>Current weather</span>
            </div>
            
        </div>
        <div className="forecast_icon_now">
            <img src ={`http://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`} alt={`${props.weather.weather[0].desc}`} />
        </div>
        <div className="forecast_temp_now">
            <p>Temperature now: {props.weather.temp} °C</p>
        </div>    
    </div>
)
import React,{useState} from "react";
import './css/forecast-daily.styles.css'
import { ForecastDailyCard } from "./forecast-daily-card.component";

export const ForecastDaily = props => {
    const weekday = ["Monday","Sunday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
    return (<div className="forecast_daily">
        {(typeof props.weather.daily != "undefined") ? (
            props.weather.daily.map((item,index) => (
                <ForecastDailyCard key={index} days={weekday} month={month} temperature ={item.temp} detail = {item.weather} time={item.dt}/>
            ))
        ) : ('')}

    </div>
    )
}
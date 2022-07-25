import React from "react";
import './index.css'
import arrow from '../../icons/right-arrow-svgrepo-com.svg'
import { Compas } from "../Compas";

export const Border = ({cityName, currentTemperature, weatherProps, currentIcon, tempMax,
    tempMin, degWind}) => {
    console.log(cityName, currentTemperature, weatherProps, currentIcon, tempMax,
        tempMin, degWind);

    return (
        <div>  
            <div className={`border ${weatherProps}`}>
                <div className="up">
                    <div>
                        <div className="cityName">{cityName}</div>
                        <div className="currentTemperature">{currentTemperature}</div>
                    </div>
                    <div className="container-items">
                        <img className="currentIcon" src={`http://openweathermap.org/img/w/${currentIcon}.png`}></img>
                        <div className="container-arrow-icon">
                            <div className="currentWeather">
                                {weatherProps}
                            </div>
                            <img className="arrow-icon-up" src={arrow}/> {tempMax}
                            <img className="arrow-icon-down" src={arrow}/> {tempMin}
                        </div>
                    </div>
                </div>
                        <div>
                            <Compas degWind={degWind}/>
                        </div>
            </div>
        </div>
    );
}
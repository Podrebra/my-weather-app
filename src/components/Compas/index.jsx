import React from "react";
import index from './index.css'
import arrow from '../../icons/right-arrow-svgrepo-com.svg'


export const Compas = ({degWind}) => {
    console.log(degWind);


    return (
        <div className="conatainer">
            <div className="north">С</div>
            <div className="west">В</div>
            <div className="south">Ю</div>
            <div className="east">З</div>
            <img style={{transform:`rotate(${-90 - degWind}deg)`}}  className="weatherArrow" src={arrow}/>
        </div>
    );
}
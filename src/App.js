import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Border } from './components/Border';
import {getWeather} from './API/getWeather'
import { Loading } from './components/Loading/Loading';

function App() {
  const [weather, setWeather] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect (() => {
    
    setIsLoading (true)
    navigator.geolocation.getCurrentPosition(function(position) {
      const {latitude, longitude} = position.coords;
     getWeather (latitude, longitude).then(result => {
      setWeather(result)
      
      const changeWeatherMain =  () => {
        console.log(result.weather[0].main);
        const weatherProps = result.weather[0].main;
      }
      changeWeatherMain()
      
      setIsLoading (false)
    })
    });
    
  }, []);

  console.log(weather);

  return (
    <div>
      { isLoading ?
      (<Loading/>):
      (<Border 
        weatherProps = {weather.weather[0].main}
        cityName = {weather.name}
        currentTemperature = {weather.main.temp}
        currentIcon = {weather.weather[0].icon}
        tempMax = {weather.main.temp_max}
        tempMin = {weather.main.temp_min}
        degWind = {weather.wind.deg}
        />)
    }

    </div>
    
  );
}

export default App;

import React, { useState } from 'react';
import './App.css'
import {fetch} from './api/fetch';

const App = () => {

   
    const [ query, setQuery] = useState('')
    const [ weather, setWeather] = useState('')

    
    
    const search =  async (e) => {
        if(e.key === 'Enter'){
            const data = await fetch(query)
            setWeather(data)
            setQuery('')
        }
    }
    return(
            <div className="main-container">
            <h2 className="header">Weather App</h2>
            <input 
                type="text"
                className="search"
                placeholder="Search ..."
                value={query}
                onChange={(e)=> setQuery(e.target.value)}
                onKeyPress={search}
            />
            {
                weather.main ?
                (
                    <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        <span>{Math.round(weather.main.temp)}</span>
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>

                </div>
                )
                 : null
                 
                
            }
        </div>

    )
}

export default App;
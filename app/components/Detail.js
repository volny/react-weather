import React from 'react'
import { convertTemp, getDate, capitalizeWords } from '../utils/utils'
import { cityHeader, dayContainer, detailWeatherIcon, forecastSubheader } from '../styles'

export default function ({city, timestamp, APIObj}) {
  return (
    <div>
      <h1 style={cityHeader}>{city} on {getDate(timestamp)}</h1>
      <div style={dayContainer}>
        <img src={'./app/images/weather-icons/' + APIObj.weather[0].icon + '.svg'} alt="Icon" style={detailWeatherIcon}/>
        <h2 style={forecastSubheader}>{capitalizeWords(APIObj.weather[0].description)}</h2>
        <h2 style={forecastSubheader}>Minimum: {convertTemp(APIObj.temp.min)}&#176;</h2>
        <h2 style={forecastSubheader}>Maximum: {convertTemp(APIObj.temp.max)}&#176;</h2>
        <h2 style={forecastSubheader}>Humidity: {APIObj.humidity}&#37;</h2>
      </div>

    </div>
  )
}

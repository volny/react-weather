import React from 'react'
import { convertTemp, getDate, capitalizeWords } from '../utils/utils'
import { cityHeader, dayContainer, detailWeatherIcon, forecastSubheader } from '../styles'

export default function (props) {
  return (
    <div>
      <h1 style={cityHeader}>{props.city} on {getDate(props.timestamp)}</h1>
      <div style={dayContainer}>
        <img src={'./app/images/weather-icons/' + props.APIObj.weather[0].icon + '.svg'} alt="Icon" style={detailWeatherIcon}/>
        <h2 style={forecastSubheader}>{capitalizeWords(props.APIObj.weather[0].description)}</h2>
        <h2 style={forecastSubheader}>Minimum: {convertTemp(props.APIObj.temp.min)}&#176;</h2>
        <h2 style={forecastSubheader}>Maximum: {convertTemp(props.APIObj.temp.max)}&#176;</h2>
        <h2 style={forecastSubheader}>Humidity: {props.APIObj.humidity}&#37;</h2>
      </div>

    </div>
  )
}

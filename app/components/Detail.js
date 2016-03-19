import React, { PropTypes } from 'react'

import '../styles/main.css'
import { convertTemp, getDate, capitalizeWords } from '../utils/utils'

export default function Detail ({city, timestamp, APIObj}) {
  const iconURL = require('../images/weather-icons/' + APIObj.weather[0].icon + '.svg')
  return (
    <div className='detailContainer text-center'>
      <h1 className='detailHeader'>{capitalizeWords(city)} on {getDate(timestamp)}</h1>
      <img
        src={iconURL}
        alt="Icon"
        className='detailIcon'/>
      <p className='forecastDetailText'>{capitalizeWords(APIObj.weather[0].description)}</p>
      <p className='forecastDetailText'>Minimum: {convertTemp(APIObj.temp.min)}&#176;</p>
      <p className='forecastDetailText'>Maximum: {convertTemp(APIObj.temp.max)}&#176;</p>
      <p className='forecastDetailText'>Humidity: {APIObj.humidity}&#37;</p>
    </div>
  )
}

Detail.propTypes = {
  city: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  APIObj: PropTypes.object.isRequired
}

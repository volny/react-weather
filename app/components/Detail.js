import React, { PropTypes } from 'react'

import '../styles/main.css'
import { convertTemp, getDate, capitalizeWords } from '../utils/utils'

// TODO the headers should be their own components - they'll be used twice on each Forecast and Detail
export default function Detail ({city, timestamp, APIObj}) {
  const iconURL = require('../images/weather-icons/' + APIObj.weather[0].icon + '.svg')
  return (
        <div className='text-center'>
          <div className='col-xs-12 forecastDetailHeaderContainer'>
            <h1 className='forecastDetailHeader text-center'>{capitalizeWords(city)} on {getDate(timestamp)}</h1>
          </div>

          <div className='dayDetailContainer text-center'>
            <img
              src={iconURL}
              alt="Icon"
              className='detailIcon'/>
            <p className='forecastDetailText'>{capitalizeWords(APIObj.weather[0].description)}</p>
            <p className='forecastDetailText'>Minimum: {convertTemp(APIObj.temp.min)}&#176;</p>
            <p className='forecastDetailText'>Maximum: {convertTemp(APIObj.temp.max)}&#176;</p>
            <p className='forecastDetailText'>Humidity: {APIObj.humidity}&#37;</p>
          </div>
        </div>
  )
}

Detail.propTypes = {
  city: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  APIObj: PropTypes.object.isRequired
}

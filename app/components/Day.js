import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import '../styles/main.css'
import { convertTemp, getDate } from '../utils/utils'

export default function Day ({APIObj, city, timestamp}) {
  const iconURL = require('../images/weather-icons/' + APIObj.weather[0].icon + '.svg')
  return (
    <div className='dayContainer row'>
      <div className='col-xs-4 text-center'>
        <span className='forecastDetailText'>{getDate(APIObj.dt)}</span>
      </div>
      <div className='col-xs-2 text-center'>
        <img
          src={iconURL}
          alt="Icon"
          className='forecastIcon'/>
      </div>
      <div className='col-xs-2 text-center'>
        <span className='forecastDetailText'>
          {convertTemp(APIObj.temp.day)}&#176;
        </span>
      </div>
      <div className='col-xs-4 text-center'>
        <Link to={{
          pathname: encodeURIComponent(city) + '/' + encodeURIComponent(timestamp),
          state: { APIObj: APIObj } }}>
            <button
              type='button'
              className='btn btn-lg forecastButton'>
                Show details
            </button>
        </Link>
      </div>
    </div>
  )
}

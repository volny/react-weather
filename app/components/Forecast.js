import React, { PropTypes } from 'react'
import { forecastContainer, dayContainer, forecastHeader, forecastSubheader, forecastWeatherIcon, detailButton } from '../styles'
import { convertTemp, getDate } from '../utils/utils'
import { Link } from 'react-router'

function Day ({APIObj, city, timestamp}) {
  return (
    <div style={dayContainer}>
      <h2 style={forecastSubheader}>{getDate(APIObj.dt)}</h2>
      <img src={'./app/images/weather-icons/' + APIObj.weather[0].icon + '.svg'} alt="Icon" style={forecastWeatherIcon}/>
      <h2 style={forecastSubheader}>{convertTemp(APIObj.temp.day)}&#176;</h2>
      <Link to={{
        pathname: encodeURIComponent(city) + '/' + encodeURIComponent(timestamp),
        state: { APIObj: APIObj } }}>
          <button
            type='button'
            className='btn btn-lg'
            style={detailButton}>
              Show details
          </button>
      </Link>
    </div>
  )
}

export default function Forecast ({isLoading, city, forecastData}) {
  return (
    isLoading === true
      ? <div>Loading</div>
      : <div>
          <h1 style={forecastHeader}>{city}</h1>
            <div style={forecastContainer}>
              {
                forecastData.map(function(obj) {
                  return (
                    <Day
                      key={obj.dt}
                      APIObj={obj}
                      city={city}
                      timestamp={obj.dt}/>
                  )
                })
              }
            </div>
        </div>
  )
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array.isRequired
}

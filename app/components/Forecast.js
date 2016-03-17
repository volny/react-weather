import React from 'react'
import { forecastContainer, dayContainer, forecastHeader, forecastSubheader, forecastWeatherIcon, detailButton } from '../styles'
import { convertTemp, getDate } from '../utils/utils'
import { Link } from 'react-router'

function Day (props) {
  return (
    <div style={dayContainer}>
      <h2 style={forecastSubheader}>{getDate(props.APIObj.dt)}</h2>
      <img src={'./app/images/weather-icons/' + props.APIObj.weather[0].icon + '.svg'} alt="Icon" style={forecastWeatherIcon}/>
      <h2 style={forecastSubheader}>{convertTemp(props.APIObj.temp.day)}&#176;</h2>
      <Link to={{
        pathname: encodeURIComponent(props.city) + '/' + encodeURIComponent(props.timestamp),
        state: { APIObj: props.APIObj } }}>
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

export default function (props) {
  return (
    props.isLoading === true
      ? <div>Loading</div>
      : <div>
          <h1 style={forecastHeader}>{props.city}</h1>
            <div style={forecastContainer}>
              {
                props.forecastData.map(function(obj) {
                  return (
                    <Day
                      key={obj.dt}
                      APIObj={obj}
                      city={props.city}
                      timestamp={obj.dt}/>
                  )
                })
              }
            </div>
        </div>
  )
}

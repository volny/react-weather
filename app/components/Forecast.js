import React from 'react'
import { forecastContainer, dayContainer, forecastHeader, forecastSubheader, weatherIcon, detailButton } from '../styles'
import { convertTemp, getDate } from '../utils/utils'
import { Link } from 'react-router'

function Day (props) {
  var icon = props.APIObj.weather[0].icon;
  var date = getDate(props.APIObj.dt);
  var detailRoute = '/' + encodeURIComponent(props.city) + '/' + encodeURIComponent(props.timestamp)
  return (
    <div style={dayContainer}>
      <h2 style={forecastSubheader}>{date}</h2>
      <img src={'./app/images/weather-icons/' + icon + '.svg'} alt="Icon" style={weatherIcon}/>
      <h2 style={forecastSubheader}>{convertTemp(props.APIObj.temp.day)}&#176;</h2>
      <Link to={detailRoute}>
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

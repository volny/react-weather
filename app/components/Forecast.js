import React from 'react'
import { forecastContainer, dayContainer, forecastHeader, forecastSubheader, weatherIcon } from '../styles'
import { convertTemp, getDate } from '../utils/utils'

function Day (props) {
  var icon = props.APIObj.weather[0].icon;
  return (
    <div style={dayContainer}>
      <h2 style={forecastSubheader}>Date</h2>
      <img src={'./app/images/weather-icons/' + icon + '.svg'} alt="Icon" style={weatherIcon}/>
      <div>
        <h2 style={forecastSubheader}>{convertTemp(props.APIObj.temp.day)}&#176;</h2>
      </div>
    </div>
  )
}

export default function Forecast (props) {
  return (
    props.isLoading === true
      ? <div>Loading</div>
      : <div>
          <h1 style={forecastHeader}>{props.city}</h1>
            <div style={forecastContainer}>
              {
                props.forecastData.map(function(obj) {
                  return <Day key={obj.dt} APIObj={obj}/>
                })
              }
            </div>
        </div>
  )
}

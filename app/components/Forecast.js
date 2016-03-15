import React from 'react'
import { forecastContainer, dayContainer, forecastHeader, forecastSubheader, weatherIcon, detailButton } from '../styles'
import { convertTemp, getDate } from '../utils/utils'

function Day (props) {
  var icon = props.APIObj.weather[0].icon;
  var date = getDate(props.APIObj.dt);
  return (
    <div style={dayContainer}>
      <h2 style={forecastSubheader}>{date}</h2>
      <img src={'./app/images/weather-icons/' + icon + '.svg'} alt="Icon" style={weatherIcon}/>
      <h2 style={forecastSubheader}>{convertTemp(props.APIObj.temp.day)}&#176;</h2>
      <button
        type='button'
        className='btn btn-lg'
        style={detailButton}
        onClick={props.handleClick}>
          Show details
      </button>
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
                  return <Day
                    key={obj.dt}
                    APIObj={obj}
                    handleClick={props.handleClick.bind(null, obj)}/>
                })
              }
            </div>
        </div>
  )
}

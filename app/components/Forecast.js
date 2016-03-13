import React from 'react'
import { cityHeader } from '../styles'
import { convertTemp, getDate } from '../utils/utils'

function Day (props) {
  //return getDate(props.day) + ': ' + convertTemp(props.temp)
  return <div>{props.weather}</div>
}

export default function Forecast (props) {
  return (
    props.isLoading === true
      ? <div>Loading</div>
      : <div>
          <h1 style={cityHeader}>{props.city}</h1>
            <div>
              {
                // forecastData: array of day objects
                props.forecastData.map(function(obj) {
                  return <Day key={obj.dt} weather={obj.temp.day}/>
                })
              }
            </div>
        </div>
  )
}

import React, { PropTypes } from 'react'

import '../styles/main.css'
import Day from './Day'

export default function Forecast ({isLoading, city, forecastData}) {
  return (
    isLoading === true
      ? <div>Loading</div>
      : <div className='col-xs-10 col-xs-offset-1'>
          <h1 className='forecastHeader text-center'>{city}</h1>
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
  )
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array.isRequired
}

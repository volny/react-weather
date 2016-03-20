import React, { PropTypes } from 'react'

import { capitalizeWords } from '../utils/utils'
import '../styles/main.css'
import Day from './Day'

export default function Forecast ({isLoading, city, forecastData}) {
  return (
    isLoading === true
      ? <div>Loading</div>
      : <div>
          <div className='col-xs-12 forecastDetailHeaderContainer'>
            <h1 className='forecastDetailHeader text-center'>{capitalizeWords(city)}</h1>
          </div>
          <div className='col-xs-10 col-xs-offset-1'>
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

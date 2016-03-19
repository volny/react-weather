import React, { PropTypes } from 'react'
import { Link } from 'react-router'

// TODO I accidentally forgot the css import and it still worked -> wft? (maybe breaks on build)
import '../styles/main.css'
import { convertTemp, getDate } from '../utils/utils'

// TODO take this out to it's own component (might can resuse on Detail)
// TODO idea: separate bootstrap classnames out into styles.js to have all layout in one place
// possibly have `layout.js` and `styling.css` for separation
function Day ({APIObj, city, timestamp}) {
  const iconURL = require('../images/weather-icons/' + APIObj.weather[0].icon + '.svg')
  return (
    <div className='row'>
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

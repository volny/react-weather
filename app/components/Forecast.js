import React, { PropTypes } from 'react'

import { capitalizeWords } from '../utils/utils'
import '../styles/main.css'
import DayRows from './DayRows'
import Header from './Header'

export default function Forecast ({isLoading, city, forecastData}) {
  const dayHeader = 'Today in Berlin'
  const weekHeader = 'Next week in ' + capitalizeWords(city)
  return (
    isLoading === true
      ? <div>Loading</div>
      : <div>
          <Header
            headerText={dayHeader}/>



          <Header
            headerText={weekHeader}/>
          <DayRows
            forecastData={forecastData}
            city={city}/>
        </div>
  )
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array.isRequired
}

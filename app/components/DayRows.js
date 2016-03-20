import React, { PropTypes } from 'react'

import '../styles/main.css'
import DayRow from './DayRow'

export default function DayRows ({forecastData, city}) {
  return (
    <div className='col-xs-10 col-xs-offset-1'>
      {
        forecastData.map(function(obj) {
          return (
            <DayRow
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

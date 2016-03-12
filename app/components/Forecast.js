import React from 'react'
//import { homeContainer, subheader } from '../styles'

export default function Home (props) {
  return (
    props.isLoading === true
      ? <div>Loading</div>
      : <div>
          <div>
            <div>Forecast:</div>
            <div>
              {
                props.forecastData.map(function(obj) {
                  return 'Day: ' + Math.floor(obj.temp.day - 273.15) + ', '
                })
              }
            </div>
            <div>
              in {props.city}
            </div>
          </div>
        </div>
  )
}

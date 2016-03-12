import React from 'react'
//import { homeContainer, subheader } from '../styles'

export default function Home (props) {
  return (
    props.isLoading === true
      ? <div>Loading</div>
      : <div>
          <div>
            Temperature: {props.currentWeatherData.main.temp} in {props.city}
          </div>
        </div>
  )
}

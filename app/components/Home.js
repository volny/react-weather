import React from 'react'

import { pattern } from '../styles'
import '../styles/main.css'

import GetCityContainer from '../containers/GetCityContainer'

export default function () {
  return (
    <div className='homeContainer' style={pattern}>
      <h2 className='homeHeader'>Select a city</h2>
      <GetCityContainer />
    </div>
  )
}

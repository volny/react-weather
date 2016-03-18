import React from 'react'
import { homeContainer, subheader } from '../styles'
import GetCityContainer from '../containers/GetCityContainer'

export default function () {
  return (
    <div style={homeContainer}>
      <h2 style={subheader}>Select a city</h2>
      <GetCityContainer />
    </div>
  )
}

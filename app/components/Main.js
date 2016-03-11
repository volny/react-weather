import React from 'react'
import { header } from '../styles'
import GetCityContainer from '../containers/GetCityContainer'

export default function Home (props) {
  return (
    <div style={header}>
      <h1>Main Header</h1>
      <GetCityContainer />
    </div>
  )
}


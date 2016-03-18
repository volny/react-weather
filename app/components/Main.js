import React from 'react'
import { header } from '../styles'
import GetCityContainer from '../containers/GetCityContainer'

export default function () {
  return (
    <div className='col-sm-4 col-sm-offset-4' style={header}>
      <GetCityContainer />
    </div>
  )
}

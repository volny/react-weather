import React from 'react'

import '../styles/main.css'
import GetCityContainer from '../containers/GetCityContainer'

export default function () {
  return (
    <div className='homeContainer text-center'>
      <h2 className='homeHeader'>Select a city</h2>
      <div className='col-xs-10 col-xs-offset-1'>
        <GetCityContainer />
      </div>
    </div>
  )
}

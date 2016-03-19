import React from 'react'

import '../styles/main.css'
import GetCityContainer from '../containers/GetCityContainer'

export default function Nav ({children}) {
  return (
    <div>
      <div className='nav col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-4'>
        <GetCityContainer />
      </div>
      { children }
    </div>
  )
}

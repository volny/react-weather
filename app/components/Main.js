import React from 'react'

import '../styles/main.css'
import GetCityContainer from '../containers/GetCityContainer'

export default function ({children}) {
  return (
    <div className='mainNavbar'>
      <GetCityContainer />
      { children }
    </div>
  )
}

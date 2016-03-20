import React from 'react'

import '../styles/main.css'

export default function Header ({headerText}) {
  return (
    <div className='col-xs-12 forecastDetailHeaderContainer'>
      <h1 className='forecastDetailHeader text-center'>{headerText}</h1>
    </div>
  )
}


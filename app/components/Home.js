import React from 'react'

import '../styles/main.css'
import InputContainer from '../containers/InputContainer'

export default function () {
  return (
    <div>
      <div className='homeMainHeaderContainer col-xs-12 text-center'>
        <h1 className='homeMainHeader'>Home Main Header</h1>
      </div>
      <div className='homeInputContainer text-center'>
        <h2 className='homeInputHeader'>Select a city</h2>
        <div className='col-xs-10 col-xs-offset-1'>
          <InputContainer />
        </div>
      </div>
      <div className='homeCreditsContainer'>
        <span>GH </span>
        <span>TW </span>
        <span>LK</span>
      </div>
    </div>
  )
}

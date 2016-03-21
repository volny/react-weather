import React from 'react'
import FontAwesome from 'react-fontawesome'

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
        <a href="https://github.com/volny">
          <FontAwesome name='github' size='2x' className='homeCreditsIcon'/>
        </a>
        <a href="https://twitter.com/volnyio">
          <FontAwesome name='twitter' size='2x' className='homeCreditsIcon'/>
        </a>
        <a href="https://www.linkedin.com/in/felixvolny">
          <FontAwesome name='linkedin' size='2x' className='homeCreditsIcon'/>
        </a>
      </div>
    </div>
  )
}

import React from 'react'

import '../styles/main.css'
import InputContainer from '../containers/InputContainer'

export default function () {
  return (
    <div className='homeContainer text-center'>
      <h2 className='homeHeader'>Select a city</h2>
      <div className='col-xs-10 col-xs-offset-1'>
        <InputContainer />
      </div>
    </div>
  )
}

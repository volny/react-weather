import React from 'react'

import '../styles/main.css'
import InputContainer from '../containers/InputContainer'

export default function Nav ({children}) {
  return (
    <div>
      <div className='nav col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-4'>
        <InputContainer />
      </div>
      { children }
    </div>
  )
}

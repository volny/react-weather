import React from 'react'

import { pattern } from '../styles'
import '../styles/main.css'

export default function ({children}) {
  return (
    <div className='main'>
      {children}
    </div>
  )
}


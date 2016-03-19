import React from 'react'

import { pattern } from '../styles'
import '../styles/main.css'

export default function ({children}) {
  return (
    <div className='main' style={pattern}>
      {children}
    </div>
  )
}


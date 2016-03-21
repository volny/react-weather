import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'

import '../styles/main.css'

export default function Input ({onUpdateCity, onEnterSubmit}) {
  return (
    <div className='inputContainer'>
      <FontAwesome name='search' className='inputSearchIcon'/>
      <input
        className='form-control inputField'
        placeholder= 'City'
        type='text'
        onChange={onUpdateCity}
        onKeyDown={onEnterSubmit}/>
    </div>
  )
}

Input.propTypes = {
  onUpdateCity: PropTypes.func.isRequired,
  onEnterSubmit: PropTypes.func.isRequired
}

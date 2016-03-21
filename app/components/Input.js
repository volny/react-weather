import React, { PropTypes } from 'react'

import '../styles/main.css'

export default function Input ({onUpdateCity, onEnterSubmit}) {
  return (
    <div>
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

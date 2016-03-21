import React, { PropTypes } from 'react'

export default function Input ({onUpdateCity, onEnterSubmit}) {
  return (
    <div>
      <input
        className='form-control'
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

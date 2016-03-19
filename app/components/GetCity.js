import React, { PropTypes } from 'react'

export default function GetCity ({onUpdateCity, onEnterSubmit}) {
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

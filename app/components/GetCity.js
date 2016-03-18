import React from 'react'
import { homeContainer, subheader } from '../styles'

function CityInput ({onUpdateCity, onEnterSubmit}) {
  return (
    <input
      className='form-control'
      placeholder='City'
      type='text'
      onChange={onUpdateCity}
      onKeyDown={onEnterSubmit}
      />
  )
}

export default function ({onUpdateCity, onEnterSubmit}) {
  return (
    <div>
      <CityInput
        onUpdateCity={onUpdateCity}
        onEnterSubmit={onEnterSubmit}/>
    </div>
  )
}

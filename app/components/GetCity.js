import React from 'react'
import { homeContainer, subheader } from '../styles'

function CityInput (props) {
  return (
    <input
      className='form-control'
      placeholder='City'
      type='text'
      onChange={props.onUpdateCity}
      onKeyDown={props.onEnterSubmit}
      />
  )
}

export default function (props) {
  return (
    <div>
      <CityInput
        onUpdateCity={props.onUpdateCity}
        onEnterSubmit={props.onEnterSubmit}
        city={props.city}/>
    </div>
  )
}

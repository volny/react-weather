import React from 'react'
import { homeContainer, subheader } from '../styles'

function CityInput (props) {
  return (
    <input
      className='form-control'
      placeholder='Vienna (press Enter)'
      type='text'
      onChange={props.onUpdateCity}
      onKeyDown={props.onEnterSubmit}
      />
  )
}

export default function Home (props) {
  return (
    <div>
      <CityInput
        onUpdateCity={props.onUpdateCity}
        onEnterSubmit={props.onEnterSubmit}
        city={props.city}/>
    </div>
  )
}


import React from 'react'
import { homeContainer, subheader } from '../styles'

function Button (props) {
  return (
    <button type='button'
      style={{margin: 10}}
      className='btn btn-success'
      onClick={props.onSubmitCity}>
        {props.children}
    </button>
  )
}

function InputField (props) {
  return (
    <input
      className='form-control'
      placeholder='St. George, Utah'
      type='text'
      onChange={props.onUpdateCity}
      />
  )
}

export default function Home (props) {
  return (
    <div>
      <InputField
      onUpdateCity={props.onUpdateCity}/>
      <Button
      onSubmitCity={props.onSubmitCity}>
          Get Weather
      </Button>
    </div>
  )
}



import React from 'react'
import { convertTemp, getDate } from '../utils/utils'

export default function Detail (props) {
  return (
    <div>
      <p>{props.city} on {getDate(props.timestamp)}</p>
    </div>
  )
}



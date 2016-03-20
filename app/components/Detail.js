import React, { PropTypes } from 'react'

import '../styles/main.css'
import { getDate, capitalizeWords } from '../utils/utils'
import Header from './Header'
import DayDetail from './DayDetail'

export default function Detail ({city, timestamp, APIObj}) {
  const headerText = capitalizeWords(city) + ' on ' + getDate(timestamp)
  return (
        <div className='text-center'>
          <Header
            headerText={headerText}/>

          <DayDetail
            APIObj={APIObj}/>

        </div>
  )
}

Detail.propTypes = {
  city: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  APIObj: PropTypes.object.isRequired
}

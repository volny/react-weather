import React from 'react'
import GetCity from '../components/GetCity'

export default React.createClass({
  handleSubmitCity() {
    console.log('handleSubmitCity');
  },
  handleUpdateCity(e) {
    console.log('handleUpdateCity');
  },
  render() {
    return (
      <GetCity
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
      />
    )
  }
})


import React from 'react'
import GetCity from '../components/GetCity'

export default React.createClass({
  getInitialState() {
    return {
      city: ''
    }
  },
  handleEnterSubmit(e) {
    if (e.keyCode == 13 ) {
      return this.handleSubmitCity(e.target.value);
    }
  },
  handleSubmitCity() {
    console.log('state.city:', this.state.city)
  },
  handleUpdateCity(e) {
    this.setState({
      city: e.target.value
    })
  },
  render() {
    return (
      <GetCity
        onUpdateCity={this.handleUpdateCity}
        onEnterSubmit={this.handleEnterSubmit}
        city={this.state.city}
      />
    )
  }
})


import React from 'react'
import GetCity from '../components/GetCity'
import { currentWeather, forecast } from '../utils/api'
//var getForecast = require('../utils/api').getForecast

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
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
    console.log('state.city:', this.state.city);
    //currentWeather(this.state.city);
    //forecast(this.state.city);
    //window.location.href = '/#/forecast/' + encodeURIComponent(this.state.city)
    this.context.router.push('/forecast/' + encodeURIComponent(this.state.city))

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


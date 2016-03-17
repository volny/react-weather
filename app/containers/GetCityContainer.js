import React from 'react'
import GetCity from '../components/GetCity'
import { currentWeather, forecast } from '../utils/api'

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
      return this.context.router.push('/' + encodeURIComponent(this.state.city))
    }
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

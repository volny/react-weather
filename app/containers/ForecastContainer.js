import React from 'react'
import Forecast from '../components/Forecast'
//import { mainContainer } from '../styles'
import { currentWeather, forecast } from '../utils/api.js'

export default React.createClass({
  getInitialState() {
    return {
      isLoading: true
    }
  },
  componentDidMount() {
    console.log('props.params', this.props.routeParams)
    currentWeather(this.props.routeParams.city)
      .then(function(temperature) {
        this.setState({
          temperature: temperature,
          isLoading: false
        })
      }.bind(this))
  // get data from API
  //  .then(function() {
  //    this.setState({
  //      isLoading: false
  //  })
  //}.bind(this))

  },
  render() {
    return (
      <Forecast
        temperature={this.state.temperature}
        isLoading={this.state.isLoading}
        city={this.props.routeParams.city}/>
    )
  }
})


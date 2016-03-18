import React from 'react'
import Forecast from '../components/Forecast'
import { getCurrentWeather, getForecast } from '../utils/api.js'

export default React.createClass({
  getInitialState() {
    return {
      isLoading: true
    }
  },
  componentDidMount() {
    getForecast(this.props.routeParams.city)
      .then(function(dataObj) {
        console.log(this.props.routeParams.city + ': ', dataObj)
        this.setState({
          forecastData: dataObj,
          isLoading: false
        })
      }.bind(this))
  },
  render() {
    return (
      <Forecast
        forecastData={this.state.forecastData}
        isLoading={this.state.isLoading}
        city={this.props.routeParams.city}/>
    )
  }
})

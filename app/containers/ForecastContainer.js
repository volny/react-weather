import React from 'react'
import Forecast from '../components/Forecast'
//import { mainContainer } from '../styles'
import { getCurrentWeather, getForecast } from '../utils/api.js'

export default React.createClass({
  getInitialState() {
    return {
      isLoading: true
    }
  },
  componentDidMount() {
    console.log('props.params', this.props.routeParams)
    getCurrentWeather(this.props.routeParams.city)
      .then(function(dataObj) {
        console.log('currentWeatherData:', dataObj)
        this.setState({
          currentWeatherData: dataObj,
          isLoading: false
        })
      }.bind(this))
  },
  render() {
    return (
      <Forecast
        currentWeatherData={this.state.currentWeatherData}
        isLoading={this.state.isLoading}
        city={this.props.routeParams.city}/>
    )
  }
})


import React, { Component } from 'react'
import Forecast from '../components/Forecast'
import { getCurrentWeather, getForecast } from '../utils/api.js'

export default class ForecastContainer extends Component {
  constructor() {
    super()
    this.state =  {
      isLoading: true
    }
  }
  async componentDidMount() {
    try {
      const forecastData = await getForecast(this.props.routeParams.city)
      console.log(this.props.routeParams.city + ': ', forecastData)
      this.setState({
        forecastData,
        isLoading: false
      })
    } catch (err) {
      console.warn('Error in ForecastContainer', err)
    }
  }
  render() {
    return (
      <Forecast
        forecastData={this.state.forecastData}
        isLoading={this.state.isLoading}
        city={this.props.routeParams.city}/>
    )
  }
}

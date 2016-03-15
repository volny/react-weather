import React from 'react'
import Forecast from '../components/Forecast'
//import { mainContainer } from '../styles'
import { getCurrentWeather, getForecast } from '../utils/api.js'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {
      isLoading: true
    }
  },
  componentDidMount() {
    console.log('props.params', this.props.routeParams)
    getForecast(this.props.routeParams.city)
      .then(function(dataObj) {
        console.log('data:', dataObj);
        this.setState({
          forecastData: dataObj,
          isLoading: false
        })
      }.bind(this))
  },
  // we use `.bind` to pass in the API data so we can pass it on to Detail
  handleClick() {
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
    })
  },
  render() {
    return (
      <Forecast
        forecastData={this.state.forecastData}
        isLoading={this.state.isLoading}
        city={this.props.routeParams.city}
        handleClick={this.handleClick}/>
    )
  }
})


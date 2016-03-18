import React, { Component } from 'react'
import GetCity from '../components/GetCity'
import { currentWeather, forecast } from '../utils/api'

export default class GetCityContainer extends Component {
  constructor() {
    super()
    this.state =  {
      city: ''
    }
  }
  handleEnterSubmit(e) {
    if (e.keyCode == 13 ) {
      return this.context.router.push('/' + encodeURIComponent(this.state.city))
    }
  }
  handleUpdateCity(e) {
    this.setState({
      city: e.target.value
    })
  }
  render() {
    return (
      <GetCity
        onUpdateCity={(e) => this.handleUpdateCity(e)}
        onEnterSubmit={(e) => this.handleEnterSubmit(e)}
        city={this.state.city}
      />
    )
  }
}

GetCityContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

import React, { Component } from 'react'
import Detail from '../components/Detail'

export default class DetailContainer extends Component {
  render() {
    return (
      <Detail
        city={this.props.routeParams.city}
        timestamp={this.props.routeParams.timestamp}
        APIObj={this.props.location.state.APIObj}/>
    )
  }
}

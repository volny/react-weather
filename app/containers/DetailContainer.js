import React from 'react'
import Detail from '../components/Detail'

export default React.createClass({
  render() {
    return (
      <Detail
        city={this.props.routeParams.city}
        timestamp= {this.props.routeParams.timestamp}/>
    )
  }
})



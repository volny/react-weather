import React from 'react'
import Main from '../components/Main'
import { mainContainer } from '../styles'

export default React.createClass({
  render() {
    return (
      <div style={mainContainer}>
        <Main />
        {this.props.children}
      </div>
    )
  }
})

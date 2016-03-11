import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Main Header</h1>
        {this.props.children}
      </div>
    )
  }
})

import React, { Component } from 'react'
import Input from '../components/Input'

export default class InputContainer extends Component {
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
      <Input
        onUpdateCity={(e) => this.handleUpdateCity(e)}
        onEnterSubmit={(e) => this.handleEnterSubmit(e)}/>
    )
  }
}

InputContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import MainContainer from '../containers/MainContainer'
import HomeContainer from '../containers/HomeContainer'

module.exports = (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={HomeContainer}/>
    </Route>
  </Router>
)


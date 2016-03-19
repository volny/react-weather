import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import Home from '../components/Home'
import Nav from '../components/Nav'
import ForecastContainer from '../containers/ForecastContainer'
import DetailContainer from '../containers/DetailContainer'

export default (
  <Router history={hashHistory}>
    <Route path='/' component={Home}/>
    <Route component={Nav}>
      <Route path='/:city' component={ForecastContainer}/>
      <Route path='/:city/:timestamp' component={DetailContainer}/>
    </Route>
  </Router>
)

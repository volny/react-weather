import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import Main from '../components/Main'
import Home from '../components/Home'
import Nav from '../components/Nav'
import ForecastContainer from '../containers/ForecastContainer'
import DetailContainer from '../containers/DetailContainer'

export default (
  <Router history={hashHistory}>
    <Route component={Main}>
      <Route path='/' component={Home}/>
      <Route component={Nav}>
        <Route path='/:city' component={ForecastContainer}/>
        <Route path='/:city/:timestamp' component={DetailContainer}/>
      </Route>
    </Route>
  </Router>
)

import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import Home from '../components/Home'
import MainContainer from '../containers/MainContainer'
import HomeContainer from '../containers/HomeContainer'
import ForecastContainer from '../containers/ForecastContainer'
import DetailContainer from '../containers/DetailContainer'

export default (
  <Router history={hashHistory}>
    <Route path='/' component={Home}/>
    <Route component={MainContainer}>
      <Route path='/:city' component={ForecastContainer}/>
      <Route path='/:city/:timestamp' component={DetailContainer}/>
    </Route>
  </Router>
)

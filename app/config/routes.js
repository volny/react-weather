import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import Home from '../components/Home'
import MainContainer from '../containers/MainContainer'
import HomeContainer from '../containers/HomeContainer'
import ForecastContainer from '../containers/ForecastContainer'
import DetailContainer from '../containers/DetailContainer'

module.exports = (
  <Router history={hashHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={Home}/>
      <Route path='/forecast/:city' component={ForecastContainer}/>
      <Route path='/detail/:city' component={DetailContainer}/>
    </Route>
  </Router>
)


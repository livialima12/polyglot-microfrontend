import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import ReactChild from '../pages/React'
import AngularChild from '../pages/Angular'

const Routes = () => (
  <BrowserRouter basename="react-main">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/react" component={ReactChild}/>
      <Route exact path="/angular" component={AngularChild}/>
    </Switch>
  </BrowserRouter>
)

export default Routes
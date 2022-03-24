import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar.js'
import News from './component/News.js'
import About from './component/About.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/">
                <News />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    )
  }
}

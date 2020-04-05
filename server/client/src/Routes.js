import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Room from './pages/Room';
import About from './pages/About';

class Routes extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/room/:room/:token">
              <Room/>
            </Route>  
            <Route path="*">
              <About/>
            </Route>
          </Switch>
      </Router>
    );
  }
};
export default Routes;
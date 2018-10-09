import * as React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import VehicleContainer from './containers/VehicleContainer';
import VehicleModelContainer from './containers/VehicleModelContainer';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={VehicleContainer}/>
          <Route exact={true} path="/make/:id/model" component={VehicleModelContainer}/>
        </div>
      </Router>
    );
  }
}

export default App;

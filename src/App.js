import React, {Component} from 'react';
import './index.css';
import { Switch, BrowserRouter, Link, Route } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import JobDetails from './JobDetails';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <NavBar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/jobdetails' component={JobDetails} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
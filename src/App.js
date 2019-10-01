
import React, { Component } from 'react';
import './index.css';
import { Switch, HashRouter, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Jobs from './components/Jobs';
import JobDetails from './components/JobDetails';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <HashRouter>
          <div>
            <NavBar />
            <Switch>
              <Route exact path='/' component={Jobs} />
              <Route path='/jobs/:id' component={JobDetails} />
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
/*
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Jobs from './components/Jobs';


function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <Jobs />
    </div>
  );
}

export default App;
*/
import React, {Component} from 'react';
import './index.css';
import { Switch, HashRouter, Route } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import JobDetails from './JobDetails';

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <NavBar />
            <Switch>
              <Route exact path='/' component={All} />
              <Route exact path='/internships' component={Internships} />
              <Route exact path='/full-time' component={FullTime} />
              <Route exact path='/part-time' component={PartTime} />
              <Route path='/jobs/:id' component={JobDetails} />
            </Switch>
            <Footer />
          </div>
        </HashRouter>
      </div>
    );
  }
}

function All() {
  return (
    <Home filter="none"/>
  );
}

function Internships() {
  return (
    <Home filter="internships"/>
  );
}

function FullTime() {
  return (
    <Home filter="full-time"/>
  );
}

function PartTime() {
  return (
    <Home filter="part-time"/>
  );
}

function Footer() {
  return (
    <div className="footer">Created by The Stanford Daily</div>
  )
}

export default App;
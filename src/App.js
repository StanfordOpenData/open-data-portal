import React, { Component } from 'react';
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
              <Route exact path='/subscribe' component={Subscribe} />
              <Route exact path='/subscribe' component={Subscribe} />
              <Route exact path='/' component={All} />
              <Route exact path='/internships' component={Internships} />
              <Route exact path='/full-time' component={FullTime} />
              <Route exact path='/part-time' component={PartTime} />
              <Route path='/jobs/:id' component={JobDetails} />
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

function Subscribe() {
  return (
    <div className="wrapper">
      <h3>Subscribe to receive updates about new jobs</h3>
      <form action="" method="post">
        <label for="mail">Email:</label>
        <div>
          <input type="email" id="mail" name="student_email"></input>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  )
}

function All() {
  return (
    <div>
      <Home filter="none" />
      <div className="footer">Created by The Stanford Daily</div>
    </div>
  );
}

function Internships() {
  return (
    <Home filter="internships" />
  );
}

function FullTime() {
  return (
    <Home filter="full-time" />
  );
}

function PartTime() {
  return (
    <Home filter="part-time" />
  );
}

export default App;
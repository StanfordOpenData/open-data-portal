import React, { Component } from 'react';
import './index.css';
import { Switch, HashRouter, Route } from "react-router-dom";import { Elements, StripeProvider } from 'react-stripe-elements';

import NavBar from './components/NavBar';
import Jobs from './components/Jobs';
import JobDetails from './components/JobDetails';
import PostJob from './components/PostJob';
import Advice from './components/Advice';
import Footer from './components/Footer';
import Payment from './components/Payment';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <div className="flexWrapper">
      <div className="wrapper">
        <HashRouter>
          <div>
            <NavBar />
            <Switch>
              <Route exact path='/' component={Jobs} />
              <Route path='/jobs/:id' component={JobDetails} />
              <Route exact path='/advice' component={Advice} />
              <Route exact path='/post' component={PostJob} />
              <Route exact path='/payment' component={Payment} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
        <Footer />
      </div>
      </div>
    );
  }
}

export default App;
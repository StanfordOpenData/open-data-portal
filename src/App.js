import React, { Component } from 'react';
import './index.css';
import { Switch, HashRouter, Route } from "react-router-dom";import { Elements, StripeProvider } from 'react-stripe-elements';

import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Datasets from './components/Datasets';
import DatasetDetails from './components/DatasetDetails';
import PostJob from './components/PostJob';
import Advice from './components/Advice';
import Footer from './components/Footer';
//import Payment from './components/Payment';
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
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/datasets' component={Datasets} />
              <Route path='/datasets/:name' component={DatasetDetails} />
              <Route exact path='/aboutus' component={Advice} />
              <Route exact path='/contribute' component={PostJob} />
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

// <Route exact path='/payment' component={Payment} />
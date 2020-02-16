import React, { Component } from 'react';
import './index.css';
import { Switch, HashRouter, Route } from "react-router-dom";import { Elements, StripeProvider } from 'react-stripe-elements';

import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Datasets from './components/Datasets';
import DatasetDetails from './components/DatasetDetails';
import PostDataset from './components/PostDataset';
import AboutUs from './components/AboutUs';
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
              <Route exact path='/aboutus' component={AboutUs} />
              <Route exact path='/contribute' component={PostDataset} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
        
      </div>
      <Footer />
      </div>
    );
  }
}

export default App;

// <Route exact path='/payment' component={Payment} />
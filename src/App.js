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
import { Helmet } from 'react-helmet';

class App extends Component {
  render() {
    return (
      <div className="flexWrapper">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Stanford Open Data Portal</title>
            <link rel="canonical" href="http://opendata.stanforddaily.com" />
            <meta name="description" content="Check out our datasets and contribute your own!"/>

            <meta property="og:title" content="Stanford Open Data Portal"/>
            <meta property="og:description" content="Check out our datasets and contribute your own!"/>
            <meta property="og:image" content="https://github.com/TheStanfordDaily/open-data-portal/blob/master/src/components/static/logo.jpg"/>
            <meta property="og:url" content="http://opendata.stanforddaily.com"/>

            <meta name="twitter:title" content="Stanford Open Data Portal"/>
            <meta name="twitter:description" content="Check out our datasets and contribute your own!"/>
            <meta name="twitter:image" content="https://github.com/TheStanfordDaily/open-data-portal/blob/master/src/components/static/logo.jpg"/>
            <meta name="twitter:card" content="summary"/>
        </Helmet>

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
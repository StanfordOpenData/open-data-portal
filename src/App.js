import React, { Component } from 'react';
import './App.css';
import locationIcon from './locationicon.png';
import building from './building.png';
import { BrowserRouter, Link, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://jobs.search.gov/jobs/search.json?query=nursing+jobs")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error!</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="wrapper">

          <header className="main-header clearfix">
            <Header />
          </header>

          <div className="sort">
            Sort by:
            <select name="sort">
              <option value="deadline">Deadline</option>
              <option value="recent">Most Recent</option>
            </select>
          </div>

          {items.map(job => <JobCard
            link={job.url}
            title={job.position_title}
            company={job.organization_name}
            location={job.locations}
            type={job.start_date} />
          )}
        </div >);
    }
  }
}

function Header() {
  return (
    <div>
      <div className="logo">
        <img src="https://user-images.githubusercontent.com/1689183/55673023-25239a00-5857-11e9-9699-5f2d0ab365cf.png" alt="" />
        <h1>Jobs & Internships</h1>
      </div>
      <nav className="nav">
        <Link to="/">All</Link>
        <Link to="/">Internships</Link>
        <Link to="/">Full-time</Link>
        <Link to="/">Part-time</Link>
      </nav>
    </div>
  );
}

function JobCard(props) {
  return (
    <div>
      <a className="link" href={props.link}>
        <div>
          <div className="company-logo">
            <img src="https://user-images.githubusercontent.com/1689183/55673023-25239a00-5857-11e9-9699-5f2d0ab365cf.png" alt="" />
          </div>

<div>
          <p className="job-title">{props.title}</p>
          <p className="company-name">
            <img className="location-icon" src={building} width="14" alt="" />
            {props.company}
            <span className="job-type">{props.type}</span>
          </p>
          <p>
            <img className="location-icon" src={locationIcon} width="14" alt="" />
            {props.location}
          </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default App;

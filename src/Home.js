import React, { Component } from 'react';
import './App.css';
import locationIcon from './locationicon.png';
import buildingIcon from './building.png';
import clockIcon from './clock.png';
import { BrowserRouter, Link, Route } from "react-router-dom";

class Home extends React.Component {
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
          <div className="sort">
            Sort by:
            <select name="sort">
              <option value="deadline">Deadline</option>
              <option value="recent">Most Recent</option>
            </select>
          </div>

          {items.map(job => <JobCard
            title={job.position_title}
            company={job.organization_name}
            location={job.locations}
            deadline={job.start_date}
            type={job.minimum} />
          )}
        </div >);
    }
  }
}


function JobCard(props) {
  var wage = parseInt(props.type, 10); {/* to create articifical job types from API because it doesn't have them */}
  return (
    <div>
      <Link to="/jobdetails" className="link">
        <div>
          <div className="company-logo">
            <img src="https://user-images.githubusercontent.com/1689183/55673023-25239a00-5857-11e9-9699-5f2d0ab365cf.png" alt="" />
          </div>

          <div className="job-info">
            <p className="job-title">{props.title}</p>
            <div className="job-details">
              <span className="job-type">
                <p>
                {wage > 58000 ? <span className="full-time">Full-time</span> : wage > 54000 ? <span className="part-time">Part-time</span> : <span className="internship">Internship</span>}
                </p>
              </span>
              <p>
                <img className="icon" src={buildingIcon} alt="" />
                {props.company}
              </p>

              <p>
                <img className="icon" src={locationIcon} alt="" />
                {props.location}
              </p>
              <p>
                <img className="icon" src={clockIcon} alt="" />
                {props.deadline}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Home;

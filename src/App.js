import React, { Component } from 'react';
import './App.css';
import locationIcon from './locationicon.png';
import building from './building.png';
import { BrowserRouter, Link, Route } from "react-router-dom";

let categories = [
  {
    "category": "Job Type",
    "subcategories": ["Internship", "Part-time", "Full-time"]
  },
  {
    "category": "Compensation",
    "subcategories": ["Paid", "Unpaid"]
  },
  {
    "category": "Category",
    "subcategories": ["Art", "Finance", "Media", "Non-Profit", "Science", "Technology"]
  },
  {
    "category": "Location",
    "subcategories": ["San Francisco, CA", "Palo Alto, CA", "Los Angeles, CA", "Berkeley, CA", "New York City, NY"]
  }
];

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

{/* uses API, has left column of categories
  let categories = [
  {
    "category": "Job Type",
    "subcategories": ["Internship", "Part-time", "Full-time"]
  },
  {
    "category": "Compensation",
    "subcategories": ["Paid", "Unpaid"]
  },
  {
    "category": "Category",
    "subcategories": ["Art", "Finance", "Media", "Non-Profit", "Science", "Technology"]
  },
  {
    "category": "Location",
    "subcategories": ["San Francisco, CA", "Palo Alto, CA", "Los Angeles, CA", "Berkeley, CA", "New York City, NY"]
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      categories: [
        {
          "category": "Job Type",
          "subcategories": ["Internship", "Part-time", "Full-time"]
        },
        {
          "category": "Compensation",
          "subcategories": ["Paid", "Unpaid"]
        },
        {
          "category": "Category",
          "subcategories": ["Art", "Finance", "Media", "Non-Profit", "Science", "Technology"]
        },
        {
          "category": "Location",
          "subcategories": ["San Francisco, CA", "Palo Alto, CA", "Los Angeles, CA", "Berkeley, CA", "New York City, NY"]
        }
      ]
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
        <div className="page">
        <Title />
          <div className="column-filter">
            <form action="" method="get">
              <input type="text" name="job-search" />
              <button type="submit">Search</button>

              {categories.map(cat => <div className="category">
                {cat.category}
                <br />

                {cat.subcategories.map(subcat => <div>
                  <input type="checkbox" name="compensation" value="paid" />
                  {subcat}
                  <br />
                </div>
                )}

              </div>
              )}
            </form>
          </div>

          <div className="column-jobs">
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
          </div>
        </div>);
    }
  }
}

function Title() {
  return (
    <div className="title">
      <h1><img className="logo" src="https://user-images.githubusercontent.com/1689183/55673023-25239a00-5857-11e9-9699-5f2d0ab365cf.png"
        width="26" alt=""/>
        Jobs & Internships</h1>
    </div>
  );
}

function JobCard(props) {
  return (
    <div>
      <a className="link" href={props.link}>
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
      </a>
    </div>
  );
}

export default App;
}





{/*  renders dummy data to board
  render() {
    return (<div className="page">
    <Title />
    <div className="column-filter">
      <form action="" method="get">
        <input type="text" name="job-search" />
        <button type="submit">Search</button>

        {categories.map(cat => <div className="category">
          {cat.category}
          <br />

          {cat.subcategories.map(subcat => <div>
            <input type="checkbox" name="compensation" value="paid" />
            {subcat}
            <br />
          </div>
          )}

        </div>
        )}
      </form>
    </div>

    <div className="column-jobs">
      <div className="sort">
        Sort by:
      <select name="sort">
          <option value="deadline">Deadline</option>
          <option value="recent">Most Recent</option>
        </select>
      </div>

      {data.map(job => <JobCard
        link={job.link}
        title={job.title}
        company={job.company}
        location={job.location}
        type={job.type} />
      )}
    </div> 
    </div>);
  }    
}

function Title() {
  return (
    <div className="title">
      <h1><img className="logo" src="https://user-images.githubusercontent.com/1689183/55673023-25239a00-5857-11e9-9699-5f2d0ab365cf.png"
        width="35" alt=""/>
        Jobs & Internships</h1>
    </div>
  );
}

function JobCard(props) {
  return (
    <div>
      <a className="link" href={props.link}>
        <div>
          <p className="job-title">{props.title}</p>
          <p className="company-name">{props.company}</p>
          <p>{props.location}</p>
          <p className="job-type">{props.type}</p>
        </div>
      </a>
    </div>
  );
}







{/* 

import React, { Component } from 'react';
import './App.css';

let categories = [
  {
    "category": "Job Type",
    "subcategories": ["Internship", "Part-time", "Full-time"]
  },
  {
    "category": "Compensation",
    "subcategories": ["Paid", "Unpaid"]
  },
  {
    "category": "Category",
    "subcategories": ["Art", "Finance", "Media", "Non-Profit", "Science", "Technology"]
  },
  {
    "category": "Location",
    "subcategories": ["San Francisco, CA", "Palo Alto, CA", "Los Angeles, CA", "Berkeley, CA", "New York City, NY"]
  }
];

let data = [
  {
    "link": "https://stanford.joinhandshake.com/jobs/2620548?ref=web-app-job-search&search_id=a3b4e536-2f60-4741-9dff-c75b2b938d24",
    "title": "Associate Producer, Real Sports",
    "company": "HBO",
    "location": "New York City, NY",
    "type": "Full-time"
  },
  {
    "link": "https://stanford.joinhandshake.com/jobs/2624814?ref=web-app-job-search&search_id=a3b4e536-2f60-4741-9dff-c75b2b938d24",
    "title": "Technical Director",
    "company": "WTXL ABC 27",
    "location": "Tallahassee, FL",
    "type": "Full-time"
  },
  {
    "link": "https://stanford.joinhandshake.com/jobs/2594918?ref=web-app-job-search&search_id=6ba2ad0e-fd09-4eb6-8e93-35d206a2e8c1",
    "title": "Finance Manager",
    "company": "Amazon",
    "location": "Seattle, WA",
    "type": "Full-time"
  }
];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  return (<div>
    <div className="page">
      <Title />
      <div className="column-filter">
        <form action="" method="get">
          <input type="text" name="job-search" />
          <button type="submit">Search</button>

          {categories.map(cat => <div className="category">
            {cat.category}
            <br />

            {cat.subcategories.map(subcat => <div>
              <input type="checkbox" name="compensation" value="paid" />
              {subcat}
              <br />
            </div>
            )}

          </div>
          )}
        </form>
      </div>

      <div className="column-jobs">
        <div className="sort">
          Sort by:
        <select name="sort">
            <option value="deadline">Deadline</option>
            <option value="recent">Most Recent</option>
          </select>
        </div>

        {data.map(job => <JobCard
          link={job.link}
          title={job.title}
          company={job.company}
          location={job.location}
          type={job.type} />
        )}

      </div>
    </div>
  </div>);
}

function Title() {
  return (
    <div className="title">
      <h1><img className="logo" src="https://user-images.githubusercontent.com/1689183/55673023-25239a00-5857-11e9-9699-5f2d0ab365cf.png"
        width="35" alt=""/>
        Jobs & Internships</h1>
    </div>
  );
}

function JobCard(props) {
  return (
    <div>
      <a className="link" href={props.link}>
        <div>
          <p className="job-title">{props.title}</p>
          <p className="company-name">{props.company}</p>
          <p>{props.location}</p>
          <p className="job-type">{props.type}</p>
        </div>
      </a>
    </div>
  );
}

export default App;

*/}



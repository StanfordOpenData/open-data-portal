import React, { Component } from 'react';
import './App.css';


export default () => (
  <div className="page">
    <header>
      <title>Jobs Board</title>
    </header>
    <body>
      <div className="title">
        <h1><img className="logo" src="https://user-images.githubusercontent.com/1689183/55673023-25239a00-5857-11e9-9699-5f2d0ab365cf.png" 
            width="32"/>
          Jobs & Internships</h1>
      </div>
      <div className="column-filter">
        <form action="" method="get">
          <input type="text" name="job-search" />
          <button type="submit">Search</button>
          <p>Job Type
            <br />
            <input type="checkbox" name="job-type" value="internship" /> Internship
            <br />
            <input type="checkbox" name="job-type" value="part-time" /> Part-time
            <br />
            <input type="checkbox" name="job-type" value="full-time" /> Full-time
          </p>
          <p>Compensation
            <br />
            <input type="checkbox" name="compensation" value="paid" /> Paid
            <br />
            <input type="checkbox" name="compensation" value="unpaid" /> Unpaid
          </p>
          <p>Category
            <br />
            <input type="checkbox" name="category" value="art" /> Art
            <br />
            <input type="checkbox" name="category" value="finance" /> Finance
            <br />
            <input type="checkbox" name="category" value="media/entertainment" /> Media/Entertainment
            <br />
            <input type="checkbox" name="category" value="non-profit" /> Non-Profit
            <br />
            <input type="checkbox" name="category" value="science" /> Science
            <br />
            <input type="checkbox" name="category" value="technology" /> Technology
            <br />
          </p>
          <p>Location
            <br />
            <input type="checkbox" name="location" value="san-francisco" /> San Francisco, CA
            <br />
            <input type="checkbox" name="location" value="palo-alto" /> Palo Alto, CA
            <br />
            <input type="checkbox" name="location" value="los-angeles" /> Los Angeles, CA
            <br />
            <input type="checkbox" name="location" value="berkeley" /> Berkeley, CA
            <br />
            <input type="checkbox" name="location" value="new-york" /> New York City, NY
            <br />
          </p>
        </form>
      </div>

      <div className="column-jobs">
        Sort by:
        <select name="sort">
          <option value="deadline">Deadline</option>
          <option value="recent">Most Recent</option>
        </select>
        <a className="link" href="https://stanford.joinhandshake.com/jobs/2620548?ref=web-app-job-search&search_id=a3b4e536-2f60-4741-9dff-c75b2b938d24">
          <div>
            <p className="job-title">Associate Producer, Real Sports</p>
            <p className="company-name">HBO</p>
            <p>New York City, NY</p> 
            <p className="job-type">Full-time</p>
          </div>
        </a>
        <a className="link" href="https://stanford.joinhandshake.com/jobs/2624814?ref=web-app-job-search&search_id=a3b4e536-2f60-4741-9dff-c75b2b938d24">
          <div>
            <p className="job-title">Technical Director</p>
            <p className="company-name">WTXL ABC 27</p>
            <p>Tallahassee, FL</p> 
            <p className="job-type">Full-time</p>
          </div>
        </a>
        <a className="link" href="https://stanford.joinhandshake.com/jobs/2594918?ref=web-app-job-search&search_id=6ba2ad0e-fd09-4eb6-8e93-35d206a2e8c1"> 
          <div>
            <p className="job-title">Finance Manager</p>
            <p className="company-name">Amazon</p>
            <p>Seattle, WA</p> 
            <p className="job-type">Full-time</p>
          </div>
        </a>
      </div>
    </body>
  </div>
);



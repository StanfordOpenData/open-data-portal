import React, { Component } from 'react';
import './styles.css';
import locationIcon from './locationIcon.png';
import buildingIcon from './buildingIcon.png';
import dollarIcon from './dollarIcon.png';
import workIcon from './workIcon.png';

function JobDetails() {
  return (
    <div className="jobDetails">
      <div className="mainContent">
        <div className="companyLogo">
          <img src="https://user-images.githubusercontent.com/1689183/55673023-25239a00-5857-11e9-9699-5f2d0ab365cf.png" alt="" />
        </div>
        <p className="jobTitle">Front End Web Developer</p>
        <div className="jobFacts">
          <div className="leftCol">
            <p>
              <img className="icon" src={buildingIcon} alt="" />
              <a href="http:">Stealth</a>
            </p>
            <p>
              <img className="icon" src={locationIcon} alt="" />
              Los Angeles, CA
            </p>
          </div>
          <div className="rightCol">
            <p>
              <img className="icon" src={dollarIcon} alt="" />
              Paid
            </p>
            <p>
              <img className="icon" src={workIcon} alt="" />
              Technology
            </p>
          </div>
          <div className="clear"></div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: '<p>Great opportunity for experienced Front-End Developer to implement new design across desktop, tablet and mobile views for existing (PHP) Enthusiast multi-media platform by providing hourly contract support working with senior management team.</p>\n<p>Responsibilities</p>\n<ul>\n<li>Code SCSS/HTML5 designs to be responsive/adaptive for desktop/tablet &amp; mobile views for existing PHP-developed platform</li>\n</ul>\n<p>Requirements</p>\n<ul>\n<li>Online Web Portfolio demonstrating 3+ years professional UIUX, HTML, SCSS experience website front-end development</li>\n<li>Expert level of SCSS/HTML5/JavaScript</li>\n<li>Expert understanding of browser compatibility issues</li>\n<li>Comfortable with Git and Webpack (or Gulp)</li>\n<li>Confident, agile creative self-starting team player with stellar attention-to-detail</li>\n<li>Accustomed to quick turnaround responding to customer takeaways</li>\n</ul>\n<p>Nice to have:</p>\n<ul>\n<li>Experience with CodeIgniter or other MVC framework</li>\n<li>Experience with ReactJS</li>\n</ul>\n<p>Position</p>\n<ul>\n<li>Contract-to-hire position working in-house (Century City) - devices provided</li>\n<li>Minimum one month engagement</li>\n</ul>\n<p>Compensation\n$60,000 - $70,000</p>\n' }}
          className="" />
      </div>
      <div className="sideBar">
        <div className="grayBackground">
          <h1>How to apply</h1>
          <p>Email your resume to <a href="mailto:pashjayc@gmail.com" target="_top">pashjayc@gmail.com.</a></p>
        </div>
      </div>
    </div>
  )
}

export default JobDetails;
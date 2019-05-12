import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="wrapper">
      <header className="main-header">
        <div>
          <Link to="/" className="logo">
            <img src="https://user-images.githubusercontent.com/1689183/55673023-25239a00-5857-11e9-9699-5f2d0ab365cf.png" alt="" />
            <h1>Jobs & Internships</h1>
          </Link>
          <Link to="/post-job" className="nav-button">Post Job</Link>
          <Link to="/subscribe" className="nav-button">Subscribe</Link>
          <div className="nav">
            <Link to="/">All</Link>
            <Link to="/internships"><span className="internship">Internships</span></Link>
            <Link to="/full-time"><span className="full-time">Full-time</span></Link>
            <Link to="/part-time"><span className="part-time">Part-time</span></Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavBar;

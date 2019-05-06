import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Route } from "react-router-dom";

function NavBar() {
    return (
        <div className="wrapper">
            <header className="main-header clearfix">
                <div>
                    <div className="logo">
                        <img src="https://user-images.githubusercontent.com/1689183/55673023-25239a00-5857-11e9-9699-5f2d0ab365cf.png" alt="" />
                        <h1>Jobs & Internships</h1>
                    </div>
                    <nav className="nav">
                        <Link to="/">All</Link>
                        <Link to="/"><span className="internship">Internships</span></Link>
                        <Link to="/"><span className="full-time">Full-time</span></Link>
                        <Link to="/"><span className="part-time">Part-time</span></Link>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default NavBar;

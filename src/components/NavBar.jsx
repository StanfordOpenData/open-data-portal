import React from 'react';
import './styles.css';

function NavBar() {
  return (
    <div>
      <header>
        <nav>
          <a href="/" className="logo">Job Tree</a>
          <ul>
            <li><a href="/">Jobs</a></li>
            <li><a href="/">Email alerts</a></li>
            <li><a href="/">Student advice</a></li>
            <li><a href="/" className="btnGreenLine">Post a job</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;

import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/" className="logo">Job Tree</Link>
          <ul>
            <li className="leftNav"><Link to="/">Jobs</Link></li>
            {/* <li><a href="/">Email alerts</a></li> */}
            <li><Link to="/advice">Student advice</Link></li>
            <li><Link to="/post" className="btnSecondary">Post a job</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;

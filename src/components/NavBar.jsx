import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
        <nav>
          <Link to="/" className="logo"></Link>
          <ul>
            <li className="leftNav"><Link to="/jobs">Datasets</Link></li>
            {/* <li><a href="/">Email alerts</a></li> */}
            <li><Link to="/advice">About Us</Link></li>
            <li><Link to="/post" className="btnSecondary">Contribute a dataset</Link></li>
            <li><Link to="https://stanforddaily.com/" target="_blank"> Stanford Daily</Link></li>
          </ul>
        </nav>
    </div>
  );
}

export default NavBar;

import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";
import logoImage from './logo.jpg';

function NavBar() {
  return (
    <div>
        <nav>
          <Link to="/" className="logo"><img src={logoImage} alt="logo" style= {{verticalAlign: 'middle', height:'3em'}}/></Link>
          <ul>
            <li className="leftNav"><Link to="/jobs">Datasets</Link></li>
            {/* <li><a href="/">Email alerts</a></li> */}
            <li><Link to="/advice">About Us</Link></li>
            <li><Link to="/post" className="btnSecondary">Contribute a dataset</Link></li>
            <li><a href="https://stanforddaily.com/" target="_blank"> Stanford Daily</a></li>
          </ul>
        </nav>
    </div>
  );
}

export default NavBar;

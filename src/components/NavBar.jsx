import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";
import logoImage from './static/logo.jpg';

function NavBar() {
  return (
    <div>
        <nav>
          <Link to="/" className="logo"><img src={logoImage} alt="logo" style= {{verticalAlign: 'middle', height:'5em'}}/></Link>
          <ul>
            <li className="leftNav"><Link to="/datasets">Datasets</Link></li>
            {/* <li><a href="/">Email alerts</a></li> */}
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/contribute" className="btnSecondary">Contribute a dataset</Link></li>
            <li><Link to="/guide">Handbook</Link></li>
            <li><a href="https://stanforddaily.com/" target="_blank" rel="noopener noreferrer"> Stanford Daily</a></li>
          </ul>
        </nav>
    </div>
  );
}

export default NavBar;

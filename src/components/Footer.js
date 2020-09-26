import React from 'react';
import './styles.css';

function Footer() {
    return (
      <div className="footer">
        Interested in creating your own data portal? Check out our <a href="https://github.com/TheStanfordDaily/open-data-portal" target="_blank" rel="noopener noreferrer"> GitHub</a>!
        <br></br>
        Theme gratefully forked from <a href="https://www.stanforddaily.com/author/grace-zhou/" target="_blank" rel="noopener noreferrer">Stanford's Open Data Portal</a>.
        <br></br> 
        © 2020 UChicago Open Data, a project of TechTeam and UChicago's IOP.
      </div>
    )
  }

export default Footer;
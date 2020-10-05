import React from 'react';
import photo from './photo.jpg';

const AboutUs = () => (
  <div className="container">
    <h2>About Us</h2>
    <p>UC Open Data is working to make UChicago's data more accessible  and transparent. Our Open Data Portal allows anyone to find and analyze UChicago-related data, such as data on university finances, student life, and academics.</p>

    <p>UC Open Data works as a part of <a href="https://www.uchicagotechteam.com/" target="_blank" rel="noopener noreferrer">UChicago Tech Team</a>, a civic tech student organization within the Institute of Politics. </p>

    <img src={photo} alt="Team members" style={{height: '15.1rem'}} />
  </div>
);

export default AboutUs;
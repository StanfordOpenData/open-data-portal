import React from 'react';
import photo from './photo.jpg';

const AboutUs = () => (
  <div className="container">
    <h2>About Us</h2>
    <p>The Stanford Open Data Project (SODP) is making data about Stanford University more accessible  and transparent. Our Open Data Portal allows anyone to find and analyze Stanford-related data, such as university finances, student life, and academics.</p>

    <p>SODP works in collaboration with <a href="http://www.stanforddaily.com" target="_blank">The Stanford Daily</a>, Stanford's premier publication. Student journalists are constantly trying to write impactful stories about the university, but they often struggle to find relevant data that would strengthen their narratives. Even if this data can be located, often it is unprocessed and difficult to use. Additionally, there are many stories that wouldn't be discovered without seeing the data first. As a result, SODP's convenient access to Stanford data is immensely valuable for The Stanford Daily. </p>

    <p>SODP is also the recipient of <a href="https://www.codingitforward.com/build" target="_blank">Coding It Forward's Build Program Fellowship</a>, a semester-long civic tech incubator.</p>

    <img src={photo} alt="photo" style={{height: '15.1rem'}} />
  </div>
);

export default AboutUs;
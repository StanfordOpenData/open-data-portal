import React from 'react';
import photo from './photo.jpg';

const AboutUs = () => (
  <div className="container">
    <h2>About Us</h2>
    <p>The Stanford Open Data Project (SODP) is making data about Stanford University more accessible and transparent. Our Open Data Portal aims to allow anyone to find and analyze Stanford-related data, including information about university finances, public health, and student life. We also promote data-driven advocacy at Stanford by creating educational resources for nascent data scientists, organizing Stanford’s first general-interest datathon, and working with student advocates to identify and acquire important datasets. In turn, we hope to provide the infrastructure and resources for campus stakeholders to realize the promise of open data.</p>

    <p>SODP is partnered with <i><a href="https://www.stanforddaily.com/category/@94305/" target="_blank" rel="noopener noreferrer">The Stanford Daily @94305</a></i> and the <a href="http://pitlab.stanford.edu/" target="_blank" rel="noopener noreferrer">Stanford Public Interest Tech Lab</a>. These partnerships allow SODP to open up more datasets and publicize them widely. In particular, writers at The Stanford Daily have used our datasets in articles on topics ranging from <a href="https://www.stanforddaily.com/2020/10/11/tracking-covid-19-at-stanford/" target="_blank" rel="noopener noreferrer">COVID-19 on campus</a> to <a href="https://www.stanforddaily.com/2020/06/09/stanford-in-the-2010s-tracking-stanfords-faculty-diversity-over-the-past-10-years/" target="_blank" rel="noopener noreferrer">faculty diversity</a> over the past decade. Additionally, the Stanford PIT Lab co-leads the Stanford Open Data Council, which organizes students to acquire datasets and add them to our data portal. SODP is also the recipient of <a href="https://www.codingitforward.com" target="_blank" rel="noopener noreferrer">Coding It Forward's</a> Build Program Fellowship, a semester-long civic tech incubator.</p>

    <p> SODP believes that the promise of open data on college campuses extends beyond the 94305 zip code. We are proud to have helped budding open data portals at other universities and recently joined forces with the Northwestern Open Data Initiative to publish <i><a href="https://opendatacampus.com/" target="_blank" rel="noopener noreferrer">The Open Data Handbook for College Students</a></i>. This extensive guide compiles our learnings and best practices to help students across the country open up data at their own universities. The document also includes a provisional discussion and flowchart about data governance, which codifies SODP’s current approach to data governance. SODP is acutely aware of the dangers of open data including but not limited to breaches of privacy and dataset bias. In addition, we understand that any Stanford-related data is inextricably tangled with unjust distributions of power at Stanford. We are actively working to ensure that SODP supports student advocates who are fighting issues like racism, sexism, and classism on campus and beyond.</p>
    
    <p>SODP is committed to empowering students to make Stanford itself more accountable and transparent. Interested in learning more or working with us? Email us at stanfordopendataproject@gmail.com.</p>

    <img src={photo} alt="Team members" style={{height: '15.1rem'}} />
  </div>
);

export default AboutUs;

import React from 'react';
import "./fellowship.css"

function Fellowship() {
  return (
    <div className="container">
      <h2>Stanford Open Data Project Fellowship</h2>
      <p>The SODP Fellowship is a 7-week data workshop filled with active group learning and one-on-one mentoring on topics from data visualization to statistical analysis. It is geared towards students with little to no background in data. It will culminate in data journalism projects that will have the opportunity to be published in the Stanford Daily and/or SODP’s website.</p>
      <h4>Class Format</h4>
      <ul>
        <li>Week 2-6: weekly 1-hour class time, consisted of 20-min lecture and 40-min group study</li>
        <li>Week 6-8: independent work on projects, feel free to drop in to office hours</li>
        <li>TBD: pop-up workshops and guest lectures </li>
        <li>Week 8: project presentations</li>
      </ul>
      <h4>What do we expect from you?</h4>
      <ul>
        <li>Prerequisite: some experience with Python (CS 106A level). If you’ve had experience in other programming languages and are willing to learn Python on the fly, you are welcomed as well!</li>
        <li>Enthusiasm about data, data advocacy, and data journalism</li>
        <li>Commitment to attend the lectures, engage in class activities, and complete a final project</li>
      </ul>
      <h4>Why should you join the Fellowship?</h4>
      <ul>
        <li><strong>Interactive and group-based learning</strong>: in lecture, you'll do more than just listen. Most of our learning will be conducted through hands-on problem solving with your group members.</li>
        <li><strong>Rapid skill development</strong>: data skills are some of the sought-after skills in academia and by employers. We provide resources specifically for students with little to no background in data to equip themselves with these skills.</li>
        <li><strong>Mentorship and community</strong>: connect with Data Challenge Lab alums, the Daily data journalism reporters, the SODP community, and a class of data enthusiasts just like you!</li>
        <li><strong>Use your skills in hands-on projects</strong>: collaborate with our partner orgs (eg: the Bill Lane Center), or pick your own dataset, and explore!</li>
        <li><strong>Learn about data ethics and governance</strong>: we have confirmed a guest lecture with professor <a href="https://web.stanford.edu/~jugander/" target="_blank" rel="noopener noreferrer">Johan Ugander</a> on data ethics and governance.</li>
      </ul>
      <h4>Our Curriculum</h4><br/>
      <div id="tablecontainer">
        <table>
          <tr>
            <th>Week</th>
            <th>Topic</th>
            <th>Description</th>
          </tr>
          <tr>
            <td className="aqua">1 (1/11-1/17)</td>
            <td>Introduction</td>
            <td>No mandatory class time this week, but we will provide optional material around the basics of python data packages for you to learn at your own pace.</td>
          </tr>
          <tr>
            <td className="aqua">2 (1/18-1/24)</td>
            <td>Basics</td>
            <td>Build a strong foundation of data cleaning in Pandas.</td>
          </tr>
          <tr>
            <td className="aqua">3 (1/25-1/31)</td>
            <td>1D EDA + 2D EDA</td>
            <td>Learn how to explore a new dataset and its distributions and covariations. Identify unusual and missing values. Master the iterative process of generating questions and visualising your data to better understand it.</td>
          </tr>
          <tr>
            <td className="aqua">4 (2/1-2/7)</td>
            <td>Visualisation</td>
            <td>The same data can be used and manipulated to tell stories with different focal points and messages.  Practice and understand effective data visualization practices to turn even the most complicated datasets into concise graphics.</td>
          </tr>
          <tr>
            <td className="aqua">5 (2/8-2/14)</td>
            <td>Statistical analysis</td>
            <td>Learn how to model data, test hypotheses, and discover the underlying structure of the population of your data.</td>
          </tr>
          <tr>
            <td className="aqua">6 (2/15-2/21)</td>
            <td>Journalism</td>
            <td>It’s much more difficult to write a good data journalism piece beyond deriving interesting insights from your dataset. This lecture will serve as the last but perhaps most important building block to your final project</td>
          </tr>
          <tr>
            <td className="aqua">Stay Tuned!</td>
            <td colspan="2">Guest lectures and pop-up workshops</td>
          </tr>
          <tr>
            <td className="aqua">8 (3/1-3/7)</td>
            <td colspan="2">Project presentation</td>
          </tr>
        </table>
      </div>
      <br/>
      <p>Questions? Contact Stone Yang (<a href="mailto:yywstone@stanford.edu">yywstone@stanford.edu</a>)!</p>
    </div>
  )
};

export default Fellowship;
import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";
import heroImage from './heroImage.svg';

export default class LandingPage extends React.Component {
  state = {
    selectedOption: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }


  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = 'https://jobs.github.com/positions.json?utf8=%E2%9C%93&description=&location=california'
    fetch(proxyUrl + targetUrl)
      .then(blob => blob.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          items: result
        });
      },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <div className="home">
        <header>
          <img className="hero" src={heroImage} alt="" height="375px" />
          <h1>Find your dream job and contact recruiters right away.</h1>
          <Link to="/jobs" className="btnPrimary">Explore jobs</Link>
          {/*<a href="#" className="btnTertiary">Get alerts</a>  */}
          <h3>New positions</h3>
          <div className="miniJobs">
            {this.state.items.slice(0, 3).map(job =>
              <Link>
                <div className="jobTitle">
                  {job.title}
                </div>
                <div className="companyLogo">
                  {job.company}
                </div>
                <div className="jobLocation">
                  {job.location}
                </div>
              </Link>
            )
            }
          </div>
          <Link to="/jobs" className="seeMore">See more</Link>

        </header>

      </div>);
  }
}


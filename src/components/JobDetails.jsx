import React from 'react';
import Linkify from 'react-linkify';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import './styles.css';
import locationIcon from './locationIcon.png';
import buildingIcon from './buildingIcon.png';
import dollarIcon from './dollarIcon.png';
import briefcaseIcon from './briefcaseIcon.png';

class JobDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = 'https://jobs.github.com/positions/' + this.props.match.params.id + '.json?markdown=true';
    fetch(proxyUrl + targetUrl)
      .then(blob => blob.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          items: result,
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
    var showitems = this.state.items;
    console.log(showitems);
    return (
      <div className="jobDetails">
        <div className="mainContent">
          <div className="companyLogo">
            <img src={this.state.items.company_logo} alt="" />
          </div>
          <p className="jobTitle">{this.state.items.title}</p>
          <div className="jobFacts">
            <div className="leftCol">
              <p>
                <img src={buildingIcon} alt="" />
                <a href={this.state.items.company_url}>{this.state.items.company}</a>
              </p>
              <p>
                <img src={locationIcon} alt="" />
                {this.state.items.location}
            </p>
            </div>
            <div className="rightCol">
              <p>
                <img src={dollarIcon} alt="" />
                {this.state.items.type}
            </p>
              <p>
                <img src={briefcaseIcon} alt="" />
                Technology
            </p>
            </div>
            <div className="clear"></div>
          </div>
        {ReactHtmlParser(this.state.items.description)}
        </div>
        <div className="sideBar">
          <div className="greenBackground">
            <h1>How to apply</h1>
            <p><Linkify>{this.state.items.how_to_apply}</Linkify></p>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    )
  }
}

export default JobDetails;
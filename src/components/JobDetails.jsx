import React from 'react';
import Linkify from 'react-linkify';
import ReactHtmlParser from 'react-html-parser';
import './styles.css';
import locationIcon from './locationIcon.png';
import buildingIcon from './buildingIcon.png';
import dollarIcon from './dollarIcon.png';
import briefcaseIcon from './briefcaseIcon.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
    axios.get('https://open-data-portal.s3.us-east-2.amazonaws.com/metadata.json')
      .then(result => {
        this.setState({
          isLoaded: true,
          items: result.data,
        });
        console.log('here');
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
    if (this.state.items.length === 0) {
      return <div>Loading...</div>;
    } else {
    return (
      <div className="jobDetails">
        <div className="mainContent">
          {this.state.items && this.state.items.map((post) =>
              post.name === this.props.match.params.name &&
              <div>
                <div>
                  <div>
                    <p className = "jobTitle"> {post.display_name} </p>
                    <b>Upload Date:</b> {post.create_date}  <br></br>
                    <div> <b>Description:</b> {post.description} </div>
                    <b>Actions:</b> <a href = {post.source_url}> Download Source</a> <a> | </a>
                    <a href = {"https://s3.us-east-2.amazonaws.com/open-data-portal/" + this.props.match.params.name + ".csv"}>Download CSV</a>
                  </div>
                </div>
                <div className="jobFacts">
                  <div className="leftCol">
                    <p>
                      <img src={buildingIcon} alt="" />
                      <a href={post.create_date}></a>
                    </p>
                    <p>
                      <img src={locationIcon} alt="" />
                    </p>
                    <p>
                      <img src={dollarIcon} alt="" />
                    </p>
                  </div>
                  <div className="rightCol">
                  </div>
                  <div className="clear"></div>
                </div>
              </div>
            )}
        </div>
        <div className="clear"></div>
      </div>
    )
  }
}
}

export default JobDetails;
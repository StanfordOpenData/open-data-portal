import React from 'react';
import Linkify from 'react-linkify';
import ReactHtmlParser from 'react-html-parser';
import './styles.css';
import locationIcon from './static/locationIcon.png';
import buildingIcon from './static/buildingIcon.png';
import dollarIcon from './static/dollarIcon.png';
//import briefcaseIcon from './static/briefcaseIcon.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CsvToHtmlTable } from 'react-csv-to-table';


class DatasetDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      csv: '',
    };
  }

  componentDidMount() {
    axios.get('https://open-data-portal.s3.us-east-2.amazonaws.com/metadata.json')
      .then(result => {
        this.setState({
          isLoaded: true,
          items: result.data,
        });
      },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    axios.get("https://s3.us-east-2.amazonaws.com/open-data-portal/" + this.props.match.params.name + ".csv") 
        .then(result => {
          this.setState({
            csv: result.data,
          });
        },
          (error) => {
            this.setState({
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
      <div className="datasetDetails">
        <div className="mainContent">
          {this.state.items && this.state.items.map((post) =>
              post.name === this.props.match.params.name &&
              <div>
                <div className="datasetFacts">
                  <div>
                    <p className = "datasetTitle"> {post.display_name} </p>
                    <div><img src={dollarIcon} alt="" /> <b> Categories:</b> {post.tags} </div>
                    <div><img src={locationIcon} alt="" /> <b> Upload Date:</b> {post.create_date} </div>
                    <div><img src={buildingIcon} alt="" /> <b> Source:</b> {post.source} </div>
                    <br></br>
                    <div> {post.description} </div>
                    <br></br>
                    <br></br>
                    <div>
                      <a href={post.source_url} target="_blank" className="btnSecondary">View Source</a>
                      <a> </a>
                      <a href={"https://s3.us-east-2.amazonaws.com/open-data-portal/" + this.props.match.params.name + ".csv"} className="btnSecondary">Download CSV</a>
                    </div>

                  </div>
                </div>
                <div>
                  <p className = "datasetTitle">Table Preview</p>
                  <CsvToHtmlTable data={this.state.csv} csvDelimiter="," tableClassName="table table-striped table-hover"/>
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

export default DatasetDetails;
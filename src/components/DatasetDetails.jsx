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
import { CsvToHtmlTable } from 'react-csv-to-table';
import Moment from 'moment';


class DatasetDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      csv: '',
      articles: []
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

    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://wp.stanforddaily.com/wp-json/wp/v2/posts?_embed&categories=58277' 
      // embed adds featured image
    fetch(proxyUrl + targetUrl)
      .then(blob => blob.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          articles: result,
        });
        console.log(result);
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
    function html_entity_decode(message) {
      {/* decodes UTF8 punctuation into HTML */ }
      var element = document.createElement("div");
      element.innerHTML = message;
      return element.innerHTML;
    }

    if (this.state.items.length === 0) {
      return <div>Loading...</div>;
    } else {
    return (
      <div className="datasetDetails">
        <div className="detailsColumn1">
          <div>
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
                    <div className = "table_scroll">
                      <CsvToHtmlTable data={this.state.csv} csvDelimiter="," tableClassName="table table-striped table-hover"/>
                    </div> 
                  </div>
                </div>
              )}
          </div>

          <div className="clear"></div>
        </div>
        <div className="detailsColumn2">
        <br></br>
        
          <p className="datasetTitle" style={{float:"right"}}>Stories Using this Data</p>
            {this.state.items && this.state.items.map((post) =>

              <div>
                  

                  {post.name === this.props.match.params.name &&
                 
                      post.stories.split(',').map(story => 
                        <div className="mini" style = {{width: 100 + '%'}}>
                          <ul>
                            {this.state.articles.map(article =>
                              story === article.slug &&

                              <li className="mini" >
                                <a href={article.link} target="_blank" id="detailsPageLink">
                                  <div className="title">
                                    {html_entity_decode(article.title.rendered)}
                                  </div>
                                  <div className="lightTitle">
                                    {html_entity_decode(article._embedded.author[0].name)} • {Moment(Date.parse(article.date)).format("LL")}
                                  </div>
                                  <div></div>
                                  <img className="articleImg" src={article._embedded['wp:featuredmedia'][0].source_url} alt=""/>
                                </a>
                              </li>
                            )}
                          </ul>
                        </div>
                      )
                    
                  }
              </div>
            )}
        </div>
      </div>
    )
  }
}
}

export default DatasetDetails;
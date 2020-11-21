import React from 'react';
import './styles.css';
import locationIcon from './static/locationIcon.png';
import buildingIcon from './static/buildingIcon.png';
import dollarIcon from './static/dollarIcon.png';
//import briefcaseIcon from './static/briefcaseIcon.png';
import axios from 'axios';
import { CsvToHtmlTable } from 'react-csv-to-table';
import Moment from 'moment';
import { find } from 'lodash';


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
    axios.get('https://ucopendata.s3.us-east-2.amazonaws.com/metadata.json')
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
    axios.get("https://s3.us-east-2.amazonaws.com/ucopendata/" + this.props.match.params.name + ".csv") 
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
    let curArticles = [];
    if (this.state.items.length !== 0 && this.state.articles.length !== 0) {
      //console.log('this.state.items' + this.state.items);
      let dataset = find(this.state.items, {"name": this.props.match.params.name});
      //console.log('dataset', dataset);
      //console.log('articles', this.state.articles);
      curArticles = dataset.stories.split(',').map((story) => find(this.state.articles, {"slug": story})).filter(e => e)
      console.log('curArticles', curArticles);
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
                        <a href={post.source_url} target="_blank" rel="noopener noreferrer" className="btnSecondary">View Source</a>
                        <a href={"https://s3.us-east-2.amazonaws.com/ucopendata/" + this.props.match.params.name + ".csv"} className="btnSecondary">Download CSV</a>
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
        {curArticles.length > 0 && 
        <>
          <p className="datasetTitle" style={{float:"right"}}>Stories Using this Data</p>
              <div className="mini" style = {{width: 100 + '%'}}>
                {curArticles && curArticles.map(article => (
                  <ul>
                    <li className="mini" >
                      <a href={article.link} target="_blank" rel="noopener noreferrer" id="detailsPageLink">
                          <div className="title">
                              {decodeURIComponent(article.title.rendered)}
                          </div>
                          <div className="lightTitle">
                            {decodeURIComponent(article._embedded.author[0].name)} • {Moment(Date.parse(article.date)).format("LL")}
                          </div>
                            <img className="articleImg" src={article._embedded['wp:featuredmedia'][0].source_url} alt=""/>
                      </a>
                    </li>
                      </ul>
                  ))
              }
              </div>
              </>
            }
        </div>
      </div>
    )
  }
}
}

export default DatasetDetails;
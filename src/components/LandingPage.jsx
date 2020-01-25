import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";
import heroImage from './heroImage.svg';
import Stanford from './StanfordOval@2x.png'
import axios from 'axios';

export default class LandingPage extends React.Component {
  state = {
    selectedOption: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
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
        console.log(result.data)
      },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
          console.log('here');
        }
      )
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = 'https://wp.stanforddaily.com/wp-json/wp/v2/posts?_embed&categories=58277&per_page=3' 
      // embed adds featured image
    fetch(proxyUrl + targetUrl)
      .then(blob => blob.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          articles: result,
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
    function html_entity_decode(message) {
      {/* decodes UTF8 punctuation into HTML */ }
      var element = document.createElement("div");
      element.innerHTML = message;
      return element.innerHTML;
    }
    return (
      <div className="home">
        <header>
          <img className="hero" src={heroImage} alt="" height="375px" />
          <h1>Welcome to the Stanford Open Data Portal</h1>
          <Link to="/jobs" className="btnPrimary">Explore data</Link>
          {/*<a href="#" className="btnTertiary">Get alerts</a>  */}

        </header>
        <div className="newJobs">
          <h3>Featured Datasets</h3>
          <div className="mini">
            {this.state.items.slice(0, 3).map(job =>
              <Link to={{
                pathname: '/datasets/' + job.name,
                state: {
                  data: job,
                }
              }} className="seeMore">
                <div className="title">
                {job.display_name}
              </div>
              <div className="lightTitle">
                {job.tags}
              </div>
              </Link>
            )
            }
          </div>
          <Link to="/jobs" className="seeMore">See more</Link>
        </div>
        <div className="newArticles">
          <h3>Articles Featuring Open Data</h3>
          <div className="mini">
            {this.state.articles.map(article =>
              <a href={article.link} target="_blank">
                <div className="title">
                  {html_entity_decode(article.title.rendered)}
                </div>
                <div className="lightTitle">
                  {html_entity_decode(article._embedded.author[0].name)} • {html_entity_decode(article.date)}
                </div>
                <div></div>
                <img className="articleImg" src={article._embedded['wp:featuredmedia'][0].source_url} alt=""/>
              </a>
            )
            }
          </div>
          <a href="https://www.stanforddaily.com/category/data-vizzes/" className="seeMore" target="_blank">See more</a>
        </div>

        <div className="secondHeader">
          <div className="column">
            <img src={Stanford} alt="Stanford Oval" />
          </div>
          <div className="column">
            <div className="right">
            <div className="title">The Stanford Open Data Project (SODP) is making data about Stanford University more accessible and transparent. The final version of this site will aggregate data about Stanford University &mdash; such as university finances, student life, and academics &mdash; as well as tools to analyze the data.</div>
          </div>
          </div>
          <div style={{clear:"both"}}></div>
        </div>
      </div>
    );
  }
}

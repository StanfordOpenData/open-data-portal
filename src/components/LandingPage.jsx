import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";
import heroImage from './heroImage.svg';
import Stanford from './StanfordOval@2x.png'

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
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = 'https://www.stanforddaily.com/wp-json/wp/v2/posts?_embed&tags=16534,8248,24207,406,318&per_page=3' // embed adds featured image
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
          <h3>Articles using Open Data</h3>
          <div className="mini">
            {this.state.items.slice(0, 3).map(job =>
              <Link to={"/jobs/" + job.id}>
                <div className="title">
                  {job.title}
                </div>
                <div>
                  {job.company}
                </div>
                <div className="lightTitle">
                  {job.location}
                </div>
              </Link>
            )
            }
          </div>
          <Link to="/jobs" className="seeMore">See more</Link>
        </div>

        <div className="newArticles">
          <h3>Contribute data to SODP</h3>
          <div className="mini">
          <Link to="/post" className="btnPrimary">Contribute a dataset</Link>
            {this.state.articles.map(article =>
              <a href={article.link}>
                <div className="title">
                  {html_entity_decode(article.title.rendered)}
                </div>
              </a>
            )
            }
          </div>
          <Link to="/jobs" className="seeMore">See more</Link>
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

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
    function html_entity_decode(message) { {/* decodes UTF8 punctuation into HTML */}
      var element = document.createElement("div");
      element.innerHTML = message;
      return element.innerHTML;
    }
    return (
      <div className="home">
        <header>
          <img className="hero" src={heroImage} alt="" height="375px" />
          <h1>Find your dream job and contact recruiters right away.</h1>
          <Link to="/jobs" className="btnPrimary">Explore jobs</Link>
          {/*<a href="#" className="btnTertiary">Get alerts</a>  */}

        </header>
        <div className="newJobs">
          <h3>New positions</h3>
          <div className="mini">
            {this.state.items.slice(0, 3).map(job =>
              <Link>
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
          <h3>Student advice</h3>
          <div className="mini">
            {this.state.articles.map(article =>
              <Link>
                <div className="title">
                {html_entity_decode(article.title.rendered)}
                </div>
                <div>
                {article._embedded.author[0].name}
                </div>
              </Link>
            )
            }
          </div>
          <Link to="/jobs" className="seeMore">See more</Link>
        </div>

      </div>);
  }
}


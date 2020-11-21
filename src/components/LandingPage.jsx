import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";
import heroImage from './static/heroImage.svg';
import Stanford from './static/StanfordOval@2x.png'
import axios from 'axios';
import Moment from 'moment';

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
      articles: [],
      randomfact: "This quarter, UChicago is offering 11 courses with the word 'data' in the title.",
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

  getRandomFact = () => { // updates random fact displayed
    var randomfacts = ["UChicago is home to the 9th largest library system (by number of volumes) in the United States.",
		     "UChicago enrolled 16,445 students in Autumn 2019.",
                      "This quarter, UChicago is offering 11 courses with the word 'data' in the title.",
                      "UChicago has a graduation rate of 94.2%.",
                      "On average, UChicago undergrads get laid 0.5 times per quarter.",
                      "Since 2007, independent union GSU (Graduate Student Union) has been representing the interests of graduate student workers at UChicago."]
    var randfact = this.state.randomfact;
    if (randomfacts.length > 1) {
      while (randfact === this.state.randomfact) {
        randfact = randomfacts[Math.floor(Math.random()*randomfacts.length)]
      }
    }
    this.setState({randomfact: randfact}) 
  }

  getRandomDataset = () => { // gets a random pathname & redirects to a random dataset
    var randpath = '/#/datasets/' + this.state.items[Math.floor(Math.random()*this.state.items.length)].name
    window.location.href = (randpath);
  }

  render() {
    function html_entity_decode(message) {
      /* decodes UTF8 punctuation into HTML */
      var element = document.createElement("div");
      element.innerHTML = message;
      return element.innerHTML; 
    }

    return (
      <div className="home">
        <header>
          <h1>Welcome to UChicago's Open Data Portal</h1>
          
          <Link to="/datasets" className="btnPrimary">Explore data</Link>
          {/*<a href="#" className="btnTertiary">Get alerts</a>  */}

          <button onClick={this.getRandomDataset} class="btnPrimary" id="randomdataset"> Random Dataset</button>

          <div id="randomfactdiv">
            <button onClick={this.getRandomFact} type = "button" className="btnPrimary" id="randomfactcontainer">  
              <p id="randomfact">{this.state.randomfact}</p>
              <p id="newfact">Click for Another Fun Data Fact!</p> 
            </button>
          </div>
        </header>
        <div className="newDatasets">
          <h3>Featured Datasets</h3>
          <div className="mini">
            {this.state.items.slice(0, 3).map(dataset =>
              <Link to={{
                pathname: '/datasets/' + dataset.name,
                state: {
                  data: dataset,
                }
              }} className="seeMore">
                <div className="title">
                {dataset.display_name}
              </div>
              <div className="lightTitle">
                {dataset.tags}
              </div>
              </Link>
            )
            }
          </div>
          <Link to="/datasets" className="seeMore">See more</Link>
        </div>
        <div className="newArticles">
          <h3>Articles Featuring Open Data</h3>
          <div className="mini">
            {this.state.articles.map(function (article) {
              var names = []
              for (var i = 0; i < article._embedded.author.length; i++) {
                names += html_entity_decode(article._embedded.author[i].name);
              }

              return (
                <a href={article.link} target="_blank" rel="noopener noreferrer">
                  <div className="title">
                    {html_entity_decode(article.title.rendered)}
                  </div>
                  <div className="lightTitle">
                    {names} • {Moment(Date.parse(article.date)).format("LL")}
                  </div>
                  <div></div>
                </a>
              )
            })
            }
          </div>
          <a href="https://medium.com/@uchicagotechteam" className="seeMore" target="_blank" rel="noopener noreferrer">See more</a>
        </div>

        
      </div>
    );
  }
}

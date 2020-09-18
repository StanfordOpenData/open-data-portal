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
      randomfact: "Stanford University was established in 1891.",
      textInput: ''
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
    var randomfacts = ["Stanford has won 270 overall Olympic medals (139 gold, 73 silver, 58 bronze), as of the 2016 Rio Olympics.", 
                      "Stanford has 165 overall Olympic medalists, as of the 2016 Rio Olympics",
                      "Stanford won 27 medals at the 2016 Rio de Janeiro Olympic Games, a school record!", 
                      "The Cardinal has produced at least one medalist in every Olympics the U.S. has competed in since 1912.",
                      "There are over 800 (registered) parties yearly on Stanford campus.",
                      "Over 10,000 students were driven home by 5-SURE in the 2017-2018 school year.",
                      "Stanford offers over 15,000 courses annually, as of 2020."]
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

  onSubmit = () => {
    console.log(this.state.textInput)
    this.props.history.push({
      pathname: '/datasets',
      state: { value: this.state.textInput }})
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
          <img className="hero" src={heroImage} alt="" height="375px" />
          <h1>Welcome to the Stanford Open Data Portal</h1>

          <form>
            <input type="search" id="searchInput" onChange={e => this.setState({textInput: e.target.value})} placeholder="Search by dataset category, description, etc." name="search"/>
            <button onClick={this.onSubmit} className='btnPrimary'>Explore Data</button>
          </form>
          
          
          {/*<a href="#" className="btnTertiary">Get alerts</a>  */}

          <button onClick={this.getRandomDataset} className="btnPrimary" id="randomdataset"> Random Dataset</button>

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
                  <img className="articleImg" src={article._embedded['wp:featuredmedia'][0].source_url} alt=""/>
                </a>
              )
            })
            }
          </div>
          <a href="https://www.stanforddaily.com/category/data-vizzes/" className="seeMore" target="_blank" rel="noopener noreferrer">See more</a>
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

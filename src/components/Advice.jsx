import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";

var data = [];

class Advice extends React.Component {
  state = {
    selectedOption: null,
  };

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
      targetUrl = 'https://www.stanforddaily.com/wp-json/wp/v2/posts?_embed&tags=16534,8248,24207,406,318&per_page=50' // embed adds featured image
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
    const { error, isLoaded, items } = this.state;
    const { selectedOption } = this.state;

    if (error) {
      return <div>Error!</div>;
    } else if (!isLoaded) {
      return <div></div>;
    } else {
      return (
        <div>
          <div className="mainContent articles">
            <ul className="list">
              {this.state.items.map(article => <ArticleCard
                title={article.title.rendered}
                author={article.author}
                excerpt={article.content.rendered.replace(/<\/?[^>]+(>|$)/g, "")}
                link={article.link}
                id={article.id}
                hasImage={article.featured_media}
              />
              )}
            </ul>
          </div>
          <div className="sideBar">
            <p>Tell us what you’re looking for and we’ll notify you of new jobs!</p>
            <a href="#" class="btnPrimary">Get alerts</a>
          </div>
          <div className="clear"></div>
        </div>);
    }
  }
}

{/*}
function ArticleCard(props) {
  return (
    <div>
      <li>
        <a href={props.link}>
          <img src="https://user-images.githubusercontent.com/1689183/55673023-25239a00-5857-11e9-9699-5f2d0ab365cf.png" alt="" />
          <div className="articleInfo">
            <div className="jobTitle">{props.title}</div>
            <div className="jobFacts">
              {props.author}
            </div>
            <div className="jobExcerpt">
              {props.excerpt}
            </div>
          </div>
        </a>
      </li>
    </div>
  );
}
*/}

class ArticleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      imageData: [],
    };
  }

  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = 'https://www.stanforddaily.com/wp-json/wp/v2/media/' + this.props.id
    fetch(proxyUrl + targetUrl)
      .then(blob => blob.json())
      .then(result => {
        this.setState({
          imageData: result,
          isLoaded: true,
        });
        console.log(this.state.imageData.guid.rendered)
      },
        (error) => {
          this.setState({
            error
          });
        }
      )

  }
  render() {
    return (
      <div>
        <li>
          <a href={this.props.link}>
            {this.state.isLoaded
              ? <img src={this.state.imageData.guid} />
              : <img src="https://user-images.githubusercontent.com/1689183/55673023-25239a00-5857-11e9-9699-5f2d0ab365cf.png" alt="" />
            }

            <div className="articleInfo">
              <div className="jobTitle">{this.props.title}</div>
              <div className="jobFacts">
                {this.props.author}
              </div>
              <div className="jobExcerpt">
                {this.props.excerpt}
              </div>
            </div>
          </a>
        </li>
      </div>
    );
  }
}

export default Advice;
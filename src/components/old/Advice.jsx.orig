import React from 'react';
import './styles.css';

class Advice extends React.Component {
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
    const { error, isLoaded } = this.state;

    function html_entity_decode(message) { {/* decodes UTF8 punctuation into HTML */}
      var element = document.createElement("div");
      element.innerHTML = message;
      return element.innerHTML;
    }
    
    if (error) {
      return <div>Error!</div>;
    } else if (!isLoaded) {
      return <div></div>;
    } else {
      return (
        <div>
          <div className="mainContent articles">
            <ul className="list">
              {this.state.items.map(article => {
                let featuredImage;
                if (article._embedded['wp:featuredmedia']) {
                  console.log("made it")
                  featuredImage = article._embedded['wp:featuredmedia'][0].source_url;
                  
                }
                else {
                  featuredImage = "";
                }
              return (<ArticleCard
                title={html_entity_decode(article.title.rendered)}
                author={article._embedded.author[0].name}
                excerpt={html_entity_decode(article.content.rendered.replace(/<\/?[^>]+(>|$)/g, ""))}
                link={article.link}
                image={featuredImage}
              />)

              }
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


function ArticleCard(props) {
  let image;
  console.log(props.image)
  if (props.image) {
    image = <img src={props.image} alt="" />;
  } else {
    image = <img src="https://user-images.githubusercontent.com/1689183/55673023-25239a00-5857-11e9-9699-5f2d0ab365cf.png" alt="" />;
  }

  return (
    <div>
      <li>
        <a href={props.link}>
          {image}
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

export default Advice;


import React from 'react';
import './styles.css';
import heroImage from './heroImage.svg';
import locationIcon from './locationIcon.png';
import buildingIcon from './buildingIcon.png';
import dollarIcon from './dollarIcon.png';
import Select from 'react-select';
import { Link } from "react-router-dom";

const typeOptions = [
  { value: 'internship', label: 'Internship' },
  { value: 'fullTime', label: 'Full-time' },
  { value: 'partTime', label: 'Part-time' },
  { value: 'onCampus', label: 'On-campus' },
];

const industryOptions = [
  { value: 'art', label: 'Art' },
  { value: 'business', label: 'Business' },
  { value: 'finance', label: 'Finance' },
  { value: 'health', label: 'Health' },
];

class Jobs extends React.Component {
  state = {
    selectedOption: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      filteredItems: [],
      locationFilter: []
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(val) {
    console.log("change")
    var filteredItems = [];
    if (!val) { // if an element is unselected (small X), so the value is null...
      filteredItems = this.state.items;
      console.log("it's this")
    }
    else if (val.length === 0) {  // if all selections are cleared (the big X is clicked)...
      filteredItems = this.state.items; // reset items
    }
    else { // else if an element is selected...
      var i;
      for (i = 0; i < val.length; i++) {
        this.setState({ locationFilter: [...this.state.locationFilter, val[i].value] })
        filteredItems = filteredItems.concat(this.state.items.filter(function (item) {  // only show items equal to the value passed in
          return item["location"] === val[i].value;
        }));
      }
    } 
    this.setState({ filteredItems: filteredItems });
  }

  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = 'https://jobs.github.com/positions.json?utf8=%E2%9C%93&description=&location=california'
    fetch(proxyUrl + targetUrl)
      .then(blob => blob.json())
      .then(result => {
        this.setState({
          isLoaded: true,
          items: result,
          filteredItems: result,
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

  searchKey = (event) => {
    let total = 0;
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("jobList");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
    return total;
  }
  result(params) {
    console.log(params);
  }

  render() {
    const { error, isLoaded } = this.state;
    const { selectedOption } = this.state;
    const unique = [...new Set(this.state.items.map(item => item.location))].sort(); //creates array of unique locations
    var locationOptions = [];
    for (var i = 0; i < unique.length; i++) {  // adds array to object for select options
      locationOptions.push({ "value": unique[i], "label": unique[i] });
    }

    if (error) {
      return <div>Error!</div>;
    } else if (!isLoaded) {
      return <div></div>;
    } else {
      return (
        <div className="home">
          <header>
            <img className="hero" src={heroImage} alt="" height="375px" />
            <h1>Find your dream job and contact recruiters right away.</h1>
            {/* <HashLink to="/#jobsAnchor" className="btnPrimary">Explore jobs</HashLink>
            <a href="#" className="btnTertiary">Get alerts</a> */}
          </header>
          <div id="jobsAnchor" className="mainContent">
            <div className="jobFilters">
              <input type="search" id="searchInput" onKeyUp={this.searchKey} placeholder="Search by title, description, company, etc." name="search" />
              <label className="inline marginRight">Job types</label>
              <label className="inline marginRight">Industries</label>
              <label className="inline">Locations</label>
              <span className="inline marginRight"><Select
                value={selectedOption} isMulti
                placeholder={'All types'}
                onChange={this.handleChange}
                options={typeOptions}
                theme={theme => ({
                  ...theme,
                  colors: {
                    ...theme.colors,
                    primary25: '#9FE5D8',
                    primary: '#11BF9F',
                  },
                })}
              />
              </span>
              <span className="inline marginRight">
                <Select
                  value={selectedOption} isMulti
                  placeholder={'All industries'}
                  onChange={this.handleChange}
                  options={industryOptions}
                  theme={theme => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary25: '#9FE5D8',
                      primary: '#11BF9F',
                    },
                  })}
                />
              </span>
              <span className="inline">
                <Select
                  value={selectedOption} isMulti
                  placeholder={'All locations'}
                  onChange={this.handleChange}
                  options={locationOptions}
                  theme={theme => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary25: '#9FE5D8',
                      primary: '#11BF9F',
                    },
                  })}
                />
                <div>{this.state.filter}</div>
              </span>
            </div>
            <ul id="jobList" className="list">
              {this.state.filteredItems.map(job => <JobCard
                title={job.title}
                logo={job.company_logo}
                company={job.company}
                location={job.location}
                excerpt={job.description}
                pay={job.type}
                id={job.id}   // CHANGE LATER !
              //type={job.type} !
              />
              )}
            </ul>
          </div>
          <div className="sideBar">
          <div className="greenBackground">
            <h1>What's this?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
            </p>
            </div>
          </div>
          <div className="clear"></div>
        </div>);
    }
  }
}

function JobCard(props) {
  var excerpt = props.excerpt.replace(/<\/?[^>]+(>|$)/g, ""); // strip description excerpt of HTML tags
  return (
    <div>
      <li>
        <Link to={"/jobs/" + props.id}>
          <div className="companyLogo">
            <img src={props.logo} alt="" />
          </div>
          <div className="jobTitle">{props.title}</div>
          <div className="jobFacts">
            <span>
              <img className="icon" src={buildingIcon} alt="" />
              {props.company}
            </span>
            <span>
              <img className="icon" src={locationIcon} alt="" />
              {props.location}
            </span>
            <span>
              <img className="icon" src={dollarIcon} alt="" />
              {props.pay}
            </span>
          </div>
          <div className="jobExcerpt">
            {excerpt}
          </div>
        </Link>
      </li>
    </div>
  );
}

export default Jobs;

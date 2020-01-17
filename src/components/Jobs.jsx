import React from 'react';
import axios from 'axios';
import './styles.css';
import heroImage from './heroImage.svg';
import locationIcon from './locationIcon.png';
import buildingIcon from './buildingIcon.png';
import dollarIcon from './dollarIcon.png';
import Select from 'react-select';
import { Link } from "react-router-dom";
import { PostalCodeElement } from 'react-stripe-elements';

const typeOptions = [
  { value: 'Finances', label: 'Finances' },
  { value: 'Academics', label: 'Academics' },
  { value: 'Students', label: 'Students' },
  { value: 'Sports', label: 'Sports' },
];

const industryOptions = [
  { value: 'geospatial', label: 'Geospatial' },
  { value: 'categorial', label: 'Categorial' },
  { value: 'numerical', label: 'Numerical' },
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
    else { 
      // else if an element is selected...
      {/*var i;
      for (i = 0; i < val.length; i++) {
        this.setState({ locationFilter: [...this.state.locationFilter, val[i].value] })
        filteredItems = filteredItems.concat(this.state.items.filter(function (item) {  // only show items equal to the value passed in
          return item["tags"] === val[i].value;
        }));
      }
      */}
    }
    this.setState({ filteredItems: filteredItems });
  }

  componentDidMount() {
    axios.get('https://open-data-portal.s3.us-east-2.amazonaws.com/metadata.json')
      .then(result => {
        this.setState({
          isLoaded: true,
          items: result.data,
          filteredItems: result.data,
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
    const { selectedOption } = this.state;
    const uniqueLocations = [...new Set(this.state.items.map(item => item.location))].sort(); // creates array of unique locations
    var locationOptions = [];
    for (var i = 0; i < uniqueLocations.length; i++) {  // adds array to object for select options
      locationOptions.push({ "value": uniqueLocations[i], "label": uniqueLocations[i] });
    }

    const uniqueIndustries = [...new Set(this.state.items.map(item => item.industry))].sort(); // creates array of unique locations
    var industryOptions = [];
    for (var i = 0; i < uniqueIndustries.length; i++) {  // adds array to object for select options
      industryOptions.push({ "value": uniqueIndustries[i], "label": uniqueIndustries[i] });
    }
    return (
      <div>
        {/*
        <header>
          <img className="hero" src={heroImage} alt="" height="375px" />
          <h1>Find your dream job and contact recruiters right away.</h1>
          {/* <HashLink to="/#jobsAnchor" className="btnPrimary">Explore jobs</HashLink>
          <a href="#" className="btnTertiary">Get alerts</a>
        </header>
        */}
        <div className = "sideBar mobile">
          <div className="greenBackground">
            <h1>What's this?</h1>
            <p>The Stanford Open Data Portal structures and stores university data for public use.
            Use this page to search for datasets either through the search bar or delimited by the drop-down categories!
            </p>
          </div>
        </div>
        <div id="jobsAnchor" className="mainContent">
          <div className="jobFilters">
            <input type="search" id="searchInput" onKeyUp={this.searchKey} placeholder="Search by dataset category, description, etc." name="search" />
            <label className="inline marginRight">Categories</label>
            <label className="inline marginRight">Data Types</label>
            <span className="inline marginRight"><Select
              value={selectedOption} isMulti
              placeholder={'All categories'}
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
                placeholder={'All Data Types'}
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
          </div>
          <div className="lightTitle">{this.state.filteredItems.length} datasets found</div>
          <ul id="jobList" className="list">
            {this.state.filteredItems.map(post => <JobCard
              display_name={post.display_name}
              description={post.description}
              date={post.create_date}
              source={post.source_url}
              name={post.name}
              tag={post.tags}
            />
            )}
          </ul>
        </div>
        <div className="sideBar desktop">
          <div className="greenBackground">
            <h1>What's this?</h1>
            <p>Use this page to search for datasets either through the search bar or delimited by the drop-down categories!
            </p>
          </div>
        </div>
        <div className="clear"></div>
      </div>);
  }
}

function JobCard(props) {
  //var excerpt = props.excerpt.replace(/<\/?[^>]+(>|$)/g, ""); // strip description excerpt of HTML tags
  return (
    <div>
      <li>
        <Link to={"/datasets/" + props.name}>
          <div className="jobTitle">{props.display_name}</div>
          <div className="jobFacts">
            <span>
              <img className="icon" src={buildingIcon} alt="" />
              {props.display_name}
            </span>
            <span>
              <img className="icon" src={locationIcon} alt="" />
              {props.tag}
            </span>
            <span>
              <img className="icon" src={dollarIcon} alt="" />
              {props.date}
            </span>
          </div>
          <div className="jobInfo">
            {props.description}
          </div>
        </Link>
      </li>
    </div>
  );
}

export default Jobs;

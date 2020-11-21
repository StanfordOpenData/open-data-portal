import React from 'react';
import axios from 'axios';
import './styles.css';
import Fuse from "fuse.js";
import locationIcon from './static/locationIcon.png';
import buildingIcon from './static/buildingIcon.png';
import dollarIcon from './static/dollarIcon.png';
import Select from 'react-select';
import { Link } from "react-router-dom";

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

const sortOptions = [
  {value: 'alphabetical', label: 'A-Z'},
  {value: 'reverse', label: 'Z-A'}
]

class Datasets extends React.Component {
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
      locationFilter: [],
      n_datasets: 0,
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSortBy = this.handleSortBy.bind(this)
  }

  handleChange(val) {
    var filteredItems = [];
    if (!val) { // if an element is unselected (small X), so the value is null...
      filteredItems = this.state.items;
    }
    else if (val.length === 0) {  // if all selections are cleared (the big X is clicked)...
      filteredItems = this.state.items; // reset items

    }
    else { 
      //val is the set of filters
      const vals = val.map((v) => v.value);
      let items = this.state.items;
      let final = (vals === undefined || vals.length === 0) ? items :
      items.filter((post) => {
        return vals.includes(post.tags);
      });
      filteredItems = final;
    }
    this.setState(
      { filteredItems: filteredItems,
      });
  }

  handleSortBy(val) {
    let sortby = val.value;
    let sortedItems = [...this.state.items];
    let fsortedItems = [...this.state.filteredItems];
    if (sortby === 'alphabetical') {
      sortedItems.sort((p, q) => (p.display_name > q.display_name) ? 1 : (q.display_name > p.display_name) ? -1 : 0);
      fsortedItems.sort((p, q) => (p.display_name > q.display_name) ? 1 : (q.display_name > p.display_name) ? -1 : 0);
    }
    else if (sortby === 'reverse') {
      sortedItems.sort((p, q) => (p.display_name > q.display_name) ? -1 : (q.display_name > p.display_name) ? 1 : 0);
      fsortedItems.sort((p, q) => (p.display_name > q.display_name) ? -1 : (q.display_name > p.display_name) ? 1 : 0);
    }
    this.setState({items: sortedItems});
    this.setState({filteredItems: fsortedItems});
  }

  componentDidMount() {
    axios.get('https://ucopendata.s3.us-east-2.amazonaws.com/metadata.json')
      .then(result => {
        this.setState({
          isLoaded: true,
          items: result.data,
          filteredItems: result.data,
        });
      },
        (error) => {
					console.log(error)
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  searchKey = (e) => {
    const term = e.target.value;
    const options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "name",
        "description"
      ]
    };
    const fuse = new Fuse(this.state.items, options);
    const newFilteredItems = fuse.search(term);
    if ((typeof(term) === "undefined") || (term.length === 0)) {
      this.setState({
        filteredItems: this.state.items
      })} else {
      this.setState({
        filteredItems: newFilteredItems,
        });
      }
  }
  result(params) {
    console.log(params);
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <div>
        <div className = "sideBar desktop">
          <div className="greenBackground">
            <h1>What's this?</h1>
            <p>UChicago's Open Data Portal structures and stores university data for public use.
            Use this page to search for datasets either through the search bar or delimited by the drop-down categories!
            </p>
          </div>
        </div>
        <div id="datasetsAnchor" className="mainContent">
          <div className="datasetFilters">
            <input type="search" id="searchInput" onChange={e => this.searchKey(e)} placeholder="Search by dataset category, description, etc." name="search" />
            <div id="filterDropdowns">
              <div className="filter">
                <label className="marginRight">Categories</label>
                <span className="marginRight">
                  <Select
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
              </div>
              <div className="filter">
                <label className="marginRight">Data Types</label>
                <span className="marginRight">
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
              <div className="filter">
                <label className="marginRight">Sort By</label>
                <span className="marginRight">
                  <Select
                    value={selectedOption}
                    placeholder={'All Data Types'}
                    onChange={this.handleSortBy}
                    options={sortOptions}
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
            </div>
          </div>
          <div className="lightTitle">{this.state.filteredItems.length} datasets found</div>
          <ul id="datasetList" className="list">
            {this.state.filteredItems.map(post => 
            <div>
              <Link to={{
                pathname: '/datasets/' + post.name,
                state: {
                  data: post,
                }
              }}></Link>
              <DatasetCard
                display_name={post.display_name}
                description={post.description}
                date={post.create_date}
                source_url={post.source_url}
                name={post.name}
                tag={post.tags}
                source={post.source}
              />
            </div>
            )}
          </ul>
        </div>
        <div className="clear"></div>
      </div>);
  }
}

function DatasetCard(props) {
  //var excerpt = props.excerpt.replace(/<\/?[^>]+(>|$)/g, ""); // strip description excerpt of HTML tags
  return (
    <div>
      <li>
        <Link to={{
          pathname: "/datasets/" + props.name,
          state: {
              data: props,   
          }
        }}>
          <div className="datasetTitle">{props.display_name}</div>
          <div className="datasetFacts">
            <span>
              <img className="icon" src={dollarIcon} alt="" />
              {props.tag}
            </span>
            <span>
              <img className="icon" src={locationIcon} alt="" />
              {props.date}
            </span>
            <span>
              <img className="icon" src={buildingIcon} alt="" />
              {props.source}
            </span>
          </div>
          <div className="datasetInfo">
            {props.description}
          </div>
        </Link>
      </li>
    </div>
  );
}

export default Datasets;

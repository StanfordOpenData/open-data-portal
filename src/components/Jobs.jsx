import React from 'react';
import './styles.css';
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

const locationOptions = [
  { value: 'atlanta', label: 'Atlanta, GA' },
  { value: 'boston', label: 'Boston, MA' },
  { value: 'chicago', label: 'Chicago, IL' },
  { value: 'denver', label: 'Denver, CO' },
];

var data = [];

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

  handleChange = selectedOption => {
    /*
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
    */
  };

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
    const { error, isLoaded, items } = this.state;
    const { selectedOption } = this.state;

    if (error) {
      return <div>Error!</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div className="mainContent">
            <div className="jobFilters">
              <input type="search" id="searchInput" onKeyUp={this.searchKey} placeholder="Search by title, description, company, etc." name="search" />
              <span className="inline marginRight filterLabel">Job types</span>
              <span className="inline marginRight filterLabel">Industries</span>
              <span className="inline filterLabel">Locations</span>
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
              </span>
            </div>
            <ul id="jobList">
              {this.state.items.map(job => <JobCard
                title={job.title}
                company={job.company}
                location={job.location}
                description={job.description}
                pay={job.type}
                id={job.id}   // CHANGE LATER !
              //type={job.type} !
              />
              )}
            </ul>
          </div>
          <div className="sideBar">
            <p>Tell us what you’re looking for and we’ll notify you of new jobs!</p>
            <a href="#" class="btnPrimary">Get alerts</a>
          </div>
        </div>);
    }
  }
}

function JobCard(props) {
  return (
    <div>
      <li>
        <Link to={"/jobs/" + props.id}>
          <div className="companyLogo">
            <img src="https://user-images.githubusercontent.com/1689183/55673023-25239a00-5857-11e9-9699-5f2d0ab365cf.png" alt="" />
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
            {props.description}
          </div>
        </Link>
      </li>
    </div>
  );
}

/*
class JobDetails extends React.Component {

  render() {
    const url = this.props.match.params.id;
    const PageComponent = items.find(page => page.link === url).property;
    return (<PageComponent />);
  }
}
*/
export default Jobs;

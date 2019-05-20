import React from 'react';
import './App.css';
import locationIcon from './locationicon.png';
import buildingIcon from './building.png';
import clockIcon from './clock.png';
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      filteredItems: [],
      filter: this.props.filter
    };
  }

  componentDidMount() {
    fetch("https://jobs.search.gov/jobs/search.json?query=nursing+jobs")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });

          {/* divide jobs into different types using minimum salary key -- need to change later */}
          if (this.state.filter === "internships")
            this.setState({
              filteredItems: result.filter(item => item.minimum < 54000)
            });
          else if (this.state.filter === "full-time")
            this.setState({
              filteredItems: result.filter(item => item.minimum > 58000)
            });
          else if (this.state.filter === "part-time")
            this.setState({
              filteredItems: result.filter(item => item.minimum < 58000 && item.minimum > 54000)
            });
          else {
            this.setState({
              filteredItems: this.state.items
            })
          }
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
    if (error) {
      return <div>Error!</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="wrapper">
          {this.state.filteredItems.map(job => <JobCard
            title={job.position_title}
            company={job.organization_name}
            location={job.locations}
            deadline={job.start_date}
            type={job.minimum} />
          )}
        </div >);
    }
  }
}

function JobCard(props) {
  var wage = parseInt(props.type, 10); 
  return (
    <div>
      <Link to={"/jobs/" + props.title} className="link">
        <div>
          <div className="company-logo">
            <img src="https://user-images.githubusercontent.com/1689183/55673023-25239a00-5857-11e9-9699-5f2d0ab365cf.png" alt="" />
          </div>

          <div className="job-info">
            <p className="job-title">{props.title}</p>
            <div className="job-details">
              <span className="job-type">
                <p>
                  {wage > 58000 ? <span className="full-time">Full-time</span> : wage > 54000 ? <span className="part-time">Part-time</span> : <span className="internship">Internship</span>}
                </p>
              </span>
              <p>
                <img className="icon" src={buildingIcon} alt="" />
                {props.company}
              </p>

              <p>
                <img className="icon" src={locationIcon} alt="" />
                {props.location}
              </p>
              <p>
                Posted on {props.deadline}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}


export default Home;

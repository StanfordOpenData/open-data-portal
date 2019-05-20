import React, { Component } from 'react';
import Form from "react-jsonschema-form";
import './index.css';
import { Switch, HashRouter, Route } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import JobDetails from './JobDetails';
import PostJob from './PostJob';

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <NavBar />
            <Switch>
              <Route exact path='/subscribe' component={Subscribe} />
              <Route exact path='/post-job' component={PostJob} />
              <Route exact path='/' component={All} />
              <Route exact path='/internships' component={Internships} />
              <Route exact path='/full-time' component={FullTime} />
              <Route exact path='/part-time' component={PartTime} />
              <Route path='/jobs/:id' component={JobDetails} />
            </Switch>
            <Footer />
          </div>
        </HashRouter>
      </div>
    );
  }
}

class Subscribe extends React.Component {
  render() {
    let schema = {
      "title": "Subscribe to receive notifications about new jobs",
      "type": "object",
      "required": [
        "email"
      ],
      "properties": {
        "email": {
          "type": "string",
          "title": "Email"
        },
        "jobTypesList": {
          "type": "array",
          "title": "I want to be notified about these types of jobs:",
          "items": {
            "type": "string",
            "enum": ["Internships", "Full-time", "Part-time"]
          },
          "uniqueItems": true
        }
      }
    };
    let uiSchema = {
      "classNames": "my-object",
      "email": {
        "ui:placeholder": "example@email.com",
        "ui:options": {
          "inputType": "email"
        }
      },
      "jobTypesList": {
        "ui:widget": "checkboxes",
        "classNames": "checkbox-list"
      },
    }
    return (<div className="wrapper">
      <Form schema={schema} uiSchema={uiSchema} onSubmit={e => console.log(e.formData)} />
    </div>
    );
  }
}

function All() {
  return (
    <div>
      <Home filter="none" />
    </div>
  );
}

function Internships() {
  return (
    <Home filter="internships" />
  );
}

function FullTime() {
  return (
    <Home filter="full-time" />
  );
}

function PartTime() {
  return (
    <Home filter="part-time" />
  );
}

function Footer() {
  return (
    <div className="footer">
      Created by The Stanford Daily
    </div>
  )
}

export default App;
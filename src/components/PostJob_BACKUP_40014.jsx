import React, { Component } from 'react';
import Form from "react-jsonschema-form";

class PostJob extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    let data = event.formData;
<<<<<<< HEAD
    fetch('http://localhost.stanforddaily.com/wp-json/tsd/v1/jobs/', {
=======
    fetch('http://localhost.stanforddaily.com/wp-json/tsd/v1/jobs', {
>>>>>>> master
      "method": "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      "body": JSON.stringify(data)
    }).then(e => e.json()).then(e => console.log(e));
    this.props.history.push('/payment')
  }

  render() {
    let schema = {
      "title": "Create your listing",
      "type": "object",
      "required": [
        "jobTitle",
        "companyName",
        "jobLocation",
        "jobType",
        "jobDescription",
        "appInstructions"
      ],
      "properties": {
        "jobTitle": {
          "type": "string",
          "title": "Job title",
          "default": "Engineer"
        },
        "companyName": {
          "type": "string",
          "title": "Company name",
          "default": "Google"
        },
        "companySite": {
          "type": "string",
          "title": "Company website link",
          "default": "google.com"
        },
        "companyLogo": {
          "type": "string",
          "format": "data-url",
          "title": "Company logo image"
        },
        "jobLocation": {
          "type": "string",
          "title": "Location",
          "default": "San Francisco, CA"
        },
        "jobType": {
          "type": "string",
          "title": "Type of role",
          "enum": ["Internship", "Full-time", "Part-time", "On-campus"],
          "default": "Internship"
        },
        /*
        "pay": {
            "type": "string",
            "title": "Pay",
            "default": "Unpaid"
          },
        */
        "jobDescription": {
          "type": "string",
          "title": "Job description",
          "default": "Make things"
        },
        /*
        "schoolYear": {
          "type": "array",
          "title": "Preferred school years",
          "items": {
            "type": "string",
            "enum": [
              "Freshman",
              "Sophomore",
              "Junior",
              "Senior",
              "Masters",
              "PhD"
            ]
          },
          "uniqueItems": true,
          "default": ["Freshman"]
        },
        */
        "appInstructions": {
          "type": "string",
          "title": "Instructions for applying (must include email for applicants to contact)",
          "default": "Send resume"
        },
        /*
        "jobDeadline": {
          "type": "string",
          "format": "date",
          "title": "Deadline to apply",
        },
      */
      }
    };
    let uiSchema = {
      "jobTitle": {
        "ui:placeholder": "Software Engineer Intern"
      },
      "companyName": {
        "ui:placeholder": "E-Solutions"
      },
      "companySite": {
        "ui:placeholder": "esolutions.com"
      },
      "companyLogo": {
        "classNames": "upload"
      },
      "jobLocation": {
        "ui:placeholder": "City, State",
        "ui:placeholder": "Atlanta, GA"
      },
      "jobType": {
        "ui:placeholder": "Choose one"
      },
      "jobDescription": {
        "ui:widget": "textarea"
      },
      "appInstructions": {
        "ui:widget": "textarea"
      },
    }
    return (<div>
      <Form className="postJob" schema={schema} uiSchema={uiSchema} onSubmit={this.handleSubmit} />
    </div>
    );
  }
}

export default PostJob;
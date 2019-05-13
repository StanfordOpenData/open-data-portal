import React, { Component } from 'react';
import Form from "react-jsonschema-form";

class PostJob extends React.Component {
  render() {
    let schema = {
      "title": "Post a job",
      "description": "Tell us about the job",
      "type": "object",
      "required": [
        "jobTitle",
        "companyName",
        "jobLocation",
        "jobType",
        "jobDescription",
        "email"
      ],
      "properties": {
        "jobTitle": {
          "type": "string",
          "title": "Job title"
        },
        "companyName": {
          "type": "string",
          "title": "Company name"
        },
        "jobLocation": {
          "type": "string",
          "title": "Location"
        },
        "jobType": {
          "type": "string",
          "title": "Employment type",
          "enum": ["Internship", "Full-time", "Part-time"]
        },
        "jobDescription": {
          "type": "string",
          "title": "Job description"
        },
        "jobDeadline": {
          "type": "string",
          "format": "date",
          "title": "Deadline to apply"
        },
        "email": {
          "type": "string",
          "title": "Email for applicants to contact"
        }
      }
    };
    let uiSchema = {
      "jobTitle": {
        "ui:placeholder": "Job title"
      },
      "companyName": {
        "ui:placeholder": "Company name"
      },
      "jobLocation": {
        "ui:placeholder": "City, State"
      },
      "jobType": {
        "ui:placeholder": "Choose one"
      },
      "jobDescription": {
        "ui:widget": "textarea"
      },
      "email": {
        "ui:placeholder": "example@email.com",
        "ui:options": {
          "inputType": "email"
        }
      }
    }
    return (<div className="wrapper">
      <Form schema={schema} uiSchema={uiSchema} onSubmit={e => console.log(e.formData)} />
    </div>
    );
  }
}

export default PostJob;
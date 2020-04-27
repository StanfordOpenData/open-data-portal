## Overview
The Stanford Open Data Portal is a serverless data store for Stanford datasets. We store our data in AWS and have a React frontend. Feel free to fork for your own campus open data portal!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Data Collection
We obtain or data from a number of locations including
- scraping/downloading existing online university datasets
- contacing university departments and other institutions (e.g. police) for unreleased data
- crowdsourcing data collection through our submit form
- crowdsourcing data collection from Stanford Daily journalists and other campus news organiztaions

## Dataset Submission
- Data can be submitted through a simple [Google Form](https://forms.gle/MY4ScX4MbTFaXLCRA).

## Open Data Pipeline
Organizing metadata and retrieving datasets from a data store can be a complicated process. We use the following workflow:
- Store all dataset metadata in a google sheet. Metadata include a unique article identifier, article name, data created, date collected, source, source url, description, tags, slugs of stories that used the dataset.
- Write a Python script to do the following: Call the Google Sheets API to pull the sheet. Convert the sheet into a .json file. Upload the metadata.json file to an AWS container using the AWS API.
- Pull the metadata from the website codebase in React using the AWS API. Populate the datasets page in the website with metadata as needed.

We also store our datasets in AWS. These datasets are made publicly callable and are accessed through the React frontend by storing a fragment of the url in the metadata.

## Frontend Structure
We have the following types of pages/components on our website.
### Landing Page
Our home page gives an overview of the website, highlighting some datasets and data-viz stories.

### About Us
This page provides some background on the team working on this website.

### Datasets
This page contains a comprehensive list of all the datasets on our site. Users can also search directly for a dataset or narrow down their choices by category. 

### Dataset Details
There is a dataset details page for each dataset. These pages contain more detailed information about the dataset, and provide links to download the dataset from the original source and from our cleaned CSV version. We have also added dataset preview and links to stories that use the dataset.

### Contribute
We have a form that allows users of our site to leave us messages. The form responses are then automatically sent to our email address by using the [EmailJS](https://www.emailjs.com/) service. 

Additionally, we embedded a [Box](https://www.box.com/home) folder onto this page. This allows users to submit dataset file directly to us, while ensuring that they cannot access (and possibly delete) other files within our folder. 

Note: We intially tried to allow submission of files through our form, but there is a limit on the size of data that passes through the emailjs service.

### Other
All of these pages share the same CSS template (styles.css) and all of the photos used on our site are under the static folder.

## Feature Spotlights
### Searching Datasets
On the datasets page, we have a search bar that enables users to search for datasets by category, keyword, date, location, etc. This was implemented using the [Fuse.js](https://fusejs.io/) service. 

### Articles Featuring Open Data
On our home page, we have a section highlighting articles written in The Stanford Daily that use or feature datasets in our portal. To do this, we pull the article data by using the [WordPress REST API](https://developer.wordpress.org/rest-api/) to interact with The Stanford Daily's WordPress site as JSON.

### Stories Using this Data
In the dataset details page for a particular dataset, we use the same method described above to highlight Stanford Daily articles that use or feature the dataset.

### Fun Data Facts
On our home page, we have a subsection to feature fun facts about Stanford data. Clicking on the subsection will display a new random data fact.

## Future Plans
Our goals include the following:
- adding and maintaining more datasets
- creating and adding custom datasets including polling data on the Stanford student body
- feeding a steady pipeline of interesting stories using open data. Check out some of them on the Daily's data team [https://stanforddaily.com/category/@94305/](page!)
- Spreading open data to other campuses by supporting other student organizations in their creation of campus open data portals.

## Contact Us!
If you're interesting in creating your own open data project, feel free to contact us via email, stanfordopendataproject@gmail.com.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

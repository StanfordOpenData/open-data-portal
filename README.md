## Overview
The open data portal is a serverless data store for Stanford datasets. We store our data in AWS and have a React frontend. Feel free to fork for your own campus open data portal!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Data Collection

## Dataset Submission 

## Open Data Pipeline

## Frontend Structure
We have the following types of pages/components on our website.
### Landing Page
Our home page gives an overview of the website, highlighting some datasets and data-viz stories.

### About Us
This page provides some background on the team working on this website.

### [Datasets](http://opendata.stanforddaily.com/#/datasets)
This page contains a comprehensive list of all the datasets on our site. Users can also search directly for a dataset or narrow down their choices by category. 

### Dataset Details
There is a dataset details page for each dataset. These pages contain more detailed information about the dataset, and provide links to download the dataset from the original source and from our cleaned CSV version. We have also added dataset preview and links to stories that use the dataset.

### Contribute
We have a form that allows users of our site to leave us messages. The form responses are then automatically sent to our email address by using the [emailjs](https://www.emailjs.com/) service. 

Additionally, we embedded a [Box](https://www.box.com/home) folder onto this page. This allows users to submit dataset file directly to us, while ensuring that they cannot access (and possibly delete) other files within our folder. 

Note: We intially tried to allow submission of files through our form, but there is a limit on the size of data that passes through the emailjs service.

### Other
All of these pages share the same CSS template (styles.css) and all of the photos used on our site are under the static folder.

## Feature Spotlights

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

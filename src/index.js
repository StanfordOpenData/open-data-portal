import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Link, Route } from "react-router-dom";

const Board = () => (
	<div>
		<BrowserRouter>
			<div>
				<Route path="/" component={App} />
			</div>
		</BrowserRouter>
	</div>
);


function TestJob() {
	return <h1>Yup!</h1>;
}
ReactDOM.render(<Board />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

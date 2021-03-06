import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, browserHistory } from 'react-router';

import AdminBox from './adminBox.js'

import '../css/base.css';

ReactDOM.render(
	<AdminBox url="/api/jobs" pollInterval={2000}/>,
	document.getElementById('content')
);
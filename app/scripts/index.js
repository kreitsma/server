import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, browserHistory } from 'react-router';

import AdminBox from './adminBox.js'

import '../css/base.css';

ReactDOM.render(
	<AdminBox/>,
	document.getElementById('content')
);
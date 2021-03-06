import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history'
import { Router } from 'react-router-dom'
import App from './App.jsx';

const history = createBrowserHistory()

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);



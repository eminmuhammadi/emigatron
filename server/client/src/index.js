import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap';
import 'popper.js'

import Routes from './Routes';
import "./assets/global.scss";

ReactDOM.render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>,
  document.getElementById('emigatron-app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

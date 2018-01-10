import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import './style/sketchy-bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();

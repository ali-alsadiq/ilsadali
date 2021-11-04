import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import TagManager from 'react-gtm-module'
import App from './router/App';
import './styles/styles.scss';

const tagManagerArgs = {
  gtmId: 'GTM-PPR8TGQ'
}

TagManager.initialize(tagManagerArgs)

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/">
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

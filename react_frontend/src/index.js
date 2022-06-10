import React from 'react';
import ReactDOM from 'react-dom';
import store from './utils/store';
import { Provider } from 'react-redux';
import App from './components/App';
import {BrowserRouter as Router} from "react-router-dom"

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
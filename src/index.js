import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/global'
import App from './App';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
  <GlobalStyles/>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
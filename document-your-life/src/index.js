/* eslint-disable react/jsx-key */
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter >
        <App />
      </BrowserRouter >
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const appComp = new App();
const appElement = appComp.render();
ReactDOM.render(
  appElement,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalSytle from './GlobalStyle';


ReactDOM.render(
  <React.StrictMode>
    <GlobalSytle/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



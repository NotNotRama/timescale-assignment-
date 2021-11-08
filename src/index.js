import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GlobalStlye from './globalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStlye />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../application/App';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.hydrate(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

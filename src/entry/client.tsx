import React from 'react';
import ReactDOM from 'react-dom';

import { App } from '../application/App';

ReactDOM.hydrate(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

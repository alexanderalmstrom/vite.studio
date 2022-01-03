import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../application/App';
import { HelmetProvider } from 'react-helmet-async';

export function render(url: string) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  );
}

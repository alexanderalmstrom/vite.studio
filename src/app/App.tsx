import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';

import './App.scss';

export default function App() {
  return (
    <React.StrictMode>
      <HelmetProvider>
        <Layout>
          <div className="app h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl">vite.studio</h1>
          </div>
        </Layout>
      </HelmetProvider>
    </React.StrictMode>
  );
}

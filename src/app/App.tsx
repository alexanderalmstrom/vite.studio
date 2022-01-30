import './App.scss';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Page from './components/Page';

export default function App() {
  return (
    <React.StrictMode>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page/:slug" element={<Page />} />
        </Routes>
      </HelmetProvider>
    </React.StrictMode>
  );
}

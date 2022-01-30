import './App.scss';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Page from './components/Page';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <React.StrictMode>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page/:slug" element={<Page />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </HelmetProvider>
    </React.StrictMode>
  );
}

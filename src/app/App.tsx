import './App.scss';
import React, { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import { contentful } from '../services/contentful';
import Home from './pages/Home';
import About from './pages/About';

export default function App() {
  const [routes, setRoutes] = useState<Array<Object>>([]);

  useEffect(() => {
    async function fetchRoutes() {
      const { items } = await contentful.getEntries({
        content_type: 'page',
      });

      setRoutes(items);
    }

    fetchRoutes();
  }, []);

  return (
    <React.StrictMode>
      <HelmetProvider>
        {routes.map(({ fields, sys }: any) => {
          return <div key={sys.id}>{fields.title}</div>;
        })}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HelmetProvider>
    </React.StrictMode>
  );
}

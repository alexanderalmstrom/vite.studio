import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Loading from './components/Loading';

const Layout = React.lazy(() => import('./components/Layout'));

import './App.scss';

export default function App() {
  return (
    <React.StrictMode>
      <HelmetProvider>
        <Suspense fallback={<Loading />}>
          <Layout>
            <div className="app h-screen flex flex-col justify-center items-center">
              <h1 className="text-4xl">vite.studio</h1>
            </div>
          </Layout>
        </Suspense>
      </HelmetProvider>
    </React.StrictMode>
  );
}

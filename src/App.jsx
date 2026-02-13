import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home.jsx'));
const PortfolioAbdullah = lazy(() => import('./pages/PortfolioAbdullah.jsx'));
const PortfolioHammad = lazy(() => import('./pages/PortfolioHammad.jsx'));
const PortfolioSaad = lazy(() => import('./pages/PortfolioSaad.jsx'));

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-background text-slate-300 text-sm">
          Loading EcomAbdullah...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/abdullah" element={<PortfolioAbdullah />} />
        <Route path="/portfolio/hammad" element={<PortfolioHammad />} />
        <Route path="/portfolio/saad" element={<PortfolioSaad />} />
      </Routes>
    </Suspense>
  );
};

export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesOverviewPage from '@/pages/ServicesOverviewPage';
import Service3DPrintingPage from '@/pages/Service3DPrintingPage';
import ServiceCADPage from '@/pages/ServiceCADPage';
import ServiceCNCPage from '@/pages/ServiceCNCPage';
import ServiceLaserPage from '@/pages/ServiceLaserPage';
import PortfolioPage from '@/pages/PortfolioPage';
import ContactPage from '@/pages/ContactPage';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from '@/components/ScrollToTop';
import { servicePaths } from '@/config/paths'; // Updated import

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesOverviewPage />} />
          <Route path={servicePaths['3d-printing']} element={<Service3DPrintingPage />} />
          <Route path={servicePaths['cad-design']} element={<ServiceCADPage />} />
          <Route path={servicePaths['cnc-machining']} element={<ServiceCNCPage />} />
          <Route path={servicePaths['laser-cutting']} element={<ServiceLaserPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
      <Toaster />
    </Router>
  );
}

export default App;

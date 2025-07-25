import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import WebsiteMigrations from './pages/WebsiteMigrations';
import WordPressDevelopment from './pages/WordPressDevelopment';
import WebsiteMaintenance from './pages/WebsiteMaintenance';
import SpeedOptimization from './pages/SpeedOptimization';
import SecurityServices from './pages/SecurityServices';
import Sitemap from './pages/Sitemap';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services/website-migrations" element={<WebsiteMigrations />} />
            <Route path="/services/wordpress-development" element={<WordPressDevelopment />} />
            <Route path="/services/website-maintenance" element={<WebsiteMaintenance />} />
            <Route path="/services/speed-optimization" element={<SpeedOptimization />} />
            <Route path="/services/security-services" element={<SecurityServices />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
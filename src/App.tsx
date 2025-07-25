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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/website-migrations" element={<WebsiteMigrations />} />
            <Route path="/services/wordpress-development" element={<WordPressDevelopment />} />
            <Route path="/services/website-maintenance" element={<WebsiteMaintenance />} />
            <Route path="/services/speed-optimization" element={<SpeedOptimization />} />
            <Route path="/services/security-services" element={<SecurityServices />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, ChevronDown, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    { name: 'Website Migrations', path: '/services/website-migrations', description: 'Seamless site transfers with zero downtime' },
    { name: 'WordPress Development', path: '/services/wordpress-development', description: 'Custom WordPress solutions' },
    { name: 'Website Maintenance', path: '/services/website-maintenance', description: '24/7 monitoring and updates' },
    { name: 'Speed Optimization', path: '/services/speed-optimization', description: 'Boost performance by 300%' },
    { name: 'Security Services', path: '/services/security-services', description: 'Advanced protection & monitoring' },
  ];

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (servicesRef.current && dropdownRef.current) {
        const servicesRect = servicesRef.current.getBoundingClientRect();
        const dropdownRect = dropdownRef.current.getBoundingClientRect();
        
        const isInServices = e.clientX >= servicesRect.left && e.clientX <= servicesRect.right &&
                           e.clientY >= servicesRect.top && e.clientY <= servicesRect.bottom;
        
        const isInDropdown = e.clientX >= dropdownRect.left && e.clientX <= dropdownRect.right &&
                           e.clientY >= dropdownRect.top && e.clientY <= dropdownRect.bottom;
        
        if (!isInServices && !isInDropdown) {
          setIsServicesOpen(false);
        }
      }
    };

    if (isServicesOpen) {
      document.addEventListener('mousemove', handleMouseLeave);
      return () => document.removeEventListener('mousemove', handleMouseLeave);
    }
  }, [isServicesOpen]);

  return (
    <header className="bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+44 20 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@tapdev.co.uk</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>🚀 Free consultation for new clients - Limited time!</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="container-custom">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Code className="h-10 w-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl group-hover:bg-blue-300/30 transition-all duration-300"></div>
            </div>
            <div>
              <span className="text-3xl font-bold gradient-text">TapDev</span>
              <div className="text-xs text-gray-400 -mt-1">Professional Web Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-all duration-300 hover:text-blue-400 ${
                location.pathname === '/' ? 'text-blue-400' : 'text-gray-300'
              }`}
            >
              Home
            </Link>
            
            <div 
              className="relative"
              ref={servicesRef}
              onMouseEnter={() => setIsServicesOpen(true)}
            >
              <button 
                className="flex items-center space-x-1 font-medium text-gray-300 hover:text-blue-400 transition-all duration-300"
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div 
                  ref={dropdownRef}
                  className="absolute top-full left-0 mt-2 w-80 glass-effect rounded-2xl shadow-2xl border border-gray-700 py-4 z-50"
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-6 py-3 hover:bg-white/5 transition-all duration-300 group"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="font-medium text-gray-200 group-hover:text-blue-400 transition-colors duration-300">
                        {service.name}
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        {service.description}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/contact" 
              className="font-medium text-gray-300 hover:text-blue-400 transition-all duration-300"
            >
              Contact
            </Link>
            
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-glow"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="space-y-2">
                <span className="font-medium text-gray-300">Services</span>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                to="/contact" 
                className="font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
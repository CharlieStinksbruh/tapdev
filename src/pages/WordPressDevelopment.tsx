import React from 'react';
import { Code2, Palette, Smartphone, Search, ShoppingCart, Users, CheckCircle, Zap } from 'lucide-react';

const WordPressDevelopment = () => {
  const services = [
    {
      icon: <Code2 className="h-8 w-8 text-blue-600" />,
      title: 'Custom WordPress Development',
      description: 'Bespoke WordPress solutions tailored to your unique business requirements and brand identity.'
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-600" />,
      title: 'Theme Development & Customization',
      description: 'Custom themes and extensive theme modifications to match your exact design specifications.'
    },
    {
      icon: <Smartphone className="h-8 w-8 text-green-600" />,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring your website looks perfect on all devices and screen sizes.'
    },
    {
      icon: <Search className="h-8 w-8 text-orange-600" />,
      title: 'SEO Optimization',
      description: 'Built-in SEO best practices, optimized code structure, and search engine friendly URLs.'
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-red-600" />,
      title: 'WooCommerce Development',
      description: 'Complete e-commerce solutions with custom functionality and payment gateway integrations.'
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: 'Membership Sites',
      description: 'User registration, login systems, and membership-based content management solutions.'
    }
  ];

  const features = [
    'Custom Post Types & Fields',
    'Plugin Development',
    'API Integrations',
    'Performance Optimization',
    'Security Hardening',
    'Multilingual Support',
    'Database Optimization',
    'Third-party Integrations'
  ];

  const process = [
    {
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, target audience, and business goals to create a comprehensive development strategy.'
    },
    {
      title: 'Design & Wireframing',
      description: 'Creating detailed wireframes and design mockups that align with your brand and user experience goals.'
    },
    {
      title: 'Development & Testing',
      description: 'Clean, efficient code development with rigorous testing across multiple devices and browsers.'
    },
    {
      title: 'Launch & Optimization',
      description: 'Smooth deployment with performance optimization and ongoing support to ensure optimal functionality.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              WordPress Development
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                That Drives Business Growth
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-4xl mx-auto">
              Custom WordPress solutions, theme development, and e-commerce platforms that deliver exceptional user experiences and drive conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-800/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive WordPress Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From simple websites to complex e-commerce platforms, we deliver WordPress solutions that scale with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass-effect p-8 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced WordPress Features
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We leverage the full power of WordPress to create sophisticated websites with custom functionality that meets your specific business needs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Why Choose WordPress?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Zap className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">Flexible & Scalable:</strong> <span className="text-gray-300">Grows with your business from simple blogs to complex applications</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Zap className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">SEO-Friendly:</strong> <span className="text-gray-300">Built-in SEO capabilities help improve search engine rankings</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Zap className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">User-Friendly:</strong> <span className="text-gray-300">Easy content management for non-technical users</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-800/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach that ensures your WordPress project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Recent WordPress Projects
            </h2>
            <p className="text-xl text-gray-300">
              See how we've helped businesses transform their online presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    E-commerce Platform
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Custom WooCommerce solution with advanced filtering and checkout optimization.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    View Case Study →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your WordPress Site?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Let's discuss your project requirements and create a WordPress solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
            >
              <span>Get Project Quote</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Schedule Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WordPressDevelopment;
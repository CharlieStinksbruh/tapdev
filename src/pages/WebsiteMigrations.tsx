import React from 'react';
import { CheckCircle, ArrowRight, Clock, Shield, Zap, Users, Download, Upload } from 'lucide-react';

const WebsiteMigrations = () => {
  const benefits = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: 'Zero Downtime Guaranteed',
      description: 'We ensure your website stays online throughout the entire migration process'
    },
    {
      icon: <Zap className="h-6 w-6 text-green-600" />,
      title: 'Lightning Fast Performance',
      description: 'Experience up to 300% faster loading speeds on modern hosting infrastructure'
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: 'SEO Preservation',
      description: 'Maintain your search rankings with proper redirects and SEO best practices'
    }
  ];

  const migrationTypes = [
    'WordPress to WordPress',
    'Wix to WordPress',
    'Squarespace to WordPress',
    'Shopify to WooCommerce',
    'Custom CMS to WordPress',
    'HTML Sites to WordPress'
  ];

  const process = [
    {
      step: '1',
      title: 'Site Analysis & Planning',
      description: 'We analyze your current website structure, content, and hosting environment to create a detailed migration plan.'
    },
    {
      step: '2',
      title: 'Backup & Preparation',
      description: 'Complete backup of your existing site and preparation of the new hosting environment with optimal configurations.'
    },
    {
      step: '3',
      title: 'Content Migration',
      description: 'Careful transfer of all content, media files, databases, and configurations to the new platform.'
    },
    {
      step: '4',
      title: 'Testing & Optimization',
      description: 'Thorough testing of all functionality, performance optimization, and SEO configuration setup.'
    },
    {
      step: '5',
      title: 'Go Live & Support',
      description: 'Seamless DNS switch with monitoring and immediate support to ensure everything runs perfectly.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Seamless Website Migrations
                <span className="block text-yellow-400">Zero Downtime Guaranteed</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Professional website migration services that preserve your SEO rankings, ensure zero data loss, and deliver improved performance on modern hosting platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                  Get Migration Quote
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <Download className="h-8 w-8 text-yellow-400" />
                    <span className="text-lg font-medium">Old Site</span>
                  </div>
                  <ArrowRight className="h-6 w-6 text-green-400" />
                  <div className="flex items-center space-x-3">
                    <Upload className="h-8 w-8 text-green-400" />
                    <span className="text-lg font-medium">New Platform</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>All content preserved</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>SEO rankings maintained</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span>Zero downtime process</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Migration Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven migration process ensures your website transition is smooth, secure, and optimized for better performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Migration Types We Support
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {migrationTypes.map((type, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our 5-Step Migration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures every aspect of your website is carefully migrated with minimal risk and maximum efficiency.
            </p>
          </div>

          <div className="space-y-8">
            {process.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Sites Migrated</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-200">Uptime Maintained</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">48hrs</div>
              <div className="text-blue-200">Average Migration Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-200">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Migrate Your Website?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get a free migration consultation and detailed quote. Our experts will analyze your current site and provide a comprehensive migration plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Get Free Quote
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteMigrations;
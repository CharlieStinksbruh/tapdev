import React from 'react';
import { Shield, Clock, Zap, Users, CheckCircle, AlertTriangle, TrendingUp, Settings } from 'lucide-react';

const WebsiteMaintenance = () => {
  const maintenancePlans = [
    {
      name: 'Essential Care',
      price: '£49',
      description: 'Perfect for small business websites',
      features: [
        'Weekly automated backups',
        'Plugin & theme updates',
        'Security monitoring',
        'Uptime monitoring',
        'Basic performance checks',
        'Email support',
        'Monthly reports'
      ],
      popular: false,
      color: 'blue'
    },
    {
      name: 'Professional Care',
      price: '£89',
      description: 'Ideal for growing businesses',
      features: [
        'Daily automated backups',
        'Priority plugin & theme updates',
        'Advanced security scans',
        '24/7 uptime monitoring',
        'Performance optimization',
        'Content updates (2/month)',
        'Priority email support',
        'Detailed monthly reports'
      ],
      popular: true,
      color: 'purple'
    },
    {
      name: 'Enterprise Care',
      price: '£159',
      description: 'Complete solution for established businesses',
      features: [
        'Real-time backups',
        'Immediate security responses',
        'Advanced threat protection',
        'CDN management',
        'Database optimization',
        'Content updates (5/month)',
        'Phone & WhatsApp support',
        'Custom reporting dashboard'
      ],
      popular: false,
      color: 'green'
    }
  ];

  const services = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Security Monitoring',
      description: 'Continuous monitoring for malware, vulnerabilities, and suspicious activities with immediate response protocols.'
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: 'Performance Optimization',
      description: 'Regular speed audits, image optimization, and caching improvements to maintain peak website performance.'
    },
    {
      icon: <Settings className="h-8 w-8 text-purple-600" />,
      title: 'Updates & Patches',
      description: 'Timely WordPress core, plugin, and theme updates with compatibility testing before implementation.'
    },
    {
      icon: <Clock className="h-8 w-8 text-green-600" />,
      title: 'Backup Management',
      description: 'Automated daily backups with secure offsite storage and quick restore capabilities when needed.'
    }
  ];

  const whyMaintenance = [
    {
      icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
      stat: '43%',
      description: 'of small business websites are attacked by hackers annually'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
      stat: '73%',
      description: 'of users abandon sites that take longer than 3 seconds to load'
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      stat: '90%',
      description: 'of WordPress vulnerabilities come from outdated plugins'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              WordPress Maintenance
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Keep Your Site Secure & Fast
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              Professional WordPress maintenance services that keep your website secure, updated, and performing at its best while you focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                Choose Your Plan
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                Free Site Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Maintenance Matters */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Website Maintenance is Critical
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your website is your digital storefront. Without proper maintenance, you risk security breaches, poor performance, and lost business opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {whyMaintenance.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6">
                  {item.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{item.stat}</div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 font-medium">
              Don't become a statistic. Protect your website with professional maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Maintenance Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our maintenance services cover every aspect of your website's health, from security to performance optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Maintenance Plans for Every Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the maintenance plan that fits your website's needs and budget. All plans include our core security and performance features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maintenancePlans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-8 relative ${
                  plan.popular ? 'ring-2 ring-purple-600 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className={`text-4xl font-bold text-${plan.color}-600`}>{plan.price}</span>
                    <span className="text-gray-600">/month + VAT</span>
                  </div>
                  <p className="text-gray-600">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular 
                      ? 'bg-purple-600 text-white hover:bg-purple-700' 
                      : `bg-${plan.color}-100 text-${plan.color}-600 hover:bg-${plan.color}-200`
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Our Maintenance Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proactive approach to website maintenance that prevents problems before they occur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Site Audit</h3>
                    <p className="text-gray-600">Comprehensive analysis of your website's current security, performance, and maintenance needs.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitoring Setup</h3>
                    <p className="text-gray-600">Installation of monitoring tools and security systems to watch your site 24/7.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Regular Maintenance</h3>
                    <p className="text-gray-600">Scheduled updates, backups, and optimizations performed by our expert team.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Monthly Reporting</h3>
                    <p className="text-gray-600">Detailed reports showing your site's health, security status, and performance metrics.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">What's Included in Every Plan:</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>WordPress core updates</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Plugin compatibility testing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Malware scanning & removal</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Performance monitoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Uptime monitoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Emergency support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Protect Your Website Today
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Don't wait for a security breach or performance issue. Start protecting your website with professional maintenance today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200">
              Start Maintenance Plan
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200">
              Get Free Site Audit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteMaintenance;
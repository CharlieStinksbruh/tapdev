import React from 'react';
import { Shield, Lock, AlertTriangle, Users, CheckCircle, Eye, FileText, Zap } from 'lucide-react';

const SecurityServices = () => {
  const securityThreats = [
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      title: 'Malware Attacks',
      description: 'Malicious software that can steal data, redirect traffic, or completely compromise your website',
      frequency: 'Every 39 seconds'
    },
    {
      icon: <Lock className="h-8 w-8 text-orange-500" />,
      title: 'Brute Force Attacks',
      description: 'Automated attempts to guess passwords and gain unauthorized access to your admin area',
      frequency: '30,000+ attempts daily'
    },
    {
      icon: <Eye className="h-8 w-8 text-purple-500" />,
      title: 'SQL Injection',
      description: 'Database attacks that can expose sensitive customer and business information',
      frequency: '65% of web attacks'
    }
  ];

  const securityServices = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Malware Scanning & Removal',
      description: 'Daily automated scans with immediate malware removal and infected file cleanup',
      features: ['Real-time scanning', 'Automatic removal', 'File quarantine', 'Clean-up reports']
    },
    {
      icon: <Lock className="h-8 w-8 text-green-600" />,
      title: 'Firewall Protection',
      description: 'Advanced web application firewall to block malicious traffic before it reaches your site',
      features: ['IP blocking', 'Country filtering', 'Bot protection', 'Rate limiting']
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: 'Access Control',
      description: 'Multi-factor authentication and user management to secure admin access',
      features: ['2FA setup', 'Login monitoring', 'Session management', 'Role-based access']
    },
    {
      icon: <FileText className="h-8 w-8 text-orange-600" />,
      title: 'Security Monitoring',
      description: '24/7 monitoring with instant alerts for suspicious activities and security events',
      features: ['Real-time alerts', 'Activity logging', 'Intrusion detection', 'Incident response']
    },
    {
      icon: <Zap className="h-8 w-8 text-red-600" />,
      title: 'Vulnerability Scanning',
      description: 'Regular security audits to identify and patch vulnerabilities before they\'re exploited',
      features: ['Plugin scanning', 'Core updates', 'Security patches', 'Vulnerability reports']
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: 'SSL & HTTPS',
      description: 'SSL certificate management and HTTPS enforcement for secure data transmission',
      features: ['SSL installation', 'Auto-renewal', 'Mixed content fixes', 'Security headers']
    }
  ];

  const securityPlans = [
    {
      name: 'Basic Security',
      price: '£39',
      description: 'Essential protection for small websites',
      features: [
        'Daily malware scanning',
        'Basic firewall protection',
        'SSL certificate management',
        'Login security (2FA)',
        'Weekly security reports',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Advanced Security',
      price: '£79',
      description: 'Comprehensive protection for business websites',
      features: [
        'Real-time malware scanning',
        'Advanced firewall with geo-blocking',
        'Vulnerability scanning',
        'DDoS protection',
        'Security monitoring & alerts',
        'Priority support',
        'Monthly security audits'
      ],
      popular: true
    },
    {
      name: 'Enterprise Security',
      price: '£149',
      description: 'Maximum protection for high-value websites',
      features: [
        'Everything in Advanced',
        'Dedicated security specialist',
        'Custom security rules',
        'Incident response team',
        'Compliance reporting',
        'Phone support',
        'Security consultation calls'
      ],
      popular: false
    }
  ];

  const securityStats = [
    { number: '43%', description: 'of cyber attacks target small businesses' },
    { number: '60%', description: 'of small companies go out of business within 6 months of a cyber attack' },
    { number: '18,000+', description: 'WordPress sites are hacked every day' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              WordPress Security Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Protect Your Business
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-4xl mx-auto">
              Professional WordPress security services that protect your website from malware, hackers, and cyber threats with 24/7 monitoring and rapid response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200">
                Secure My Website
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-200">
                Free Security Scan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Reality of Website Security
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cyber threats are increasing every day. Don't become another statistic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {securityStats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 font-medium">
              Your website is under constant attack. Professional security is not optional—it's essential.
            </p>
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Security Threats
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the threats your website faces is the first step in protecting your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityThreats.map((threat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="mb-4">
                  {threat.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {threat.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {threat.description}
                </p>
                <div className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  {threat.frequency}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multi-layered security approach that protects your website from all angles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Plans for Every Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the security level that matches your website's risk profile and business requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityPlans.map((plan, index) => (
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
                    <span className="text-4xl font-bold text-red-600">{plan.price}</span>
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
                      : 'bg-red-100 text-red-600 hover:bg-red-200'
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Secure Your Website
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach to implementing and maintaining comprehensive website security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Security Audit</h3>
                    <p className="text-gray-600">Comprehensive assessment of your current security posture and vulnerability identification.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Security Implementation</h3>
                    <p className="text-gray-600">Installation and configuration of security tools, firewalls, and monitoring systems.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Monitoring</h3>
                    <p className="text-gray-600">24/7 monitoring with real-time alerts and automated response to security incidents.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Regular Updates</h3>
                    <p className="text-gray-600">Ongoing security updates, patches, and improvements to stay ahead of emerging threats.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-600 to-purple-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Security Guarantee</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Malware-Free Guarantee:</strong> We guarantee your site stays clean or we fix it for free
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong>24/7 Response:</strong> Immediate response to security incidents any time, any day
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <strong>No Hidden Fees:</strong> Transparent pricing with no surprise charges for security fixes
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Wait Until It's Too Late
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Every day you wait is another day your website is vulnerable. Get professional security protection today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200">
              Secure My Website Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-200">
              Get Free Security Scan
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityServices;
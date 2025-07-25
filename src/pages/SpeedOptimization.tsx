import React from 'react';
import { Zap, Clock, TrendingUp, Users, CheckCircle, ArrowRight, Target, BarChart3 } from 'lucide-react';

const SpeedOptimization = () => {
  const speedStats = [
    {
      icon: <Clock className="h-8 w-8 text-red-500" />,
      stat: '3 seconds',
      description: 'Maximum loading time before users abandon your site'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      stat: '7%',
      description: 'Increase in conversions for every 100ms improvement in load time'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      stat: '53%',
      description: 'Of mobile users leave sites that take longer than 3 seconds to load'
    }
  ];

  const optimisationServices = [
    {
      title: 'Image Optimisation',
      description: 'Compress and optimise images without quality loss using advanced compression techniques',
      benefits: ['Reduced file sizes', 'Faster loading', 'Better SEO']
    },
    {
      title: 'Code Minification',
      description: 'Minify CSS, JavaScript, and HTML to reduce file sizes and improve loading speed',
      benefits: ['Smaller files', 'Faster parsing', 'Reduced bandwidth']
    },
    {
      title: 'Caching Implementation',
      description: 'Set up advanced caching systems to serve content faster to returning visitors',
      benefits: ['Instant loading', 'Reduced server load', 'Better user experience']
    },
    {
      title: 'Database Optimisation',
      description: 'Clean and optimise your WordPress database for faster query performance',
      benefits: ['Faster queries', 'Reduced overhead', 'Improved stability']
    },
    {
      title: 'CDN Integration',
      description: 'Implement Content Delivery Network to serve content from global locations',
      benefits: ['Global reach', 'Reduced latency', 'Better availability']
    },
    {
      title: 'Core Web Vitals',
      description: 'Optimise for Google\'s Core Web Vitals to improve search rankings and user experience',
      benefits: ['Better SEO', 'Higher rankings', 'Improved UX']
    }
  ];

  const beforeAfter = [
    { metric: 'Page Load Time', before: '8.2s', after: '1.8s', improvement: '78%' },
    { metric: 'Time to First Byte', before: '2.1s', after: '0.4s', improvement: '81%' },
    { metric: 'First Contentful Paint', before: '4.3s', after: '1.2s', improvement: '72%' },
    { metric: 'Largest Contentful Paint', before: '6.8s', after: '2.1s', improvement: '69%' }
  ];

  const process = [
    {
      step: '1',
      title: 'Performance Audit',
      description: 'Comprehensive analysis of your website\'s current performance using industry-standard tools like GTmetrix, PageSpeed Insights, and WebPageTest.'
    },
    {
      step: '2',
      title: 'Optimisation Strategy',
      description: 'Custom optimisation plan based on your specific issues, priorities, and business goals to maximise impact.'
    },
    {
      step: '3',
      title: 'Implementation',
      description: 'Execute optimisation techniques including image compression, code minification, caching setup, and database optimisation.'
    },
    {
      step: '4',
      title: 'Testing & Monitoring',
      description: 'Thorough testing across devices and browsers, followed by continuous monitoring to maintain optimal performance.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 via-red-600 to-pink-700 text-white section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Website Speed Optimisation
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Boost Conversions by 300%
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-4xl mx-auto">
              Professional website speed optimisation services that dramatically improve your site's performance, search rankings, and user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Get Speed Audit</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Request Optimisation Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Speed Stats */}
      <section className="section-padding bg-gray-800/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Website Speed Matters
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every second counts. Slow websites cost businesses millions in lost revenue and poor user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {speedStats.map((stat, index) => (
              <div key={index} className="glass-effect p-8 rounded-2xl text-center hover:bg-white/10 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-xl mb-6">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.stat}</div>
                <p className="text-gray-300">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Results */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real Results from Recent Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the dramatic performance improvements we've achieved for our clients
            </p>
          </div>

          <div className="glass-effect rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
              <div className="bg-gray-800/50 p-6 font-semibold text-white">
                Performance Metric
              </div>
              <div className="bg-red-900/20 p-6 font-semibold text-red-400 text-center">
                Before
              </div>
              <div className="bg-green-900/20 p-6 font-semibold text-green-400 text-center">
                After
              </div>
              <div className="bg-blue-900/20 p-6 font-semibold text-blue-400 text-center">
                Improvement
              </div>
            </div>
            
            {beforeAfter.map((metric, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-gray-700">
                <div className="p-6 font-medium text-white">
                  {metric.metric}
                </div>
                <div className="p-6 text-center text-red-400 font-bold">
                  {metric.before}
                </div>
                <div className="p-6 text-center text-green-400 font-bold">
                  {metric.after}
                </div>
                <div className="p-6 text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-900/30 text-blue-400">
                    {metric.improvement} faster
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimisation Services */}
      <section className="section-padding bg-gray-800/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Speed Optimisation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our optimisation services address every aspect of website performance from frontend to backend
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {optimisationServices.map((service, index) => (
              <div key={index} className="glass-effect p-8 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Optimisation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to identifying and fixing performance bottlenecks
            </p>
          </div>

          <div className="space-y-8">
            {process.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="glass-effect p-8 rounded-2xl">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="section-padding bg-gray-800/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Professional Tools & Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use industry-leading tools to analyse and optimise your website's performance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['GTmetrix', 'PageSpeed Insights', 'WebPageTest', 'Lighthouse', 'Pingdom', 'New Relic', 'CloudFlare', 'KeyCDN'].map((tool, index) => (
              <div key={index} className="glass-effect p-6 rounded-xl text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-orange-600/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <span className="font-medium text-white">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Supercharge Your Website?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Get a comprehensive speed audit and optimisation quote. See exactly how much faster your website can be.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 px-4 sm:px-6 lg:px-8">
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Free Speed Audit</h3>
              <p className="mb-4">Complete performance analysis with detailed recommendations</p>
              <ul className="text-left space-y-2 text-orange-100">
                <li>• Performance score analysis</li>
                <li>• Optimisation opportunities</li>
                <li>• Detailed improvement plan</li>
              </ul>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Full Optimisation</h3>
              <p className="mb-4">Complete speed optimisation service with ongoing monitoring</p>
              <ul className="text-left space-y-2 text-orange-100">
                <li>• All optimisation techniques</li>
                <li>• 30-day performance guarantee</li>
                <li>• Ongoing monitoring & support</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
            >
              <span>Get Free Speed Audit</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Request Optimization Quote</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpeedOptimization;
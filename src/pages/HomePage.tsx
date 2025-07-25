import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Clock, 
  Shield, 
  Zap, 
  Globe, 
  Code, 
  TrendingUp, 
  Target, 
  Phone, 
  Mail,
  Database,
  Search,
  Lock,
  Monitor,
  Settings,
  Smartphone,
  ShoppingCart,
  FileText,
  BarChart3,
  Activity
} from 'lucide-react';

const HomePage = () => {
  const stats = [
    { number: '500+', label: 'Websites Delivered', icon: <Globe className="h-6 w-6" /> },
    { number: '10+', label: 'Years Experience', icon: <Clock className="h-6 w-6" /> },
    { number: '100%', label: 'Client Satisfaction', icon: <Star className="h-6 w-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Shield className="h-6 w-6" /> }
  ];

  const services = [
    {
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      title: 'Website Migrations',
      description: 'Seamless website transfers with zero downtime and preserved SEO rankings. Professional migration services that protect your investment.',
      features: ['Zero downtime guarantee', 'SEO preservation', 'Data integrity', 'Performance boost'],
      price: 'From £299',
      link: '/services/website-migrations'
    },
    {
      icon: <Code className="h-8 w-8 text-purple-500" />,
      title: 'WordPress Development',
      description: 'Custom WordPress solutions, themes, and e-commerce platforms built for performance, security, and scalability.',
      features: ['Custom development', 'E-commerce solutions', 'Mobile responsive', 'SEO optimised'],
      price: 'From £1,299',
      link: '/services/wordpress-development'
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: 'Website Maintenance',
      description: '24/7 monitoring, security updates, and performance optimisation to keep your website running smoothly and securely.',
      features: ['24/7 monitoring', 'Security updates', 'Performance optimisation', 'Regular backups'],
      price: 'From £49/month',
      link: '/services/website-maintenance'
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: 'Speed Optimisation',
      description: 'Boost your website performance by up to 300% with advanced optimisation techniques that improve user experience and conversions.',
      features: ['300% speed improvement', 'Better conversions', 'SEO benefits', 'Mobile optimisation'],
      price: 'From £499',
      link: '/services/speed-optimization'
    },
    {
      icon: <Lock className="h-8 w-8 text-red-500" />,
      title: 'Security Services',
      description: 'Advanced website security, malware protection, and monitoring to safeguard your business from cyber threats.',
      features: ['Malware protection', 'Security monitoring', 'Threat prevention', 'Emergency response'],
      price: 'From £39/month',
      link: '/services/security-services'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'E-commerce Store Owner',
      content: 'TapDev transformed our online store completely. Sales increased by 250% within the first month after the migration and speed optimisation.',
      rating: 5,
      image: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'Digital Marketing Agency',
      content: 'The WordPress development service exceeded our expectations. Our clients love their new websites and we\'ve seen significant improvements in performance.',
      rating: 5,
      image: 'MC'
    },
    {
      name: 'Emma Williams',
      company: 'Small Business Owner',
      content: 'The maintenance service gives me complete peace of mind. My website is always secure, fast, and up-to-date without me having to worry about technical issues.',
      rating: 5,
      image: 'EW'
    },
    {
      name: 'James Richardson',
      company: 'Professional Services',
      content: 'The security service saved our business from a major cyber attack. The 24/7 monitoring and immediate response prevented what could have been a disaster.',
      rating: 5,
      image: 'JR'
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: 'Proven Track Record',
      description: '500+ successful projects with 100% client satisfaction rate and industry recognition for excellence.',
      stats: '500+ Projects Completed'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: 'Expert Team',
      description: 'Experienced developers, designers, and security specialists with over 10 years of combined expertise.',
      stats: '10+ Years Experience'
    },
    {
      icon: <Clock className="h-8 w-8 text-green-500" />,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality. Most projects completed within 1-2 weeks.',
      stats: 'Average 7-day delivery'
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-500" />,
      title: 'Guaranteed Results',
      description: 'Money-back guarantee if you\'re not completely satisfied with our work and results.',
      stats: '100% Satisfaction Guarantee'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'Free consultation to understand your needs, goals, and technical requirements.',
      duration: '30 minutes'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Detailed project plan with timeline, milestones, and technical specifications.',
      duration: '1-2 days'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Expert development with rigorous testing across all devices and browsers.',
      duration: '5-14 days'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'Smooth deployment with training and ongoing support to ensure your success.',
      duration: 'Ongoing'
    }
  ];

  const recentWork = [
    {
      title: 'E-commerce Fashion Store',
      category: 'WooCommerce Development',
      results: '+300% sales increase',
      image: 'fashion-store',
      technologies: ['WordPress', 'WooCommerce', 'Custom PHP']
    },
    {
      title: 'Professional Services Firm',
      category: 'Website Migration',
      results: '+200% faster loading',
      image: 'professional-services',
      technologies: ['Migration', 'Performance', 'Security']
    },
    {
      title: 'Healthcare Provider',
      category: 'Security Implementation',
      results: '100% threat prevention',
      image: 'healthcare-security',
      technologies: ['Security', 'Monitoring', 'Compliance']
    }
  ];

  const urgencyFactors = [
    {
      icon: <TrendingUp className="h-6 w-6 text-red-500" />,
      stat: '43%',
      description: 'of small businesses are attacked by hackers annually',
      impact: 'Your website could be next'
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      stat: '3 seconds',
      description: 'is the maximum time users wait for a page to load',
      impact: 'Slow sites lose customers'
    },
    {
      icon: <Target className="h-6 w-6 text-blue-500" />,
      stat: '75%',
      description: 'of users judge credibility based on website design',
      impact: 'First impressions matter'
    },
    {
      icon: <Search className="h-6 w-6 text-green-500" />,
      stat: '68%',
      description: 'of online experiences begin with a search engine',
      impact: 'SEO drives business growth'
    }
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-700/20"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto"
          >
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
              Professional Web Development
              <span className="block gradient-text">That Drives Results</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Transform your online presence with expert WordPress development, lightning-fast migrations, 
              and comprehensive security services. Trusted by 500+ businesses across the UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-glow flex items-center justify-center space-x-3"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="h-6 w-6" />
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-blue-400 text-blue-400 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <span>View Our Work</span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-xl mb-4 text-blue-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 bg-gray-800/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Website is <span className="text-red-400">At Risk</span> Right Now
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every day you wait is another day your business is vulnerable to security threats, poor performance, and lost opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {urgencyFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg mb-4">
                  {factor.icon}
                </div>
                <div className="text-2xl font-bold gradient-text mb-2">{factor.stat}</div>
                <p className="text-gray-300 text-sm mb-3">{factor.description}</p>
                <p className="text-red-400 text-xs font-medium">{factor.impact}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-300 font-medium mb-6">
              Don't become another statistic. Protect and optimise your website today.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 hover-glow inline-flex items-center space-x-2"
            >
              <span>Get Emergency Audit</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Complete Web Development <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From custom WordPress development to advanced security services, we provide everything you need 
              to build, protect, and grow your online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-blue-600/20 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <span className="text-green-400 font-bold text-lg">{service.price}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Why Choose <span className="gradient-text">TapDev</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We're not just another web development agency. We're your strategic partner in digital success, 
              committed to delivering exceptional results that drive your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center">
                    {reason.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {reason.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {reason.description}
                    </p>
                    <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium">
                      {reason.stats}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Our Proven <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              A streamlined approach that ensures your project is delivered on time, within budget, and exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {step.description}
                </p>
                <span className="inline-flex items-center px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium">
                  <Clock className="h-4 w-4 mr-2" />
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Work */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Recent <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              See how we've helped businesses like yours achieve remarkable results with our expert web development services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {recentWork.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white/20 mb-2">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <div className="text-white font-semibold">{work.image}</div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <span className="text-blue-400 text-sm font-medium bg-blue-400/10 px-3 py-1 rounded-full">
                      {work.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {work.title}
                  </h3>
                  <div className="mb-6">
                    <span className="text-green-400 font-bold text-lg">{work.results}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {work.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-glow inline-flex items-center space-x-2"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with TapDev.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Transparent <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              No hidden fees, no surprises. Just honest, competitive pricing for professional web development services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center">
              <div className="text-4xl font-bold gradient-text mb-4">£299+</div>
              <h3 className="text-xl font-bold text-white mb-4">Website Migrations</h3>
              <p className="text-gray-300">Professional migration services with zero downtime guarantee</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center transform scale-105 ring-2 ring-blue-600">
              <div className="text-4xl font-bold gradient-text mb-4">£1,299+</div>
              <h3 className="text-xl font-bold text-white mb-4">WordPress Development</h3>
              <p className="text-gray-300">Custom WordPress solutions built for your business needs</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center">
              <div className="text-4xl font-bold gradient-text mb-4">£49+</div>
              <h3 className="text-xl font-bold text-white mb-4">Monthly Maintenance</h3>
              <p className="text-gray-300">24/7 monitoring, security, and performance optimisation</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-glow inline-flex items-center space-x-2"
            >
              <span>Get Custom Quote</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              Ready to Transform Your Website?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join 500+ satisfied clients who have transformed their online presence with TapDev. 
              Get your free consultation today and discover how we can help your business grow.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Phone className="h-8 w-8 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Free Consultation</h3>
                <p className="mb-4 text-blue-100">30-minute strategy call to discuss your project</p>
                <ul className="text-left space-y-2 text-blue-100 text-sm">
                  <li>• Project requirements analysis</li>
                  <li>• Technology recommendations</li>
                  <li>• Timeline and budget estimate</li>
                  <li>• No obligation, just expert advice</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Mail className="h-8 w-8 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Emergency Support</h3>
                <p className="mb-4 text-blue-100">Website down or security issue? We're here to help</p>
                <ul className="text-left space-y-2 text-blue-100 text-sm">
                  <li>• 24/7 emergency response</li>
                  <li>• Immediate threat assessment</li>
                  <li>• Rapid issue resolution</li>
                  <li>• Get back online fast</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-3"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="h-6 w-6" />
              </Link>
              <a
                href="mailto:hello@tapdev.co.uk"
                className="border-2 border-white text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Mail className="h-6 w-6" />
                <span>Email Us Now</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
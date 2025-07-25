import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code, 
  Zap, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Clock,
  TrendingUp,
  Award,
  Globe,
  Smartphone,
  Search,
  ShoppingCart,
  Database,
  Lock,
  Gauge,
  Target,
  Briefcase,
  HeadphonesIcon,
  Layers,
  BarChart3,
  Rocket,
  FileText,
  Settings,
  Monitor,
  Palette,
  Code2,
  Server,
  Wrench,
  ThumbsUp,
  MessageCircle,
  Calendar,
  Trophy,
  Lightbulb,
  PieChart,
  Activity
} from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Website Migrations',
      description: 'Seamless site transfers with zero downtime and preserved SEO rankings.',
      link: '/services/website-migrations',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'WordPress Development',
      description: 'Custom WordPress solutions that drive business growth and engagement.',
      link: '/services/wordpress-development',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Website Maintenance',
      description: '24/7 monitoring, updates, and security to keep your site running perfectly.',
      link: '/services/website-maintenance',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Speed Optimization',
      description: 'Boost your site speed by 300% and increase conversions dramatically.',
      link: '/services/speed-optimization',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: 'Security Services',
      description: 'Advanced protection against malware, hackers, and cyber threats.',
      link: '/services/security-services',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Websites Delivered', icon: <Globe className="h-6 w-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="h-6 w-6" /> },
    { number: '300%', label: 'Speed Improvement', icon: <Zap className="h-6 w-6" /> },
    { number: '24/7', label: 'Expert Support', icon: <Users className="h-6 w-6" /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'E-commerce Store Owner',
      content: 'TapDev transformed our slow WordPress site into a lightning-fast platform. Our sales increased by 40% within the first month!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Digital Marketing Agency',
      content: 'The migration service was flawless. Zero downtime, preserved SEO rankings, and our site is now 3x faster. Exceptional work!',
      rating: 5
    },
    {
      name: 'Emma Williams',
      company: 'Small Business Owner',
      content: 'Their maintenance service gives me peace of mind. My website is always secure, updated, and performing at its best.',
      rating: 5
    }
  ];

  const features = [
    {
      icon: <Smartphone className="h-6 w-6 text-blue-500" />,
      title: 'Mobile-First Design',
      description: 'Responsive websites that look perfect on all devices'
    },
    {
      icon: <Search className="h-6 w-6 text-green-500" />,
      title: 'SEO Optimised',
      description: 'Built-in SEO best practices for better search rankings'
    },
    {
      icon: <Gauge className="h-6 w-6 text-orange-500" />,
      title: 'Lightning Fast',
      description: 'Optimised for speed with advanced caching and compression'
    },
    {
      icon: <Shield className="h-6 w-6 text-red-500" />,
      title: 'Secure & Protected',
      description: 'Advanced security measures and regular monitoring'
    }
  ];

  const industries = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-blue-500" />,
      title: 'E-commerce',
      description: 'Online stores that convert visitors into customers',
      projects: '150+'
    },
    {
      icon: <Briefcase className="h-8 w-8 text-green-500" />,
      title: 'Professional Services',
      description: 'Websites for consultants, lawyers, and agencies',
      projects: '200+'
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-purple-500" />,
      title: 'SaaS & Tech',
      description: 'Software companies and technology platforms',
      projects: '80+'
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: 'Non-Profit',
      description: 'Charities and community organisations',
      projects: '70+'
    }
  ];

  const technologies = [
    {
      name: 'WordPress',
      icon: <Code className="h-6 w-6" />,
      description: 'Custom themes and plugins'
    },
    {
      name: 'WooCommerce',
      icon: <ShoppingCart className="h-6 w-6" />,
      description: 'E-commerce solutions'
    },
    {
      name: 'React',
      icon: <Code2 className="h-6 w-6" />,
      description: 'Modern web applications'
    },
    {
      name: 'PHP',
      icon: <Server className="h-6 w-6" />,
      description: 'Backend development'
    },
    {
      name: 'MySQL',
      icon: <Database className="h-6 w-6" />,
      description: 'Database optimisation'
    },
    {
      name: 'CloudFlare',
      icon: <Shield className="h-6 w-6" />,
      description: 'Performance & security'
    }
  ];

  const whyChooseUs = [
    {
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
      title: 'Award-Winning Team',
      description: 'Recognised experts in WordPress development and digital strategy',
      highlight: '10+ Years Experience'
    },
    {
      icon: <Rocket className="h-8 w-8 text-blue-500" />,
      title: 'Proven Results',
      description: 'Consistently deliver projects that exceed client expectations',
      highlight: '98% Client Retention'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-purple-500" />,
      title: 'Innovation Focus',
      description: 'Always using the latest technologies and best practices',
      highlight: 'Cutting-Edge Solutions'
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-green-500" />,
      title: 'Exceptional Support',
      description: 'Dedicated support team available when you need us most',
      highlight: '2-Hour Response Time'
    }
  ];

  const caseStudies = [
    {
      title: 'E-commerce Revenue Boost',
      client: 'Fashion Retailer',
      result: '+250% Sales',
      description: 'Complete WooCommerce redesign with advanced filtering and checkout optimisation',
      metrics: ['40% faster loading', '60% better conversion', '250% more sales']
    },
    {
      title: 'Professional Services Growth',
      client: 'Legal Firm',
      result: '+180% Leads',
      description: 'Modern WordPress site with lead generation focus and SEO optimisation',
      metrics: ['300% more traffic', '180% more leads', '95% uptime']
    },
    {
      title: 'SaaS Platform Launch',
      client: 'Tech Startup',
      result: '10k+ Users',
      description: 'Custom WordPress solution with membership system and payment integration',
      metrics: ['10k+ signups', '99.9% uptime', '2s load time']
    }
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="particles-bg">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${Math.random() * 4 + 6}s`
              }}
            />
          ))}
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Professional Web Development
                <span className="block gradient-text">That Drives Results</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                Transform your online presence with expert WordPress development, lightning-fast migrations, 
                and comprehensive maintenance services. We help businesses grow with websites that convert.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="glass-effect text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Free Consultation</span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-full mb-4 text-blue-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Trusted by Businesses Across Industries
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From startups to established enterprises, we've helped hundreds of businesses achieve their digital goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-xl mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {industry.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {industry.description}
                </p>
                <div className="text-blue-400 font-bold text-sm">
                  {industry.projects} Projects
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-800/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Expert Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive web development solutions designed to accelerate your business growth and online success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={service.link} className="group block">
                  <div className="glass-effect rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 hover-glow">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we've helped businesses like yours achieve remarkable results with our web development expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {study.result}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {study.client}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">
                  {study.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {study.description}
                </p>
                
                <div className="space-y-2">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-glow"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-800/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">TapDev</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just developers – we're your strategic partners in digital success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center">
                    {reason.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white">
                        {reason.title}
                      </h3>
                      <span className="text-sm font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                        {reason.highlight}
                      </span>
                    </div>
                    <p className="text-gray-300">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Technologies</span> We Master
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use cutting-edge technologies and proven frameworks to build robust, scalable websites
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mb-4 text-blue-400 group-hover:text-blue-300 transition-colours duration-300">
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                  {tech.name}
                </h3>
                <p className="text-xs text-gray-400">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                What Makes Us <span className="gradient-text">Different</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We combine technical expertise with business acumen to deliver websites that not only look great but drive real results for your business.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass-effect rounded-2xl p-8 float-animation">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Project Success Rate</span>
                    <span className="text-green-400 font-bold">100%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-full"></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Client Satisfaction</span>
                    <span className="text-blue-400 font-bold">99.8%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full w-[99.8%]"></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Speed Improvement</span>
                    <span className="text-orange-400 font-bold">300%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-orange-400 to-red-500 h-2 rounded-full w-full"></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">On-Time Delivery</span>
                    <span className="text-purple-400 font-bold">98%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full w-[98%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-800/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 glass-effect rounded-xl px-8 py-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-white font-semibold">
                4.9/5 Average Rating
              </div>
              <div className="text-gray-400">
                Based on 200+ reviews
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="section-padding bg-gradient-to-r from-green-600/10 to-blue-600/10 border-y border-green-600/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Guarantee</span> to You
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We stand behind our work with industry-leading guarantees and commitments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-green-500" />,
                title: '30-Day Money Back',
                description: 'Not satisfied? Get a full refund within 30 days'
              },
              {
                icon: <Clock className="h-8 w-8 text-blue-500" />,
                title: 'On-Time Delivery',
                description: 'We deliver on schedule or you get compensation'
              },
              {
                icon: <Wrench className="h-8 w-8 text-purple-500" />,
                title: '90-Day Bug Fixes',
                description: 'Free fixes for any issues within 90 days'
              },
              {
                icon: <ThumbsUp className="h-8 w-8 text-orange-500" />,
                title: 'Satisfaction Promise',
                description: 'We work until you\'re completely happy'
              }
            ].map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-xl mb-6">
                  {guarantee.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {guarantee.title}
                </h3>
                <p className="text-gray-300">
                  {guarantee.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Proven Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach that ensures your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Discovery', description: 'We analyse your needs and create a strategic plan' },
              { title: 'Design', description: 'Custom designs that reflect your brand identity' },
              { title: 'Development', description: 'Clean, efficient code with rigorous testing' },
              { title: 'Launch', description: 'Smooth deployment with ongoing optimisation' }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 pulse-glow">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-800/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to the most common questions about our web development services
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'How long does a typical project take?',
                answer: 'Most websites take 4-8 weeks depending on complexity. We provide detailed timelines during consultation.'
              },
              {
                question: 'Do you provide ongoing support?',
                answer: 'Yes! We offer comprehensive maintenance plans and are always available for updates and support.'
              },
              {
                question: 'Can you help with SEO?',
                answer: 'Absolutely. All our websites are built with SEO best practices and we offer ongoing SEO services.'
              },
              {
                question: 'What about mobile responsiveness?',
                answer: 'Every website we build is fully responsive and optimised for all devices and screen sizes.'
              },
              {
                question: 'Do you work with existing websites?',
                answer: 'Yes, we can redesign, migrate, optimise, or add features to your existing website.'
              },
              {
                question: 'What are your payment terms?',
                answer: 'We typically require the full payment up front but have flexible payment options available.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Website?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who have accelerated their business growth with our expert web development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Free Consultation</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
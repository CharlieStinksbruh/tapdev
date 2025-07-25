import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Code, 
  Globe, 
  Shield, 
  Zap, 
  Users, 
  Award,
  TrendingUp,
  Clock,
  Star,
  Target,
  Layers,
  Database,
  Search,
  Smartphone,
  Settings,
  BarChart3,
  FileText,
  Mail,
  Phone
} from 'lucide-react';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      title: 'Website Migrations',
      description: 'Seamless website transfers with zero downtime and preserved SEO rankings. Professional migration services that protect your online presence.',
      features: ['Zero downtime guarantee', 'SEO preservation', 'Data integrity', 'Performance improvement']
    },
    {
      icon: <Code className="h-8 w-8 text-purple-500" />,
      title: 'WordPress Development',
      description: 'Custom WordPress solutions tailored to your business needs. From simple websites to complex e-commerce platforms.',
      features: ['Custom themes', 'Plugin development', 'E-commerce solutions', 'API integrations']
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: 'Website Maintenance',
      description: '24/7 monitoring and maintenance services to keep your website secure, updated, and performing at its best.',
      features: ['Security monitoring', 'Regular updates', 'Performance optimisation', 'Backup management']
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: 'Speed Optimisation',
      description: 'Dramatically improve your website\'s loading speed and user experience with our advanced optimisation techniques.',
      features: ['Image optimisation', 'Code minification', 'Caching systems', 'CDN integration']
    },
    {
      icon: <Lock className="h-8 w-8 text-red-500" />,
      title: 'Security Services',
      description: 'Comprehensive security solutions to protect your website from malware, hackers, and cyber threats.',
      features: ['Malware scanning', 'Firewall protection', 'Security monitoring', 'Vulnerability assessments']
    },
    {
      icon: <Search className="h-8 w-8 text-indigo-500" />,
      title: 'SEO Optimisation',
      description: 'Improve your search engine rankings and drive more organic traffic with our proven SEO strategies.',
      features: ['Technical SEO', 'Content optimisation', 'Local SEO', 'Performance tracking']
    }
  ];

  const stats = [
    { number: '500+', label: 'Websites Delivered', icon: <Globe className="h-6 w-6" /> },
    { number: '10+', label: 'Years Experience', icon: <Clock className="h-6 w-6" /> },
    { number: '100%', label: 'Client Satisfaction', icon: <Star className="h-6 w-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Shield className="h-6 w-6" /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'E-commerce Director',
      content: 'TapDev transformed our online presence completely. Our website is now faster, more secure, and generates significantly more leads.',
      rating: 5,
      image: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'Marketing Manager',
      content: 'The migration service was flawless. Zero downtime and our search rankings actually improved after the move to the new platform.',
      rating: 5,
      image: 'MC'
    },
    {
      name: 'Emma Williams',
      company: 'Business Owner',
      content: 'Outstanding service and support. The team goes above and beyond to ensure everything works perfectly. Highly recommended.',
      rating: 5,
      image: 'EW'
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
      icon: <Zap className="h-6 w-6 text-orange-500" />,
      title: 'Lightning Fast',
      description: 'Optimised for speed with advanced performance techniques'
    },
    {
      icon: <Shield className="h-6 w-6 text-red-500" />,
      title: 'Secure & Reliable',
      description: 'Advanced security measures and regular monitoring'
    },
    {
      icon: <Users className="h-6 w-6 text-purple-500" />,
      title: 'User-Friendly',
      description: 'Intuitive interfaces designed for excellent user experience'
    },
    {
      icon: <Settings className="h-6 w-6 text-indigo-500" />,
      title: 'Easy Management',
      description: 'Simple content management systems for effortless updates'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We analyse your requirements and create a comprehensive strategy tailored to your business goals.',
      icon: <Target className="h-8 w-8 text-blue-500" />
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Our team creates detailed designs and technical specifications for your project.',
      icon: <Layers className="h-8 w-8 text-purple-500" />
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build your solution using best practices and thoroughly test everything before launch.',
      icon: <Code className="h-8 w-8 text-green-500" />
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'We deploy your website and provide ongoing support to ensure continued success.',
      icon: <Award className="h-8 w-8 text-orange-500" />
    }
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-700/20"></div>
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Professional Web Development
              <span className="block gradient-text">That Drives Results</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              We create exceptional WordPress websites, handle seamless migrations, and provide comprehensive 
              maintenance services that help British businesses thrive online. Trusted by 500+ companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Our Work</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-xl mb-4 text-blue-400">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive web development solutions designed to help your business succeed online. 
                From custom development to ongoing maintenance, we've got you covered.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Why Choose <span className="gradient-text">TapDev</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We combine technical expertise with business acumen to deliver web solutions that not only 
                look exceptional but drive real results for your business.
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
                      <p className="text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-effect rounded-2xl p-8 float-animation">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Award-Winning Excellence
                  </h3>
                  <p className="text-gray-300">
                    Recognised for outstanding web development and client satisfaction across the UK.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                    <span className="text-white font-medium">Project Success Rate</span>
                    <span className="text-green-400 font-bold">100%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                    <span className="text-white font-medium">Client Retention</span>
                    <span className="text-blue-400 font-bold">95%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                    <span className="text-white font-medium">Average Speed Improvement</span>
                    <span className="text-orange-400 font-bold">300%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures your project is delivered on time, within budget, 
                and exceeds your expectations every step of the way.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 pulse-glow">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-gray-900 rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                What Our <span className="gradient-text">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our satisfied clients have to say about 
                working with TapDev and the results we've delivered.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of successful businesses who have chosen TapDev for their web development needs. 
              Let's discuss how we can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Free Consultation</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gray-800/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">hello@tapdev.co.uk</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-green-600/20 rounded-xl flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Response Time</h3>
              <p className="text-gray-300">Within 2 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">10+ Years Experience</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
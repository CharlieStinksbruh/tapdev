import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Code, 
  Zap, 
  Shield, 
  Globe, 
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Award,
  Clock,
  Target,
  Smartphone,
  Search,
  Database,
  Settings
} from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8 text-blue-500" />,
      title: 'Website Migrations',
      description: 'Seamless website transfers with zero downtime and preserved SEO rankings.',
      link: '/services/website-migrations',
      features: ['Zero downtime guarantee', 'SEO preservation', 'Performance boost']
    },
    {
      icon: <Code className="h-8 w-8 text-purple-500" />,
      title: 'WordPress Development',
      description: 'Custom WordPress solutions that drive business growth and user engagement.',
      link: '/services/wordpress-development',
      features: ['Custom themes', 'E-commerce solutions', 'API integrations']
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: 'Website Maintenance',
      description: '24/7 monitoring and maintenance to keep your website secure and optimised.',
      link: '/services/website-maintenance',
      features: ['24/7 monitoring', 'Security updates', 'Performance optimisation']
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: 'Speed Optimisation',
      description: 'Boost your website performance by up to 300% with advanced optimisation.',
      link: '/services/speed-optimization',
      features: ['Core Web Vitals', 'Image optimisation', 'Caching systems']
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: 'Security Services',
      description: 'Advanced protection against malware, hackers, and cyber threats.',
      link: '/services/security-services',
      features: ['Malware protection', 'Firewall setup', 'Security monitoring']
    }
  ];

  const stats = [
    { number: '500+', label: 'Websites Delivered', icon: <Globe className="h-6 w-6" /> },
    { number: '10+', label: 'Years Experience', icon: <Clock className="h-6 w-6" /> },
    { number: '100%', label: 'Client Satisfaction', icon: <Star className="h-6 w-6" /> },
    { number: '300%', label: 'Average Speed Boost', icon: <Zap className="h-6 w-6" /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'E-commerce Director',
      content: 'TapDev transformed our online store completely. Sales increased by 250% within the first month after the migration.',
      rating: 5
    },
    {
      name: 'James Richardson',
      company: 'Managing Partner',
      content: 'The new website and maintenance service have been game-changing for our law firm. We\'re attracting higher-quality leads.',
      rating: 5
    },
    {
      name: 'Maria Gonzalez',
      company: 'Executive Director',
      content: 'Our charity has raised more funds this year than in the previous three years combined thanks to the new website.',
      rating: 5
    }
  ];

  const features = [
    {
      icon: <Target className="h-6 w-6 text-blue-500" />,
      title: 'Results-Driven Approach',
      description: 'Every project is designed to deliver measurable business results and ROI.'
    },
    {
      icon: <Users className="h-6 w-6 text-green-500" />,
      title: 'Expert Team',
      description: 'Experienced developers and specialists dedicated to your success.'
    },
    {
      icon: <Award className="h-6 w-6 text-purple-500" />,
      title: 'Proven Track Record',
      description: '500+ successful projects with 100% client satisfaction rate.'
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support for complete peace of mind.'
    }
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-indigo-700/10"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              Professional
              <span className="block gradient-text">Web Development</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your online presence with expert WordPress development, seamless migrations, 
              and comprehensive maintenance services. Trusted by 500+ businesses across the UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-glow flex items-center justify-center space-x-3"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-6 w-6" />
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-blue-400 text-blue-400 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <span>View Our Work</span>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-xl mb-3 text-blue-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive web development solutions designed to grow your business and exceed your expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  to={service.link}
                  className="block bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 h-full"
                >
                  <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
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
                We combine technical expertise with business understanding to deliver solutions that not only look great but drive real results for your business.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
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
              className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl p-8 border border-blue-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">What Sets Us Apart</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Zero Downtime Migrations</div>
                    <div className="text-gray-300 text-sm">Your website stays online throughout the entire process</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">300% Speed Improvements</div>
                    <div className="text-gray-300 text-sm">Guaranteed performance boosts that drive conversions</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Enterprise Security</div>
                    <div className="text-gray-300 text-sm">Bank-level security for complete peace of mind</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Dedicated Support</div>
                    <div className="text-gray-300 text-sm">Personal account managers and 24/7 monitoring</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with TapDev.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
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
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
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
              Ready to Transform Your Website?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who have transformed their online presence with our expert web development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-3"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="h-6 w-6" />
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <span>View Portfolio</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
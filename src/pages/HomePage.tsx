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
  Gauge
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
      title: 'SEO Optimized',
      description: 'Built-in SEO best practices for better search rankings'
    },
    {
      icon: <Gauge className="h-6 w-6 text-orange-500" />,
      title: 'Lightning Fast',
      description: 'Optimized for speed with advanced caching and compression'
    },
    {
      icon: <Shield className="h-6 w-6 text-red-500" />,
      title: 'Secure & Protected',
      description: 'Advanced security measures and regular monitoring'
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

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Why Choose <span className="gradient-text">TapDev</span>?
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
              { title: 'Discovery', description: 'We analyze your needs and create a strategic plan' },
              { title: 'Design', description: 'Custom designs that reflect your brand identity' },
              { title: 'Development', description: 'Clean, efficient code with rigorous testing' },
              { title: 'Launch', description: 'Smooth deployment with ongoing optimization' }
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
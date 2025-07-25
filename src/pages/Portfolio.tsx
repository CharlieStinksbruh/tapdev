import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Code, 
  Zap, 
  Shield, 
  TrendingUp,
  ArrowRight,
  Filter,
  CheckCircle,
  Globe,
  ShoppingCart,
  Users,
  FileText
} from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', count: 12 },
    { id: 'ecommerce', name: 'E-commerce', count: 4 },
    { id: 'business', name: 'Business', count: 5 },
    { id: 'nonprofit', name: 'Non-Profit', count: 3 }
  ];

  const projects = [
    {
      id: 1,
      title: 'Premium Fashion Store',
      category: 'ecommerce',
      client: 'Fashion Retailer',
      description: 'Complete WooCommerce solution with advanced product filtering, wishlist functionality, and optimised checkout process.',
      image: 'fashion-store',
      technologies: ['WordPress', 'WooCommerce', 'Custom PHP', 'React'],
      results: {
        performance: '+300% faster loading',
        conversions: '+45% increase in sales',
        mobile: '95/100 mobile score'
      },
      features: ['Custom Product Filters', 'Wishlist System', 'Multi-Currency', 'Inventory Management'],
      url: '#',
      testimonial: 'Our online sales tripled within the first month of launch.',
      timeline: '6 weeks'
    },
    {
      id: 2,
      title: 'Legal Services Platform',
      category: 'business',
      client: 'Law Firm',
      description: 'Professional website with client portal, document management, and appointment booking system.',
      image: 'legal-platform',
      technologies: ['WordPress', 'Custom Plugins', 'Member System', 'Payment Gateway'],
      results: {
        leads: '+200% more enquiries',
        efficiency: '80% admin time saved',
        satisfaction: '95% client satisfaction'
      },
      features: ['Client Portal', 'Document Management', 'Appointment Booking', 'Secure Communications'],
      url: '#',
      testimonial: 'The client portal has revolutionised how we manage client relationships.',
      timeline: '8 weeks'
    },
    {
      id: 3,
      title: 'Healthcare Provider Website',
      category: 'business',
      client: 'Medical Practice',
      description: 'HIPAA-compliant website with patient portal, appointment scheduling, and telemedicine integration.',
      image: 'healthcare-site',
      technologies: ['WordPress', 'HIPAA Compliance', 'Telemedicine API', 'Secure Forms'],
      results: {
        appointments: '+150% online bookings',
        efficiency: '60% reduced admin calls',
        compliance: '100% HIPAA compliant'
      },
      features: ['Patient Portal', 'Online Appointments', 'Telemedicine', 'Secure Messaging'],
      url: '#',
      testimonial: 'Patient satisfaction has increased significantly with the new online services.',
      timeline: '10 weeks'
    },
    {
      id: 4,
      title: 'Charity Foundation Website',
      category: 'nonprofit',
      client: 'Children\'s Charity',
      description: 'Donation platform with volunteer management, event calendar, and impact tracking.',
      image: 'charity-site',
      technologies: ['WordPress', 'Donation System', 'Event Management', 'Volunteer Portal'],
      results: {
        donations: '+180% online donations',
        volunteers: '+90% volunteer signups',
        engagement: '+250% social engagement'
      },
      features: ['Online Donations', 'Volunteer Portal', 'Event Calendar', 'Impact Tracking'],
      url: '#',
      testimonial: 'The new website has transformed our fundraising capabilities.',
      timeline: '5 weeks'
    },
    {
      id: 5,
      title: 'Restaurant Chain Website',
      category: 'business',
      client: 'Restaurant Group',
      description: 'Multi-location website with online ordering, table reservations, and loyalty programme.',
      image: 'restaurant-site',
      technologies: ['WordPress', 'Online Ordering', 'Reservation System', 'Loyalty Programme'],
      results: {
        orders: '+220% online orders',
        reservations: '+85% table bookings',
        loyalty: '5,000+ members'
      },
      features: ['Online Ordering', 'Table Reservations', 'Loyalty Programme', 'Multi-Location'],
      url: '#',
      testimonial: 'Online orders now represent 40% of our total revenue.',
      timeline: '7 weeks'
    },
    {
      id: 6,
      title: 'Tech Startup Platform',
      category: 'business',
      client: 'SaaS Company',
      description: 'Product showcase with user onboarding, pricing calculator, and customer portal.',
      image: 'saas-platform',
      technologies: ['WordPress', 'Custom Calculator', 'User Onboarding', 'API Integration'],
      results: {
        signups: '+300% trial signups',
        conversion: '+65% trial to paid',
        support: '50% fewer support tickets'
      },
      features: ['Pricing Calculator', 'User Onboarding', 'Customer Portal', 'API Integration'],
      url: '#',
      testimonial: 'The new website has significantly improved our conversion funnel.',
      timeline: '9 weeks'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'ecommerce':
        return <ShoppingCart className="h-5 w-5" />;
      case 'business':
        return <Users className="h-5 w-5" />;
      case 'nonprofit':
        return <FileText className="h-5 w-5" />;
      default:
        return <Globe className="h-5 w-5" />;
    }
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-700/20"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Explore our recent projects and see how we've helped businesses across various industries 
              achieve their digital goals with custom WordPress solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-800/30">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {getCategoryIcon(category.id)}
                <span>{category.name}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50"
              >
                {/* Project Image */}
                <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-white/20 mb-2">
                      {project.id.toString().padStart(2, '0')}
                    </div>
                    <div className="text-white font-semibold">{project.image}</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.category === 'ecommerce' ? 'bg-green-600/20 text-green-400' :
                      project.category === 'business' ? 'bg-blue-600/20 text-blue-400' :
                      'bg-purple-600/20 text-purple-400'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  {/* Project Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                      <span className="text-blue-400 text-sm bg-blue-400/10 px-3 py-1 rounded-full">
                        {project.timeline}
                      </span>
                    </div>
                    <p className="text-blue-400 font-medium mb-4">
                      {project.client}
                    </p>
                    <p className="text-gray-300">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Results Achieved:</h4>
                    <div className="space-y-2">
                      {Object.entries(project.results).map(([key, value], resultIndex) => (
                        <div key={resultIndex} className="flex items-center justify-between">
                          <span className="text-gray-300 text-sm capitalize">
                            {key.replace(/([A-Z])/g, ' $1')}:
                          </span>
                          <span className="text-green-400 font-bold text-sm">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300 mb-6">
                    "{project.testimonial}"
                  </blockquote>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="text-blue-400 hover:text-blue-300 font-medium flex items-center space-x-2 transition-colors duration-300"
                    >
                      <span>Discuss Similar Project</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <button className="text-gray-400 hover:text-white transition-colors duration-300">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Portfolio <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The measurable results we've achieved for our clients across all projects and industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">300%</div>
              <div className="text-gray-300">Average Speed Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">250%</div>
              <div className="text-gray-300">Average Conversion Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-300">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join our portfolio of successful projects. Let's discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View More Work</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  TrendingUp, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Star,
  BarChart3,
  Globe,
  Settings,
  Code,
  Shield,
  Zap,
  Search,
  Smartphone
} from 'lucide-react';

const WordPressConsultancy = () => {
  const consultancyServices = [
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: 'WordPress Strategy Consulting',
      description: 'Strategic planning for WordPress implementations, migrations, and digital transformation projects.',
      features: ['Technical architecture planning', 'Platform selection guidance', 'Migration strategy development', 'Performance planning'],
      duration: '1-2 weeks'
    },
    {
      icon: <Code className="h-8 w-8 text-green-500" />,
      title: 'Technical Architecture Review',
      description: 'Comprehensive analysis of your WordPress setup with recommendations for improvements and optimisations.',
      features: ['Code quality assessment', 'Security vulnerability analysis', 'Performance bottleneck identification', 'Scalability planning'],
      duration: '1 week'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
      title: 'Digital Growth Consulting',
      description: 'Strategic advice on using WordPress to drive business growth, improve conversions, and enhance user experience.',
      features: ['Conversion optimisation strategy', 'User experience analysis', 'Content strategy development', 'SEO roadmap creation'],
      duration: '2-3 weeks'
    },
    {
      icon: <Shield className="h-8 w-8 text-red-500" />,
      title: 'Security & Compliance Consulting',
      description: 'Expert guidance on WordPress security, GDPR compliance, and data protection for UK businesses.',
      features: ['Security audit and recommendations', 'GDPR compliance assessment', 'Risk analysis and mitigation', 'Security policy development'],
      duration: '1-2 weeks'
    }
  ];

  const consultingProcess = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'Comprehensive analysis of your current WordPress setup, business goals, and technical requirements.',
      deliverables: ['Current state assessment', 'Business requirements analysis', 'Technical audit report', 'Opportunity identification'],
      duration: '3-5 days'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a tailored WordPress strategy aligned with your business objectives and technical constraints.',
      deliverables: ['Strategic roadmap', 'Technical recommendations', 'Implementation timeline', 'Resource requirements'],
      duration: '5-7 days'
    },
    {
      step: '03',
      title: 'Implementation Planning',
      description: 'Detailed planning for executing the WordPress strategy with risk mitigation and success metrics.',
      deliverables: ['Implementation plan', 'Risk assessment', 'Success metrics', 'Testing strategy'],
      duration: '3-5 days'
    },
    {
      step: '04',
      title: 'Ongoing Support',
      description: 'Continued guidance and support throughout implementation with regular reviews and adjustments.',
      deliverables: ['Regular progress reviews', 'Strategy adjustments', 'Technical guidance', 'Performance monitoring'],
      duration: 'Ongoing'
    }
  ];

  const expertiseAreas = [
    {
      area: 'Enterprise WordPress',
      description: 'Large-scale WordPress implementations for enterprise clients',
      experience: '10+ years'
    },
    {
      area: 'E-commerce Strategy',
      description: 'WooCommerce and e-commerce platform consulting',
      experience: '8+ years'
    },
    {
      area: 'Performance Optimisation',
      description: 'Website speed and performance improvement strategies',
      experience: '10+ years'
    },
    {
      area: 'Security & Compliance',
      description: 'WordPress security and GDPR compliance expertise',
      experience: '7+ years'
    },
    {
      area: 'Digital Marketing',
      description: 'SEO, content strategy, and conversion optimisation',
      experience: '9+ years'
    },
    {
      area: 'Technical Architecture',
      description: 'Scalable WordPress architecture and infrastructure',
      experience: '10+ years'
    }
  ];

  const caseStudies = [
    {
      client: 'Large UK Retailer',
      industry: 'Retail',
      challenge: 'Legacy e-commerce platform limiting growth and performance',
      solution: 'Strategic migration to WooCommerce with performance optimisation',
      results: {
        performance: '+400% speed improvement',
        conversions: '+85% increase',
        maintenance: '70% cost reduction',
        scalability: 'Handles 10x traffic'
      },
      testimonial: 'The strategic guidance was invaluable. Our new platform has transformed our online business.',
      duration: '12 weeks'
    },
    {
      client: 'Financial Services Firm',
      industry: 'Finance',
      challenge: 'Complex compliance requirements and security concerns',
      solution: 'Custom WordPress solution with enterprise security and compliance features',
      results: {
        compliance: '100% regulatory compliance',
        security: 'Zero security incidents',
        efficiency: '+60% operational efficiency',
        clientSatisfaction: '98% satisfaction rate'
      },
      testimonial: 'Their expertise in both WordPress and financial regulations was exactly what we needed.',
      duration: '16 weeks'
    },
    {
      client: 'Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Multiple sites requiring centralised management and GDPR compliance',
      solution: 'WordPress Multisite network with comprehensive data protection',
      results: {
        sites: '25 sites managed centrally',
        efficiency: '+80% management efficiency',
        compliance: 'Full GDPR compliance',
        performance: '+200% speed improvement'
      },
      testimonial: 'The multisite solution has revolutionised how we manage our digital presence.',
      duration: '20 weeks'
    }
  ];

  const consultingBenefits = [
    {
      icon: <Award className="h-6 w-6 text-blue-500" />,
      title: 'Expert Guidance',
      description: 'Access to 10+ years of WordPress expertise and industry knowledge'
    },
    {
      icon: <Target className="h-6 w-6 text-green-500" />,
      title: 'Strategic Focus',
      description: 'Align WordPress solutions with your business objectives and growth plans'
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-500" />,
      title: 'Faster Results',
      description: 'Avoid common pitfalls and accelerate your WordPress project timeline'
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-orange-500" />,
      title: 'Measurable ROI',
      description: 'Data-driven recommendations that deliver measurable business results'
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
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 rounded-2xl mb-8">
              <Users className="h-10 w-10 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              WordPress Consultancy
              <span className="block gradient-text">Strategic Expertise for UK Businesses</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Expert WordPress consulting services that help UK businesses make strategic decisions, 
              avoid costly mistakes, and maximise their digital investment with proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Book Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Free Strategy Call</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consultancy Services */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Expert <span className="gradient-text">Consulting Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic WordPress consulting that helps UK businesses make informed decisions and achieve their digital objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultancyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center">
                    {service.icon}
                  </div>
                  <span className="text-blue-400 font-bold text-sm bg-blue-400/10 px-3 py-1 rounded-full">
                    {service.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
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

      {/* Expertise Areas */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Expertise Areas</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deep expertise across all aspects of WordPress development, strategy, and implementation for UK businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {area.area}
                </h3>
                <p className="text-gray-300 mb-6">
                  {area.description}
                </p>
                <div className="text-blue-400 font-bold text-sm bg-blue-400/10 px-3 py-1 rounded-full inline-block">
                  {area.experience}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Process */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Consulting Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach that ensures you get maximum value from our WordPress expertise and strategic guidance.
            </p>
          </div>

          <div className="space-y-12">
            {consultingProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row items-start gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-grow bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 mb-6">
                        {step.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 lg:ml-8">
                      <span className="inline-flex items-center px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium">
                        <Clock className="h-4 w-4 mr-2" />
                        {step.duration}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Deliverables:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {step.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Consulting <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from UK businesses that have benefited from our strategic WordPress consulting expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {study.client}
                    </h3>
                    <span className="text-blue-400 text-sm bg-blue-400/10 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Completed in {study.duration}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-red-400 mb-2">Challenge:</h4>
                  <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                  
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Solution:</h4>
                  <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Results:</h4>
                  <div className="space-y-3">
                    {Object.entries(study.results).map(([key, value], resultIndex) => (
                      <div key={resultIndex} className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm capitalize">
                          {key.replace(/([A-Z])/g, ' $1')}:
                        </span>
                        <span className="text-green-400 font-bold text-sm">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300">
                  "{study.testimonial}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Our <span className="gradient-text">WordPress Consulting</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Strategic guidance that helps UK businesses make informed decisions and achieve better results from their WordPress investments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultingBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-xl mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready for Strategic WordPress Guidance?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get expert advice tailored to your business needs. Book a consultation to discuss your WordPress strategy and objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Book Strategy Session</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Free Initial Consultation</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WordPressConsultancy;
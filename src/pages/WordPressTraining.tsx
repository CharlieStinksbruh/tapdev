import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Users, 
  Clock, 
  Award, 
  CheckCircle, 
  ArrowRight,
  BookOpen,
  Video,
  Monitor,
  FileText,
  Target,
  Star,
  BarChart3,
  Settings,
  Code,
  Shield
} from 'lucide-react';

const WordPressTraining = () => {
  const trainingCourses = [
    {
      title: 'WordPress Basics for UK Businesses',
      level: 'Beginner',
      duration: '1 day',
      format: 'In-person or Online',
      description: 'Essential WordPress skills for business owners and content managers.',
      topics: [
        'WordPress dashboard navigation',
        'Creating and editing pages/posts',
        'Media library management',
        'User management basics',
        'Basic SEO principles',
        'Security best practices'
      ],
      audience: 'Business owners, content managers, marketing teams'
    },
    {
      title: 'Advanced WordPress Management',
      level: 'Intermediate',
      duration: '2 days',
      format: 'In-person or Online',
      description: 'Advanced WordPress skills for power users and administrators.',
      topics: [
        'Theme customisation',
        'Plugin management',
        'Performance optimisation',
        'Security configuration',
        'Backup and recovery',
        'Troubleshooting common issues'
      ],
      audience: 'IT managers, web administrators, power users'
    },
    {
      title: 'WordPress Development Fundamentals',
      level: 'Advanced',
      duration: '3 days',
      format: 'In-person',
      description: 'Technical WordPress development for developers and agencies.',
      topics: [
        'Theme development',
        'Plugin development',
        'Custom post types',
        'WordPress hooks and filters',
        'Database management',
        'Performance optimisation'
      ],
      audience: 'Developers, technical teams, agencies'
    },
    {
      title: 'WooCommerce for UK Retailers',
      level: 'Intermediate',
      duration: '2 days',
      format: 'In-person or Online',
      description: 'Complete e-commerce training for UK online retailers.',
      topics: [
        'WooCommerce setup and configuration',
        'Product management',
        'UK payment gateways',
        'Shipping and tax configuration',
        'Order management',
        'Performance optimisation'
      ],
      audience: 'E-commerce managers, online retailers, marketing teams'
    }
  ];

  const trainingFormats = [
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: 'Group Training',
      description: 'Cost-effective training for teams and organisations with multiple participants.',
      features: ['Up to 12 participants', 'Interactive workshops', 'Team exercises', 'Group discounts'],
      duration: '1-3 days'
    },
    {
      icon: <Monitor className="h-8 w-8 text-green-500" />,
      title: 'One-to-One Training',
      description: 'Personalised training tailored to your specific needs and skill level.',
      features: ['Customised curriculum', 'Flexible scheduling', 'Personal attention', 'Specific use cases'],
      duration: '4-8 hours'
    },
    {
      icon: <Video className="h-8 w-8 text-purple-500" />,
      title: 'Online Training',
      description: 'Remote training sessions delivered via video conferencing with screen sharing.',
      features: ['Remote delivery', 'Recorded sessions', 'Digital materials', 'Follow-up support'],
      duration: '2-6 hours'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-orange-500" />,
      title: 'Workshop Series',
      description: 'Extended training programme with multiple sessions over several weeks.',
      features: ['Progressive learning', 'Homework assignments', 'Ongoing support', 'Certification'],
      duration: '4-8 weeks'
    }
  ];

  const trainingBenefits = [
    {
      icon: <Target className="h-6 w-6 text-blue-500" />,
      title: 'Increased Productivity',
      description: 'Teams become more efficient at managing WordPress websites'
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: 'Reduced Risk',
      description: 'Proper training reduces the risk of security issues and mistakes'
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-purple-500" />,
      title: 'Better ROI',
      description: 'Maximise your WordPress investment with skilled team members'
    },
    {
      icon: <Award className="h-6 w-6 text-orange-500" />,
      title: 'Ongoing Support',
      description: 'Continued access to training materials and follow-up support'
    }
  ];

  const customTraining = [
    {
      area: 'Content Management',
      description: 'Training focused on content creation, editing, and publishing workflows',
      duration: '4-6 hours'
    },
    {
      area: 'E-commerce Management',
      description: 'WooCommerce training for product management and order processing',
      duration: '6-8 hours'
    },
    {
      area: 'SEO and Marketing',
      description: 'WordPress SEO tools and digital marketing integration training',
      duration: '4-6 hours'
    },
    {
      area: 'Security and Maintenance',
      description: 'Website security, backup procedures, and maintenance training',
      duration: '4-6 hours'
    },
    {
      area: 'Performance Optimisation',
      description: 'Speed optimisation techniques and performance monitoring',
      duration: '6-8 hours'
    },
    {
      area: 'Custom Development',
      description: 'Theme and plugin development for technical teams',
      duration: '2-3 days'
    }
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-green-700/20"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 rounded-2xl mb-8">
              <GraduationCap className="h-10 w-10 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              WordPress Training
              <span className="block gradient-text">Expert Skills for UK Teams</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Professional WordPress training courses for UK businesses. From beginner basics to advanced development, 
              empower your team with the skills to manage and grow your WordPress website effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Book Training</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Custom Training Quote</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Training Courses */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="gradient-text">Training Courses</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Structured training programmes designed for different skill levels and business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white">
                    {course.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    course.level === 'Beginner' ? 'bg-green-600/20 text-green-400' :
                    course.level === 'Intermediate' ? 'bg-blue-600/20 text-blue-400' :
                    'bg-purple-600/20 text-purple-400'
                  }`}>
                    {course.level}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6">
                  {course.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <span className="text-gray-400 text-sm">Duration:</span>
                    <p className="text-blue-400 font-medium">{course.duration}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Format:</span>
                    <p className="text-blue-400 font-medium">{course.format}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Topics Covered:</h4>
                  <ul className="space-y-2">
                    {course.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-blue-900/20 border border-blue-500/50 rounded-lg p-4">
                  <h5 className="font-medium text-blue-400 mb-2">Target Audience:</h5>
                  <p className="text-blue-300 text-sm">{course.audience}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Formats */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Flexible <span className="gradient-text">Training Formats</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the training format that best suits your team's needs, schedule, and learning preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingFormats.map((format, index) => (
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
                    {format.icon}
                  </div>
                  <span className="text-blue-400 font-bold text-sm bg-blue-400/10 px-3 py-1 rounded-full">
                    {format.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {format.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {format.description}
                </p>
                <ul className="space-y-2">
                  {format.features.map((feature, featureIndex) => (
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

      {/* Custom Training */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Custom <span className="gradient-text">Training Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored training programmes designed around your specific WordPress needs and business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customTraining.map((training, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {training.area}
                </h3>
                <p className="text-gray-300 mb-6">
                  {training.description}
                </p>
                <div className="text-blue-400 font-bold text-sm bg-blue-400/10 px-3 py-1 rounded-full inline-block">
                  {training.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Benefits */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Training <span className="gradient-text">Benefits</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Invest in your team's WordPress skills and see immediate improvements in productivity and website management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingBenefits.map((benefit, index) => (
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
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Upskill Your Team?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Invest in professional WordPress training and empower your team with the skills to manage your website effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Book Training Session</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Custom Training Quote</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WordPressTraining;
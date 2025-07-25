import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Search,
  Tag,
  Clock,
  TrendingUp,
  Code,
  Shield,
  Zap,
  Globe,
  BookOpen
} from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'wordpress', name: 'WordPress', count: 8 },
    { id: 'performance', name: 'Performance', count: 6 },
    { id: 'security', name: 'Security', count: 5 },
    { id: 'seo', name: 'SEO', count: 5 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'WordPress 6.4 Performance Improvements: What You Need to Know',
      excerpt: 'Discover the latest performance enhancements in WordPress 6.4 and how they can benefit your website\'s speed and user experience.',
      category: 'wordpress',
      author: 'James Mitchell',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'wordpress-performance',
      tags: ['WordPress', 'Performance', 'Updates'],
      featured: true
    },
    {
      id: 2,
      title: 'Complete Guide to Website Security in 2024',
      excerpt: 'Essential security practices every website owner should implement to protect against cyber threats and maintain user trust.',
      category: 'security',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '12 min read',
      image: 'security-guide',
      tags: ['Security', 'Best Practices', 'Cyber Threats'],
      featured: true
    },
    {
      id: 3,
      title: 'Core Web Vitals: Optimising for Google\'s Ranking Factors',
      excerpt: 'Learn how to improve your Core Web Vitals scores and boost your search engine rankings with practical optimisation techniques.',
      category: 'performance',
      author: 'Sarah Thompson',
      date: '2024-01-10',
      readTime: '10 min read',
      image: 'core-web-vitals',
      tags: ['SEO', 'Performance', 'Google'],
      featured: false
    },
    {
      id: 4,
      title: 'WordPress Maintenance: Why It\'s Critical for Your Business',
      excerpt: 'Understanding the importance of regular WordPress maintenance and how it protects your investment and ensures optimal performance.',
      category: 'wordpress',
      author: 'James Mitchell',
      date: '2024-01-08',
      readTime: '6 min read',
      image: 'wordpress-maintenance',
      tags: ['WordPress', 'Maintenance', 'Business'],
      featured: false
    },
    {
      id: 5,
      title: 'SEO Best Practices for WordPress Websites in 2024',
      excerpt: 'Comprehensive guide to optimising your WordPress website for search engines with the latest SEO techniques and strategies.',
      category: 'seo',
      author: 'Sarah Thompson',
      date: '2024-01-05',
      readTime: '15 min read',
      image: 'seo-wordpress',
      tags: ['SEO', 'WordPress', 'Content Strategy'],
      featured: false
    },
    {
      id: 6,
      title: 'Website Migration Checklist: Avoiding Common Pitfalls',
      excerpt: 'Essential steps and considerations for a successful website migration without losing traffic, rankings, or functionality.',
      category: 'wordpress',
      author: 'Michael Chen',
      date: '2024-01-03',
      readTime: '9 min read',
      image: 'migration-checklist',
      tags: ['Migration', 'WordPress', 'Best Practices'],
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'wordpress':
        return <Code className="h-4 w-4" />;
      case 'performance':
        return <Zap className="h-4 w-4" />;
      case 'security':
        return <Shield className="h-4 w-4" />;
      case 'seo':
        return <TrendingUp className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-blue-700/20"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Web Development <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Expert insights, tutorials, and industry updates to help you stay ahead in the ever-evolving world of web development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-800/30">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Search */}
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
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
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'all' && !searchTerm && (
        <section className="py-24">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Featured <span className="gradient-text">Articles</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and insightful articles covering the latest trends and best practices in web development.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-white/20 mb-2">
                        {post.id.toString().padStart(2, '0')}
                      </div>
                      <div className="text-white font-semibold">{post.image}</div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${
                        post.category === 'wordpress' ? 'bg-blue-600/20 text-blue-400' :
                        post.category === 'security' ? 'bg-red-600/20 text-red-400' :
                        post.category === 'performance' ? 'bg-green-600/20 text-green-400' :
                        'bg-purple-600/20 text-purple-400'
                      }`}>
                        {getCategoryIcon(post.category)}
                        <span className="capitalize">{post.category}</span>
                      </span>
                      <span className="flex items-center space-x-2 text-gray-400 text-sm">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-gray-400 text-sm">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400 text-sm">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-blue-400 hover:text-blue-300 font-medium flex items-center space-x-2 transition-colors duration-300"
                      >
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Latest <span className="gradient-text">Articles</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest insights, tutorials, and industry news from our team of web development experts.
            </p>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No articles found</h3>
              <p className="text-gray-300">Try adjusting your search terms or category filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white/20 mb-2">
                        {post.id.toString().padStart(2, '0')}
                      </div>
                      <div className="text-white font-semibold text-sm">{post.image}</div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${
                        post.category === 'wordpress' ? 'bg-blue-600/20 text-blue-400' :
                        post.category === 'security' ? 'bg-red-600/20 text-red-400' :
                        post.category === 'performance' ? 'bg-green-600/20 text-green-400' :
                        'bg-purple-600/20 text-purple-400'
                      }`}>
                        {getCategoryIcon(post.category)}
                        <span className="capitalize">{post.category}</span>
                      </span>
                      <span className="flex items-center space-x-2 text-gray-400 text-xs">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <span>{post.author}</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-700/50 text-gray-400 px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-blue-400 hover:text-blue-300 font-medium flex items-center space-x-1 transition-colors duration-300 text-sm"
                      >
                        <span>Read</span>
                        <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-12 border border-blue-500/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Our Latest Articles
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest web development insights, tutorials, and industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-glow flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Need Expert Help with Your Website?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              While our blog provides valuable insights, sometimes you need professional assistance. Let our experts help you implement these strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-2"
              >
                <span>Get Expert Help</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/services/wordpress-development"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Our Services</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
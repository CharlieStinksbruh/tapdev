import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  Mail, 
  Settings, 
  LogOut, 
  FileText,
  TrendingUp,
  Clock,
  Search,
  Filter,
  Download,
  Trash2,
  Eye,
  Edit,
  Save,
  X,
  Globe,
  Image,
  Code,
  Palette,
  Shield
} from 'lucide-react';

interface AdminDashboardProps {
  user: any;
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock data for demonstration
  const [stats] = useState({
    totalForms: 24,
    newForms: 8,
    totalSubscribers: 156,
    recentForms: [
      { id: 1, name: 'John Smith', email: 'john@example.com', status: 'new', submittedAt: new Date().toISOString() },
      { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', status: 'contacted', submittedAt: new Date(Date.now() - 86400000).toISOString() },
      { id: 3, name: 'Mike Wilson', email: 'mike@example.com', status: 'new', submittedAt: new Date(Date.now() - 172800000).toISOString() }
    ],
    recentSubscribers: [
      { id: 1, email: 'subscriber1@example.com', subscribedAt: new Date().toISOString() },
      { id: 2, email: 'subscriber2@example.com', subscribedAt: new Date(Date.now() - 86400000).toISOString() },
      { id: 3, email: 'subscriber3@example.com', subscribedAt: new Date(Date.now() - 172800000).toISOString() }
    ]
  });

  const [forms, setForms] = useState([
    { 
      id: 1, 
      name: 'John Smith', 
      email: 'john@example.com', 
      company: 'Tech Corp', 
      service: 'WordPress Development', 
      message: 'Looking for a custom WordPress solution for our business.',
      budget: '£5,000 - £10,000',
      status: 'new', 
      submittedAt: new Date().toISOString() 
    },
    { 
      id: 2, 
      name: 'Sarah Johnson', 
      email: 'sarah@example.com', 
      company: 'Design Studio', 
      service: 'Website Migration', 
      message: 'Need to migrate our site from Wix to WordPress.',
      budget: '£1,000 - £5,000',
      status: 'contacted', 
      submittedAt: new Date(Date.now() - 86400000).toISOString() 
    },
    { 
      id: 3, 
      name: 'Mike Wilson', 
      email: 'mike@example.com', 
      company: 'E-commerce Store', 
      service: 'Speed Optimization', 
      message: 'Our site is too slow and affecting conversions.',
      budget: '£2,000 - £5,000',
      status: 'completed', 
      submittedAt: new Date(Date.now() - 172800000).toISOString() 
    },
    { 
      id: 4, 
      name: 'Emma Davis', 
      email: 'emma@example.com', 
      company: 'Marketing Agency', 
      service: 'Security Services', 
      message: 'Need comprehensive security for client websites.',
      budget: '£10,000+',
      status: 'new', 
      submittedAt: new Date(Date.now() - 259200000).toISOString() 
    }
  ]);

  const [newsletter, setNewsletter] = useState([
    { id: 1, email: 'subscriber1@example.com', subscribedAt: new Date().toISOString(), status: 'active' },
    { id: 2, email: 'subscriber2@example.com', subscribedAt: new Date(Date.now() - 86400000).toISOString(), status: 'active' },
    { id: 3, email: 'subscriber3@example.com', subscribedAt: new Date(Date.now() - 172800000).toISOString(), status: 'active' },
    { id: 4, email: 'subscriber4@example.com', subscribedAt: new Date(Date.now() - 259200000).toISOString(), status: 'active' },
    { id: 5, email: 'subscriber5@example.com', subscribedAt: new Date(Date.now() - 345600000).toISOString(), status: 'active' }
  ]);

  const [seoSettings, setSeoSettings] = useState({
    siteName: 'TapDev - Professional Web Development Services',
    siteDescription: 'Professional WordPress development, website migrations, and comprehensive web services. Trusted by 500+ businesses across the UK.',
    favicon: '/favicon.ico',
    metaKeywords: 'wordpress development, website migration, web development, security services, speed optimization',
    ogImage: '/og-image.jpg',
    twitterCard: 'summary_large_image',
    schema: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "TapDev",
      "description": "Professional web development services specializing in WordPress development, website migrations, and comprehensive web solutions.",
      "url": "https://tapdev.co.uk",
      "logo": "https://tapdev.co.uk/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+44-xxx-xxx-xxxx",
        "contactType": "customer service",
        "email": "hello@tapdev.co.uk"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "GB"
      },
      "sameAs": [
        "https://twitter.com/tapdev",
        "https://linkedin.com/company/tapdev"
      ]
    },
    robotsTxt: "User-agent: *\nAllow: /\nSitemap: https://tapdev.co.uk/sitemap.xml",
    customCSS: "",
    customJS: "",
    googleAnalytics: "",
    googleTagManager: "",
    facebookPixel: ""
  });

  const updateFormStatus = (id: number, status: string) => {
    setForms(prevForms => 
      prevForms.map(form => 
        form.id === id ? { ...form, status } : form
      )
    );
  };

  const deleteForm = (id: number) => {
    if (!confirm('Are you sure you want to delete this form submission?')) return;
    setForms(prevForms => prevForms.filter(form => form.id !== id));
  };

  const deleteSubscriber = (id: number) => {
    if (!confirm('Are you sure you want to delete this subscriber?')) return;
    setNewsletter(prevNewsletter => prevNewsletter.filter(sub => sub.id !== id));
  };

  const updateSeoSettings = () => {
    // In a real app, this would save to a backend
    localStorage.setItem('seoSettings', JSON.stringify(seoSettings));
    alert('SEO settings saved successfully!');
  };

  const filteredForms = forms.filter(form => {
    const matchesSearch = form.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         form.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         form.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || form.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: <BarChart3 className="h-5 w-5" /> },
    { id: 'forms', name: 'Form Submissions', icon: <FileText className="h-5 w-5" /> },
    { id: 'newsletter', name: 'Newsletter', icon: <Mail className="h-5 w-5" /> },
    { id: 'seo', name: 'SEO Settings', icon: <Settings className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">TapDev Admin</h1>
              <p className="text-gray-400 text-sm">Welcome back, {user.username}</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-300"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 bg-gray-800 min-h-screen p-6">
          <div className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'dashboard' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8">Dashboard Overview</h2>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Forms</p>
                      <p className="text-3xl font-bold text-white">{stats.totalForms}</p>
                    </div>
                    <FileText className="h-8 w-8 text-blue-500" />
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">New Forms</p>
                      <p className="text-3xl font-bold text-white">{stats.newForms}</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-500" />
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Subscribers</p>
                      <p className="text-3xl font-bold text-white">{stats.totalSubscribers}</p>
                    </div>
                    <Users className="h-8 w-8 text-purple-500" />
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">This Month</p>
                      <p className="text-3xl font-bold text-white">+32</p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-orange-500" />
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold mb-4">Recent Form Submissions</h3>
                  <div className="space-y-4">
                    {stats.recentForms.map((form: any) => (
                      <div key={form.id} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                        <div>
                          <p className="font-medium">{form.name}</p>
                          <p className="text-gray-400 text-sm">{form.email}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          form.status === 'new' ? 'bg-green-600 text-white' :
                          form.status === 'contacted' ? 'bg-blue-600 text-white' :
                          'bg-gray-600 text-white'
                        }`}>
                          {form.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold mb-4">Recent Subscribers</h3>
                  <div className="space-y-4">
                    {stats.recentSubscribers.map((subscriber: any) => (
                      <div key={subscriber.id} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                        <div>
                          <p className="font-medium">{subscriber.email}</p>
                          <p className="text-gray-400 text-sm">
                            {new Date(subscriber.subscribedAt).toLocaleDateString()}
                          </p>
                        </div>
                        <span className="px-2 py-1 bg-green-600 text-white rounded-full text-xs">
                          Active
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'forms' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Form Submissions</h2>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search forms..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="all">All Status</option>
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Contact
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Service
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Budget
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {filteredForms.map((form) => (
                        <tr key={form.id} className="hover:bg-gray-700">
                          <td className="px-6 py-4">
                            <div>
                              <div className="text-sm font-medium text-white">{form.name}</div>
                              <div className="text-sm text-gray-400">{form.email}</div>
                              {form.company && (
                                <div className="text-sm text-gray-500">{form.company}</div>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-300">
                            {form.service || 'Not specified'}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-300">
                            {form.budget || 'Not specified'}
                          </td>
                          <td className="px-6 py-4">
                            <select
                              value={form.status}
                              onChange={(e) => updateFormStatus(form.id, e.target.value)}
                              className={`px-2 py-1 rounded-full text-xs font-medium border-0 ${
                                form.status === 'new' ? 'bg-green-600 text-white' :
                                form.status === 'contacted' ? 'bg-blue-600 text-white' :
                                'bg-gray-600 text-white'
                              }`}
                            >
                              <option value="new">New</option>
                              <option value="contacted">Contacted</option>
                              <option value="completed">Completed</option>
                            </select>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-300">
                            {new Date(form.submittedAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => alert(`Message: ${form.message}`)}
                                className="p-1 text-blue-400 hover:text-blue-300"
                                title="View message"
                              >
                                <Eye className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() => deleteForm(form.id)}
                                className="p-1 text-red-400 hover:text-red-300"
                                title="Delete form"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'newsletter' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Newsletter Subscribers</h2>
                <div className="text-sm text-gray-400">
                  Total: {newsletter.length} subscribers
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Subscribed Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {newsletter.map((subscriber) => (
                        <tr key={subscriber.id} className="hover:bg-gray-700">
                          <td className="px-6 py-4 text-sm font-medium text-white">
                            {subscriber.email}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-300">
                            {new Date(subscriber.subscribedAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 bg-green-600 text-white rounded-full text-xs font-medium">
                              {subscriber.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => deleteSubscriber(subscriber.id)}
                              className="p-1 text-red-400 hover:text-red-300"
                              title="Delete subscriber"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'seo' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">SEO Settings</h2>
                <button
                  onClick={updateSeoSettings}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Changes</span>
                </button>
              </div>

              <div className="space-y-8">
                {/* Basic SEO */}
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-blue-400" />
                    Basic SEO Settings
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Site Name
                      </label>
                      <input
                        type="text"
                        value={seoSettings.siteName || ''}
                        onChange={(e) => setSeoSettings({...seoSettings, siteName: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Favicon URL
                      </label>
                      <input
                        type="text"
                        value={seoSettings.favicon || ''}
                        onChange={(e) => setSeoSettings({...seoSettings, favicon: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="lg:col-span-2">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Site Description
                      </label>
                      <textarea
                        value={seoSettings.siteDescription || ''}
                        onChange={(e) => setSeoSettings({...seoSettings, siteDescription: e.target.value})}
                        rows={3}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="lg:col-span-2">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Meta Keywords
                      </label>
                      <input
                        type="text"
                        value={seoSettings.metaKeywords || ''}
                        onChange={(e) => setSeoSettings({...seoSettings, metaKeywords: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        placeholder="keyword1, keyword2, keyword3"
                      />
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <Image className="h-5 w-5 mr-2 text-purple-400" />
                    Social Media Settings
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Open Graph Image URL
                      </label>
                      <input
                        type="text"
                        value={seoSettings.ogImage || ''}
                        onChange={(e) => setSeoSettings({...seoSettings, ogImage: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Twitter Card Type
                      </label>
                      <select
                        value={seoSettings.twitterCard || 'summary_large_image'}
                        onChange={(e) => setSeoSettings({...seoSettings, twitterCard: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="summary">Summary</option>
                        <option value="summary_large_image">Summary Large Image</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Analytics */}
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-orange-400" />
                    Analytics & Tracking
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Google Analytics ID
                      </label>
                      <input
                        type="text"
                        value={seoSettings.googleAnalytics || ''}
                        onChange={(e) => setSeoSettings({...seoSettings, googleAnalytics: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        placeholder="GA-XXXXXXXXX-X"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Google Tag Manager ID
                      </label>
                      <input
                        type="text"
                        value={seoSettings.googleTagManager || ''}
                        onChange={(e) => setSeoSettings({...seoSettings, googleTagManager: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        placeholder="GTM-XXXXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Facebook Pixel ID
                      </label>
                      <input
                        type="text"
                        value={seoSettings.facebookPixel || ''}
                        onChange={(e) => setSeoSettings({...seoSettings, facebookPixel: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        placeholder="XXXXXXXXXXXXXXX"
                      />
                    </div>
                  </div>
                </div>

                {/* Custom Code */}
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <Palette className="h-5 w-5 mr-2 text-pink-400" />
                    Custom Code
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Custom CSS
                      </label>
                      <textarea
                        value={seoSettings.customCSS || ''}
                        onChange={(e) => setSeoSettings({...seoSettings, customCSS: e.target.value})}
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 font-mono text-sm"
                        placeholder="/* Custom CSS styles */"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Custom JavaScript
                      </label>
                      <textarea
                        value={seoSettings.customJS || ''}
                        onChange={(e) => setSeoSettings({...seoSettings, customJS: e.target.value})}
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 font-mono text-sm"
                        placeholder="// Custom JavaScript code"
                      />
                    </div>
                  </div>
                </div>

                {/* Robots.txt */}
                <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-red-400" />
                    Robots.txt
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Robots.txt Content
                    </label>
                    <textarea
                      value={seoSettings.robotsTxt || ''}
                      onChange={(e) => setSeoSettings({...seoSettings, robotsTxt: e.target.value})}
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 font-mono text-sm"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
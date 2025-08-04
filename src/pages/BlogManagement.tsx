import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRealData } from '../hooks/useRealData';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Search, 
  Filter,
  Calendar,
  User,
  Tag,
  Image,
  Code,
  Save,
  X,
  Upload,
  Settings,
  Globe,
  BarChart3
} from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage: string;
  publishedAt: string;
  status: 'draft' | 'published';
  seo: {
    title: string;
    description: string;
    keywords: string;
    ogImage: string;
  };
}

const BlogManagement = () => {
  const { blogPosts: posts, setBlogPosts: setPosts } = useRealData();
  const [isEditing, setIsEditing] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('content');

  const categories = [
    'WordPress Development',
    'Website Security',
    'Performance Optimisation',
    'SEO & Marketing',
    'Web Design',
    'E-commerce',
    'Maintenance',
    'Industry News'
  ];

  useEffect(() => {
    // Initialize with sample blog posts if none exist
    if (posts.length === 0) {
      const samplePosts: BlogPost[] = [
        {
          id: 1,
          title: 'WordPress Security Best Practices for UK Businesses',
          slug: 'wordpress-security-best-practices-uk-businesses',
          excerpt: 'Essential security measures every UK business should implement to protect their WordPress website from cyber threats.',
          content: '<h2>Introduction</h2><p>WordPress security is crucial for UK businesses...</p>',
          author: 'James Mitchell',
          category: 'Website Security',
          tags: ['Security', 'WordPress', 'UK Business'],
          featuredImage: 'security-guide',
          publishedAt: new Date().toISOString(),
          status: 'published',
          seo: {
            title: 'WordPress Security Best Practices for UK Businesses',
            description: 'Essential security measures every UK business should implement to protect their WordPress website.',
            keywords: 'wordpress security, uk business, website protection',
            ogImage: '/images/security-guide.jpg'
          }
        }
      ];
      setPosts(samplePosts);
      localStorage.setItem('blogPosts', JSON.stringify(samplePosts));
    }
  }, [posts.length, setPosts]);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container-custom py-24">
        <h1 className="text-4xl font-bold mb-8">Blog Management</h1>
        <p className="text-gray-300 mb-8">Manage your blog posts and content from this dashboard.</p>
        
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <p className="text-center text-gray-400">
            Blog management functionality is being developed. 
            Current posts: {posts.length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogManagement
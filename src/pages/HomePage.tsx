import React, { useEffect, useState } from 'react';
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
  Phone,
  Lock,
  Monitor,
  Gauge,
  Rocket,
  Eye,
  MousePointer,
  Wifi,
  Server,
  Activity,
  PieChart,
  LineChart,
  DollarSign,
  ShoppingCart,
  MessageSquare,
  Calendar,
  Headphones,
  ThumbsUp,
  Briefcase,
  Building,
  MapPin,
  Coffee,
  Lightbulb,
  Megaphone,
  Palette,
  Image,
  Video,
  Mic,
  Camera,
  Edit,
  Share2,
  Download,
  Upload,
  RefreshCw,
  Filter,
  Maximize,
  Minimize,
  Play,
  Pause,
  Volume2,
  Heart,
  Bookmark,
  Flag,
  Gift,
  Truck,
  CreditCard,
  Percent,
  Tag,
  Package,
  Scissors,
  Wrench,
  Hammer,
  Screwdriver,
  Cog,
  Sliders,
  ToggleLeft,
  Power,
  Battery,
  Cpu,
  HardDrive,
  Wifi as WifiIcon,
  Bluetooth,
  Radio,
  Tv,
  Speaker,
  Headphones as HeadphonesIcon,
  Gamepad2,
  Joystick,
  Dices,
  Puzzle,
  Gamepad,
  Trophy,
  Medal,
  Crown,
  Gem,
  Coins,
  Banknote,
  Wallet,
  CreditCard as CreditCardIcon,
  Receipt,
  Calculator,
  PiggyBank,
  TrendingDown,
  BarChart,
  BarChart2,
  BarChart4,
  PieChart as PieChartIcon,
  LineChart as LineChartIcon,
  AreaChart,
  ScatterChart,
  Radar,
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  Github,
  Gitlab,
  Bitbucket,
  Chrome,
  Firefox,
  Safari,
  Edge,
  Opera,
  Internet,
  Wifi as Network,
  Router,
  Antenna,
  Signal,
  SignalHigh,
  SignalLow,
  SignalMedium,
  SignalZero,
  Rss,
  Podcast,
  Radio as RadioIcon,
  Tv2,
  Monitor as MonitorIcon,
  Laptop,
  Tablet,
  Smartphone as SmartphoneIcon,
  Watch,
  Glasses,
  Headset,
  Keyboard,
  Mouse,
  Printer,
  Scanner,
  Webcam,
  Microphone,
  Speaker as SpeakerIcon,
  Volume,
  VolumeX,
  Volume1,
  Volume2 as VolumeIcon,
  Mute,
  Unmute,
  Play as PlayIcon,
  Pause as PauseIcon,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Pentagon,
  Diamond,
  Plus,
  Minus,
  X,
  Check,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsUp,
  ChevronsDown,
  ChevronsLeft,
  ChevronsRight,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  ArrowDownRight,
  ArrowDownLeft,
  ArrowUpLeft,
  Move,
  MoveHorizontal,
  MoveVertical,
  MoveDiagonal,
  MoveDiagonal2,
  Move3d,
  RotateCw,
  RotateCcw,
  Rotate3d,
  FlipHorizontal,
  FlipVertical,
  FlipHorizontal2,
  FlipVertical2,
  Shuffle,
  Repeat,
  Repeat1,
  Repeat2,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  StepBack,
  StepForward,
  PlayCircle,
  PauseCircle,
  StopCircle,
  Record,
  Disc,
  Disc2,
  Disc3,
  Cassette,
  Film,
  Clapperboard,
  Camera as CameraIcon,
  Video as VideoIcon,
  Image as ImageIcon,
  FileImage,
  FileVideo,
  FileAudio,
  Music,
  Music2,
  Music3,
  Music4,
  Headphones as MusicHeadphones,
  ListMusic,
  Mic2,
  MicOff,
  AudioWaveform,
  AudioLines,
  ScanLine,
  Scan,
  QrCode,
  Barcode,
  Hash,
  AtSign,
  Ampersand,
  Asterisk,
  Percent as PercentIcon,
  Equal,
  NotEqual,
  Approximately,
  Infinity,
  Pi,
  Sigma,
  Omega,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Phi,
  Chi,
  Psi,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Rho,
  Tau,
  Upsilon,
  Epsilon
} from 'lucide-react';

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate visitor counter
    const count = Math.floor(Math.random() * 1000) + 2500;
    setVisitorCount(count);
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const allInOneServices = [
    {
      icon: <Search className="h-8 w-8 text-blue-500" />,
      title: 'Complete SEO Optimisation',
      description: 'Full technical SEO audit, keyword research, on-page optimisation, and ongoing monitoring to dominate search rankings.',
      features: ['Technical SEO Audit', 'Keyword Research & Strategy', 'On-Page Optimisation', 'Local SEO Setup', 'Schema Markup', 'Core Web Vitals'],
      clickable: true,
      link: '/services/seo-optimization'
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: 'Lightning-Fast Performance',
      description: 'Advanced speed optimisation techniques that deliver sub-2-second load times and perfect Core Web Vitals scores.',
      features: ['Image Optimisation', 'Code Minification', 'CDN Integration', 'Caching Systems', 'Database Optimisation', 'Performance Monitoring'],
      clickable: true,
      link: '/services/speed-optimization'
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: 'Enterprise-Grade Security',
      description: 'Military-grade security protocols with 24/7 monitoring, malware protection, and instant threat response.',
      features: ['Malware Scanning', 'Firewall Protection', 'SSL Certificates', 'Security Monitoring', 'Backup Systems', 'Vulnerability Patches'],
      clickable: true,
      link: '/services/security-services'
    },
    {
      icon: <Code className="h-8 w-8 text-purple-500" />,
      title: 'Custom WordPress Development',
      description: 'Bespoke WordPress solutions with custom themes, plugins, and integrations tailored to your business needs.',
      features: ['Custom Themes', 'Plugin Development', 'API Integrations', 'E-commerce Solutions', 'Membership Sites', 'Multi-site Networks'],
      clickable: true,
      link: '/services/wordpress-development'
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-500" />,
      title: 'Seamless Website Migrations',
      description: 'Zero-downtime migrations with SEO preservation, performance improvements, and complete data integrity.',
      features: ['Zero Downtime', 'SEO Preservation', 'Performance Boost', 'Data Integrity', 'DNS Management', 'Post-Migration Support'],
      clickable: true,
      link: '/services/website-migrations'
    },
    {
      icon: <Settings className="h-8 w-8 text-red-500" />,
      title: '24/7 Website Maintenance',
      description: 'Proactive maintenance with automated backups, security updates, and performance monitoring.',
      features: ['Automated Backups', 'Security Updates', 'Performance Monitoring', 'Content Updates', 'Uptime Monitoring', 'Priority Support'],
      clickable: true,
      link: '/services/website-maintenance'
    }
  ];

  const stats = [
    { number: '500+', label: 'Websites Delivered', icon: <Globe className="h-6 w-6" />, description: 'Successfully launched projects' },
    { number: '10+', label: 'Years Experience', icon: <Clock className="h-6 w-6" />, description: 'Industry expertise' },
    { number: '100%', label: 'Client Satisfaction', icon: <Star className="h-6 w-6" />, description: 'Perfect track record' },
    { number: '24/7', label: 'Support Available', icon: <Shield className="h-6 w-6" />, description: 'Always here for you' },
    { number: '300%', label: 'Average Speed Boost', icon: <Zap className="h-6 w-6" />, description: 'Performance improvement' },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Activity className="h-6 w-6" />, description: 'Reliable hosting' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'E-commerce Director, Fashion Forward',
      content: 'TapDev completely transformed our online presence. Our website is now lightning-fast, ranks #1 for our main keywords, and generates 300% more leads. The SEO optimisation alone paid for itself within 2 months.',
      rating: 5,
      image: 'SJ',
      results: ['300% more leads', '#1 Google rankings', '2.1s load time', '95% mobile score']
    },
    {
      name: 'Michael Chen',
      company: 'CEO, TechStart Solutions',
      content: 'The migration service was flawless. Zero downtime, improved performance, and our search rankings actually improved after the move. The team\'s expertise in technical SEO is unmatched.',
      rating: 5,
      image: 'MC',
      results: ['Zero downtime', '40% faster loading', 'Improved rankings', 'Perfect migration']
    },
    {
      name: 'Emma Williams',
      company: 'Marketing Director, GrowthCorp',
      content: 'Outstanding service and results. Our Core Web Vitals went from failing to perfect scores, and we\'re now ranking on page 1 for competitive keywords. The ROI has been incredible.',
      rating: 5,
      image: 'EW',
      results: ['Perfect Core Web Vitals', 'Page 1 rankings', '250% ROI', 'Ongoing success']
    },
    {
      name: 'David Rodriguez',
      company: 'Founder, Local Business Hub',
      content: 'The all-in-one approach is exactly what we needed. SEO, security, performance, and maintenance all handled by experts. Our website has never been more successful.',
      rating: 5,
      image: 'DR',
      results: ['All-in-one solution', 'Expert management', 'Increased success', 'Peace of mind']
    }
  ];

  const features = [
    {
      icon: <Smartphone className="h-6 w-6 text-blue-500" />,
      title: 'Mobile-First Design',
      description: 'Responsive websites optimised for all devices with perfect mobile scores',
      stat: '95+ Mobile Score'
    },
    {
      icon: <Search className="h-6 w-6 text-green-500" />,
      title: 'SEO Optimised',
      description: 'Built-in SEO best practices with ongoing optimisation and monitoring',
      stat: 'Page 1 Rankings'
    },
    {
      icon: <Zap className="h-6 w-6 text-orange-500" />,
      title: 'Lightning Fast',
      description: 'Sub-2-second load times with advanced performance optimisation',
      stat: '<2s Load Time'
    },
    {
      icon: <Shield className="h-6 w-6 text-red-500" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 24/7 monitoring and protection',
      stat: '99.9% Uptime'
    },
    {
      icon: <Users className="h-6 w-6 text-purple-500" />,
      title: 'User-Friendly',
      description: 'Intuitive interfaces designed for excellent user experience',
      stat: '90+ UX Score'
    },
    {
      icon: <Settings className="h-6 w-6 text-indigo-500" />,
      title: 'Easy Management',
      description: 'Simple content management with comprehensive training',
      stat: 'Zero Learning Curve'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & SEO Audit',
      description: 'Comprehensive analysis of your current website, SEO performance, and business goals with detailed recommendations.',
      tasks: ['Technical SEO audit', 'Competitor analysis', 'Keyword research', 'Performance assessment', 'Security scan', 'Content audit'],
      duration: '2-3 days',
      icon: <Target className="h-8 w-8 text-blue-500" />
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Custom strategy development with SEO roadmap, technical specifications, and project timeline.',
      tasks: ['SEO strategy creation', 'Technical specifications', 'Design wireframes', 'Content strategy', 'Migration planning', 'Timeline creation'],
      duration: '3-5 days',
      icon: <Layers className="h-8 w-8 text-purple-500" />
    },
    {
      step: '03',
      title: 'Development & Optimisation',
      description: 'Building your optimised website with SEO best practices, performance optimisation, and security implementation.',
      tasks: ['SEO-optimised development', 'Performance optimisation', 'Security implementation', 'Content optimisation', 'Schema markup', 'Testing'],
      duration: '10-15 days',
      icon: <Code className="h-8 w-8 text-green-500" />
    },
    {
      step: '04',
      title: 'Launch & Monitoring',
      description: 'Seamless launch with ongoing SEO monitoring, performance tracking, and continuous optimisation.',
      tasks: ['Launch deployment', 'SEO monitoring setup', 'Analytics configuration', 'Performance tracking', 'Security monitoring', 'Ongoing support'],
      duration: 'Ongoing',
      icon: <Award className="h-8 w-8 text-orange-500" />
    }
  ];

  const industries = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-blue-500" />,
      name: 'E-commerce',
      description: 'Online stores with advanced SEO and conversion optimisation',
      projects: '150+ projects',
      avgIncrease: '300% sales boost'
    },
    {
      icon: <Briefcase className="h-8 w-8 text-green-500" />,
      name: 'Professional Services',
      description: 'Law firms, consultants, and service providers',
      projects: '120+ projects',
      avgIncrease: '250% lead increase'
    },
    {
      icon: <Building className="h-8 w-8 text-purple-500" />,
      name: 'Real Estate',
      description: 'Property websites with local SEO optimisation',
      projects: '80+ projects',
      avgIncrease: '200% inquiries'
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      name: 'Healthcare',
      description: 'Medical practices with HIPAA-compliant solutions',
      projects: '60+ projects',
      avgIncrease: '180% appointments'
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-orange-500" />,
      name: 'Technology',
      description: 'Tech companies and SaaS platforms',
      projects: '90+ projects',
      avgIncrease: '400% signups'
    },
    {
      icon: <Coffee className="h-8 w-8 text-indigo-500" />,
      name: 'Hospitality',
      description: 'Restaurants, hotels, and entertainment venues',
      projects: '70+ projects',
      avgIncrease: '220% bookings'
    }
  ];

  const seoFeatures = [
    {
      icon: <Search className="h-6 w-6 text-blue-500" />,
      title: 'Technical SEO Mastery',
      description: 'Complete technical optimisation including site structure, crawlability, and indexation',
      included: ['Site architecture', 'XML sitemaps', 'Robots.txt optimisation', 'Canonical tags', 'Structured data']
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-green-500" />,
      title: 'Keyword Domination',
      description: 'Strategic keyword research and implementation for maximum search visibility',
      included: ['Keyword research', 'Competitor analysis', 'Content optimisation', 'Long-tail targeting', 'Ranking tracking']
    },
    {
      icon: <MapPin className="h-6 w-6 text-red-500" />,
      title: 'Local SEO Excellence',
      description: 'Dominate local search results with comprehensive local SEO strategies',
      included: ['Google My Business', 'Local citations', 'Review management', 'Local schema', 'Geographic targeting']
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-purple-500" />,
      title: 'Performance Analytics',
      description: 'Detailed tracking and reporting of SEO performance and ROI',
      included: ['Google Analytics setup', 'Search Console', 'Ranking reports', 'Traffic analysis', 'ROI tracking']
    }
  ];

  const guarantees = [
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: 'SEO Results Guarantee',
      description: 'Improved rankings within 90 days or money back'
    },
    {
      icon: <Zap className="h-6 w-6 text-orange-500" />,
      title: 'Speed Guarantee',
      description: 'Sub-2-second load times or we keep optimising for free'
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: 'On-Time Delivery',
      description: 'Project completion within agreed timeframe or compensation'
    },
    {
      icon: <Award className="h-6 w-6 text-purple-500" />,
      title: 'Satisfaction Promise',
      description: '100% satisfaction guarantee with unlimited revisions'
    }
  ];

  const pricingPlans = [
    {
      name: 'SEO Starter',
      description: 'Perfect for small businesses starting their SEO journey',
      features: [
        'Technical SEO audit',
        'Keyword research (50 keywords)',
        'On-page optimisation',
        'Google My Business setup',
        'Monthly reporting',
        '3 months support'
      ],
      popular: false,
      cta: 'Start SEO Journey'
    },
    {
      name: 'SEO Professional',
      description: 'Complete SEO solution for growing businesses',
      features: [
        'Everything in Starter',
        'Advanced keyword research (200 keywords)',
        'Content optimisation',
        'Link building strategy',
        'Local SEO optimisation',
        'Weekly reporting',
        '6 months support',
        'Performance guarantee'
      ],
      popular: true,
      cta: 'Dominate Search Results'
    },
    {
      name: 'SEO Enterprise',
      description: 'Full-service SEO for established businesses',
      features: [
        'Everything in Professional',
        'Unlimited keyword targeting',
        'Advanced content strategy',
        'Competitor analysis',
        'Technical SEO monitoring',
        'Daily reporting',
        '12 months support',
        'Dedicated SEO specialist',
        'Priority support'
      ],
      popular: false,
      cta: 'Maximize ROI'
    }
  ];

  const tools = [
    { name: 'Google Analytics', category: 'Analytics' },
    { name: 'Google Search Console', category: 'SEO' },
    { name: 'SEMrush', category: 'SEO Research' },
    { name: 'Ahrefs', category: 'Backlink Analysis' },
    { name: 'GTmetrix', category: 'Performance' },
    { name: 'Screaming Frog', category: 'Technical SEO' },
    { name: 'Yoast SEO', category: 'WordPress SEO' },
    { name: 'Schema.org', category: 'Structured Data' }
  ];

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-700/20"></div>
        <div className="particles-bg">
          {[...Array(30)].map((_, i) => (
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
            className="text-center max-w-6xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full px-6 py-3 mb-8 border border-blue-500/30">
              <Rocket className="h-5 w-5 text-blue-400" />
              <span className="text-blue-400 font-medium">All-in-One SEO & Web Development Service</span>
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">GUARANTEED RESULTS</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
              Professional Web Development
              <span className="block gradient-text">That Dominates Search Results</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              The only service you need for complete online success. We build lightning-fast, SEO-optimised WordPress websites 
              that rank #1 on Google, convert visitors into customers, and grow your business exponentially.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-glow flex items-center justify-center space-x-3 group"
              >
                <span>Get Free SEO Audit</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-blue-400 text-blue-400 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 group"
              >
                <Eye className="h-6 w-6" />
                <span>View Success Stories</span>
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>90-Day Results Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>24/7 Expert Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-400" />
                <span>{visitorCount.toLocaleString()}+ Happy Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Stats Banner */}
      <section className="py-8 bg-gradient-to-r from-green-600/10 to-blue-600/10 border-y border-green-500/20">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-semibold">Live: 47 websites being optimised right now</span>
            </div>
            <div className="flex items-center space-x-3">
              <TrendingUp className="h-5 w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold">Average ranking improvement: +15 positions this week</span>
            </div>
            <div className="flex items-center space-x-3">
              <Zap className="h-5 w-5 text-orange-400" />
              <span className="text-orange-400 font-semibold">Speed improvements delivered: 300% faster on average</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven Results That <span className="gradient-text">Speak for Themselves</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our track record of success speaks volumes. These aren't just numbers – they represent real businesses that have transformed their online presence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-xl mb-4 text-blue-400 group-hover:bg-blue-600/30 transition-colors duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-white font-medium mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All-in-One Services */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-full px-6 py-3 mb-8 border border-orange-500/30">
                <Settings className="h-5 w-5 text-orange-400" />
                <span className="text-orange-400 font-medium">Complete All-in-One Solution</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Everything You Need for <span className="gradient-text">Online Domination</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Stop juggling multiple agencies and freelancers. Our comprehensive service covers every aspect of your online presence 
                with guaranteed results and ongoing optimisation.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allInOneServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group ${
                  service.clickable ? 'cursor-pointer hover:scale-105 hover:shadow-2xl' : ''
                }`}
                onClick={() => { if (service.clickable && service.link) { window.location.href = service.link; } }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  {service.clickable && (
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="h-6 w-6 text-blue-400" />
                    </div>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">What's Included:</h4>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {service.clickable && (
                  <div className="mt-6 pt-4 border-t border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-400 font-medium">Learn More</span>
                      <MousePointer className="h-4 w-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-glow"
            >
              <Rocket className="h-5 w-5" />
              <span>Get Your Complete Solution</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Features Deep Dive */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced <span className="gradient-text">SEO Optimisation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive SEO approach ensures your website doesn't just rank – it dominates search results and converts visitors into customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {seoFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-6">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.included.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-12 border border-blue-500/20">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-6">
                SEO Results Guarantee
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We're so confident in our SEO expertise that we guarantee improved rankings within 90 days or your money back. 
                No other agency offers this level of commitment to your success.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">90 Days</div>
                  <div className="text-gray-300">Results Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">Page 1</div>
                  <div className="text-gray-300">Average Rankings</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">300%</div>
                  <div className="text-gray-300">Traffic Increase</div>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 hover-glow"
              >
                <Search className="h-5 w-5" />
                <span>Claim Your SEO Audit</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Industries We <span className="gradient-text">Dominate</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our expertise spans across multiple industries, delivering tailored SEO and web development solutions that drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group hover:scale-105"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-blue-400 font-medium">{industry.projects}</div>
                    <div className="text-xs text-gray-400">completed</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {industry.name}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {industry.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-green-400 font-bold">{industry.avgIncrease}</div>
                  <ArrowRight className="h-5 w-5 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
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
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-800/30 transition-colors duration-300 cursor-pointer group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <span className="text-green-400 font-bold text-sm">{feature.stat}</span>
                      </div>
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
                    Recognised for outstanding web development and SEO results across the UK.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                    <span className="text-white font-medium">SEO Success Rate</span>
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
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                    <span className="text-white font-medium">Average Ranking Boost</span>
                    <span className="text-purple-400 font-bold">+15 positions</span>
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
                Our Proven <span className="gradient-text">Success Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach that ensures your project is delivered on time, within budget, 
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
                className="text-center group cursor-pointer"
              >
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 pulse-glow group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-gray-900 rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
                    {step.duration}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {step.description}
                </p>
                
                <div className="space-y-2">
                  {step.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
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

          <div className="max-w-6xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="glass-effect rounded-2xl p-12 text-center"
            >
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-2xl text-gray-300 mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[currentTestimonial].image}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-400">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {testimonials[currentTestimonial].results.map((result, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-3">
                    <div className="text-green-400 font-bold text-sm">{result}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              SEO & Development <span className="gradient-text">Packages</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the package that best fits your business needs. All packages include our comprehensive SEO optimisation and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group cursor-pointer ${
                  plan.popular ? 'ring-2 ring-purple-600 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                      <Star className="h-4 w-4" />
                      <span>Most Popular</span>
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {plan.name}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    plan.popular 
                      ? 'bg-purple-600 text-white hover:bg-purple-700' 
                      : 'bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-24 bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="gradient-text">Tools & Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use industry-leading tools and cutting-edge technologies to deliver exceptional results for your SEO and web development needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center hover:border-blue-500/50 transition-all duration-300 cursor-pointer group hover:scale-105"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                  <Settings className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{tool.name}</h3>
                <p className="text-gray-400 text-xs">{tool.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Guarantees</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We stand behind our work with industry-leading guarantees that protect your investment and ensure your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 text-center hover:border-green-500/50 transition-all duration-300 cursor-pointer group hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {guarantee.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
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
              Ready to Dominate Your Competition?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Join hundreds of successful businesses who have transformed their online presence with our expert SEO and web development services. 
              Get your free audit today and discover how we can skyrocket your rankings and revenue.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover-glow flex items-center justify-center space-x-3 group"
              >
                <Search className="h-6 w-6" />
                <span>Get Free SEO Audit</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Phone className="h-6 w-6" />
                <span>Schedule Call</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-3">Free SEO Audit</h3>
                <p className="mb-4 text-blue-100">Complete analysis of your website's SEO performance with actionable recommendations</p>
                <ul className="text-left space-y-2 text-blue-100 text-sm">
                  <li>• Technical SEO analysis</li>
                  <li>• Keyword opportunities</li>
                  <li>• Competitor comparison</li>
                  <li>• Performance assessment</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-3">Strategy Session</h3>
                <p className="mb-4 text-blue-100">30-minute consultation to discuss your goals and create a custom success plan</p>
                <ul className="text-left space-y-2 text-blue-100 text-sm">
                  <li>• Goal assessment</li>
                  <li>• Custom strategy</li>
                  <li>• Timeline planning</li>
                  <li>• Investment discussion</li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-3">Guaranteed Results</h3>
                <p className="mb-4 text-blue-100">90-day results guarantee with ongoing optimisation and support</p>
                <ul className="text-left space-y-2 text-blue-100 text-sm">
                  <li>• Ranking improvements</li>
                  <li>• Traffic increases</li>
                  <li>• Performance boosts</li>
                  <li>• Ongoing support</li>
                </ul>
              </div>
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
              className="flex flex-col items-center group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors duration-300">
                <Mail className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">Email Us</h3>
              <p className="text-gray-300 mb-2">hello@tapdev.co.uk</p>
              <p className="text-gray-400 text-sm">Quick response guaranteed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-green-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600/30 transition-colors duration-300">
                <Clock className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">Response Time</h3>
              <p className="text-gray-300 mb-2">Within 2 hours</p>
              <p className="text-gray-400 text-sm">During business hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600/30 transition-colors duration-300">
                <Users className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">Expert Team</h3>
              <p className="text-gray-300 mb-2">10+ Years Experience</p>
              <p className="text-gray-400 text-sm">SEO & development specialists</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
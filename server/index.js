const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';

// Middleware
app.use(helmet());
app.use(compression());
app.use(morgan('combined'));
app.use(cors({
  origin: process.env.NODE_ENV === 'production' ? 'https://yourdomain.com' : 'http://localhost:5173',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Data storage paths
const DATA_DIR = path.join(__dirname, 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const FORMS_FILE = path.join(DATA_DIR, 'forms.json');
const NEWSLETTER_FILE = path.join(DATA_DIR, 'newsletter.json');
const SEO_FILE = path.join(DATA_DIR, 'seo.json');

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

// Initialize data files
async function initializeDataFiles() {
  await ensureDataDir();
  
  const files = [
    { path: USERS_FILE, data: [] },
    { path: FORMS_FILE, data: [] },
    { path: NEWSLETTER_FILE, data: [] },
    { 
      path: SEO_FILE, 
      data: {
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
      }
    }
  ];

  for (const file of files) {
    try {
      await fs.access(file.path);
    } catch {
      await fs.writeFile(file.path, JSON.stringify(file.data, null, 2));
    }
  }

  // Create default admin user if no users exist
  try {
    const users = JSON.parse(await fs.readFile(USERS_FILE, 'utf8'));
    if (users.length === 0) {
      const hashedPassword = await bcrypt.hash('Chazf123!', 12);
      users.push({
        id: 1,
        username: 'Charlie',
        password: hashedPassword,
        role: 'admin',
        createdAt: new Date().toISOString()
      });
      await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
    }
  } catch (error) {
    console.error('Error creating default user:', error);
  }
}

// Helper functions
async function readJsonFile(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeJsonFile(filePath, data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

// Authentication middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
}

// Routes

// Authentication
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password required' });
    }

    const users = await readJsonFile(USERS_FILE);
    const user = users.find(u => u.username === username);

    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, service, message, budget } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    const forms = await readJsonFile(FORMS_FILE);
    const newForm = {
      id: Date.now(),
      name,
      email,
      company: company || '',
      service: service || '',
      message,
      budget: budget || '',
      submittedAt: new Date().toISOString(),
      status: 'new',
      notes: ''
    };

    forms.push(newForm);
    await writeJsonFile(FORMS_FILE, forms);

    res.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Newsletter subscription
app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const newsletter = await readJsonFile(NEWSLETTER_FILE);
    
    // Check if email already exists
    if (newsletter.find(sub => sub.email === email)) {
      return res.status(400).json({ error: 'Email already subscribed' });
    }

    const newSubscription = {
      id: Date.now(),
      email,
      subscribedAt: new Date().toISOString(),
      status: 'active'
    };

    newsletter.push(newSubscription);
    await writeJsonFile(NEWSLETTER_FILE, newsletter);

    res.json({ success: true, message: 'Successfully subscribed to newsletter' });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Admin routes (protected)

// Get dashboard stats
app.get('/api/admin/stats', authenticateToken, async (req, res) => {
  try {
    const forms = await readJsonFile(FORMS_FILE);
    const newsletter = await readJsonFile(NEWSLETTER_FILE);

    const stats = {
      totalForms: forms.length,
      newForms: forms.filter(f => f.status === 'new').length,
      totalSubscribers: newsletter.length,
      recentForms: forms.slice(-5).reverse(),
      recentSubscribers: newsletter.slice(-5).reverse()
    };

    res.json(stats);
  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all form submissions
app.get('/api/admin/forms', authenticateToken, async (req, res) => {
  try {
    const forms = await readJsonFile(FORMS_FILE);
    res.json(forms.reverse());
  } catch (error) {
    console.error('Forms error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update form status
app.put('/api/admin/forms/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    const forms = await readJsonFile(FORMS_FILE);
    const formIndex = forms.findIndex(f => f.id === parseInt(id));

    if (formIndex === -1) {
      return res.status(404).json({ error: 'Form not found' });
    }

    forms[formIndex] = {
      ...forms[formIndex],
      status: status || forms[formIndex].status,
      notes: notes !== undefined ? notes : forms[formIndex].notes,
      updatedAt: new Date().toISOString()
    };

    await writeJsonFile(FORMS_FILE, forms);
    res.json(forms[formIndex]);
  } catch (error) {
    console.error('Form update error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get newsletter subscribers
app.get('/api/admin/newsletter', authenticateToken, async (req, res) => {
  try {
    const newsletter = await readJsonFile(NEWSLETTER_FILE);
    res.json(newsletter.reverse());
  } catch (error) {
    console.error('Newsletter error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get SEO settings
app.get('/api/admin/seo', authenticateToken, async (req, res) => {
  try {
    const seo = await readJsonFile(SEO_FILE);
    res.json(seo);
  } catch (error) {
    console.error('SEO get error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update SEO settings
app.put('/api/admin/seo', authenticateToken, async (req, res) => {
  try {
    const seoData = req.body;
    await writeJsonFile(SEO_FILE, seoData);
    res.json({ success: true, message: 'SEO settings updated successfully' });
  } catch (error) {
    console.error('SEO update error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete form submission
app.delete('/api/admin/forms/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const forms = await readJsonFile(FORMS_FILE);
    const filteredForms = forms.filter(f => f.id !== parseInt(id));
    
    if (forms.length === filteredForms.length) {
      return res.status(404).json({ error: 'Form not found' });
    }

    await writeJsonFile(FORMS_FILE, filteredForms);
    res.json({ success: true, message: 'Form deleted successfully' });
  } catch (error) {
    console.error('Form delete error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete newsletter subscriber
app.delete('/api/admin/newsletter/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const newsletter = await readJsonFile(NEWSLETTER_FILE);
    const filteredNewsletter = newsletter.filter(s => s.id !== parseInt(id));
    
    if (newsletter.length === filteredNewsletter.length) {
      return res.status(404).json({ error: 'Subscriber not found' });
    }

    await writeJsonFile(NEWSLETTER_FILE, filteredNewsletter);
    res.json({ success: true, message: 'Subscriber deleted successfully' });
  } catch (error) {
    console.error('Newsletter delete error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Initialize and start server
async function startServer() {
  try {
    await initializeDataFiles();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Admin login: Charlie / Chazf123!`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
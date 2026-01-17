import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Request, Response } from 'express';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection placeholder
const connectDB = async () => {
  console.log('Database connection configured');
};

// Routes placeholder
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    service: 'Subscription Platform API'
  });
});

// Auth routes placeholder
app.post('/api/auth/register', (req: Request, res: Response) => {
  res.json({ message: 'Register endpoint - to be implemented' });
});

app.post('/api/auth/login', (req: Request, res: Response) => {
  res.json({ message: 'Login endpoint - to be implemented' });
});

// Subscription routes placeholder
app.get('/api/subscriptions/plans', (req: Request, res: Response) => {
  const plans = [
    {
      id: 'basic_monthly',
      name: 'Basic Plan',
      price: 9.99,
      currency: 'USD',
      interval: 'month',
      features: [
        '10 Premium Videos',
        'Basic Game Access',
        'Standard Support',
        '5GB Storage'
      ],
      description: 'Perfect for getting started'
    },
    {
      id: 'pro_monthly',
      name: 'Pro Plan',
      price: 19.99,
      currency: 'USD',
      interval: 'month',
      features: [
        'Unlimited Videos',
        'All Games Access',
        'Priority Support',
        '50GB Storage',
        'Live Streaming'
      ],
      description: 'Most popular choice'
    },
    {
      id: 'enterprise_monthly',
      name: 'Enterprise Plan',
      price: 49.99,
      currency: 'USD',
      interval: 'month',
      features: [
        'Unlimited Videos',
        'All Games + Beta Access',
        '24/7 Premium Support',
        '1TB Storage',
        'Live Streaming',
        'Offline Download'
      ],
      description: 'For power users and businesses'
    }
  ];
  res.json(plans);
});

// Payment routes placeholder
app.post('/api/payment/create-checkout', (req: Request, res: Response) => {
  res.json({ 
    message: 'Checkout session endpoint - Stripe integration needed',
    clientSecret: 'sk_test_placeholder_' + Date.now()
  });
});

// Start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Mock API endpoints
app.get('/api/plans', (req, res) => {
    res.json(pricingPlans.monthly);
});

app.post('/api/subscribe', (req, res) => {
    res.json({ success: true, message: 'Subscription started' });
});

app.listen(3000, () => console.log('API running on port 3000'));

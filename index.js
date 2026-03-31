const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware basique
app.use(express.json());

// Route health check (très utilisée en prod)
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    timestamp: new Date().toISOString(),
  });
});

// Route test
app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

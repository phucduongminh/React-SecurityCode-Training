require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware to enable CORS
app.use(cors());

app.get('/datetime', (req, res) => {
  const currentDate = new Date();
  res.json({ datetime: currentDate });
});

app.get('*', (req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

const PORT = process.env.PORT || 3000;
const IP_ADDRESS = process.env.ADDRESS || localhost;

app.listen(PORT, IP_ADDRESS, () => {
  console.log(`Server running at port: ${PORT}`);
});

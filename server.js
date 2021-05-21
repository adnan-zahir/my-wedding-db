require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
(async () => {
  try {
    await mongoose.connect(
      process.env.URI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => {
        console.log('Connected to db');
      }
    );
  } catch (error) {
    throw error;
  }
})();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const homeRoute = require('./routes/home');
app.use('/', homeRoute);
const bridegroomRoute = require('./routes/bridegroom');
app.use('/bridegroom', bridegroomRoute);

// Listen to port
app.listen(PORT, () => console.log(`Listening to port: ${PORT}`));

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb+srv://test:tharun12345@cluster0.avfdh2w.mongodb.net/skooldb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err) => {
  if (err) {
    console.error('Failed to connect to MongoDB:', err);
  } else {
    console.log('Connected to MongoDB');
  }
});
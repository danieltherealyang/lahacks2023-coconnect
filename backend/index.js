// index.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://db/my_database', { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('MongoDB connection error', err);
  });

app.listen(3000, () => {
  console.log('App listening on port 3000');
});

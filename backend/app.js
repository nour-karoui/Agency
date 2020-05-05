const express = require('express');
const adRoutes = require('./projects/ad-router');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

mongoose.connect('mongodb+srv://m001-student:chedy@cluster0-ltpy9.mongodb.net/test?retryWrites=true&w=majority')
  .then(() => {
    console.log('everything in place');
  })
  .catch(() => {
    console.log('connection failed');
  });

app
  .use('/images', express.static(path.join('backend/images')))
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET, OPTIONS');
    next();
  })
  .use('/projects', adRoutes);

module.exports = app;

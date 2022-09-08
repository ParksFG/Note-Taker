const express = require('express');

// Importing other routes
const feedbackRouter = require('./feedback');

const app = express();

app.use('/feedback', feedbackRouter);

module.exports = app;
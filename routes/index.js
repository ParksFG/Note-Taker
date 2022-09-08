const express = require('express');

// Importing other routes
const feedbackRouter = require('./feedback');
const notesRouter = require('./notes');

const app = express();

app.use('/feedback', feedbackRouter);
app.use('/notes', notesRouter);

module.exports = app;
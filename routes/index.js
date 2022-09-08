const express = require('express');

// Importing other route
const notesRouter = require('./notes');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;
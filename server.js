const express = require('express');
const path = require('path');
const noteData = require('./db/db.json');
const api = require('./routes/index.js');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api)


app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Open server and display in console that it is running.
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
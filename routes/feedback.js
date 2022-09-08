const fb = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsFuncs');
const uuid = require('../helpers/uuid');

// GET route for getting all the feedback
fb.get('/', (req, res) => {
    console.info(`${req.method} request recieved for feedback`);

    readFromFile('.db/feedback.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for posting feedback
fb.post('/', (req, res) => {
    console.info(`${req.method} request received to submit feedback`);

});


module.exports = fb;
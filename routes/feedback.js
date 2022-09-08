// const fb = require('express').Router();
// const { readFromFile, readAndAppend } = require('../helpers/fsFuncs');
// const uuid = require('../helpers/uuid');

// // GET route for getting all the feedback
// fb.get('/', (req, res) => {
//     // Log GET request
//     console.info(`${req.method} request recieved for feedback`);

//     readFromFile('.db/db.json').then((data) => res.json(JSON.parse(data)));
// });

// // POST route for posting feedback
// fb.post('/', (req, res) => {
//     // Log POST request
//     console.info(`${req.method} request received to submit feedback`);

//     const { noteTitle, noteText } = req.body;

//     const newNote = {
//         noteTitle,
//         noteText,
//         id: uuid(),
//     };

//     readAndAppend(newNote, './db/db.json');

//     const response = {
//         status: 'success',
//         body: newNote,
//     };

//     res.json(response)
// });


// module.exports = fb;
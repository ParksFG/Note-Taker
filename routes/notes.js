const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsFuncs');
const uuid = require('../helpers/uuid');

// GET Route for getting the notes
notes.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for new note
notes.post('/', (req, res) => {
    console.info(`${req.method} request received to add note`);
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json('Note added successfully');
    } else {
        res.error('Error in adding new note');
    }
});



module.exports = notes;
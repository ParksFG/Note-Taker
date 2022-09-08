const notes = require('express').Router();
const { readFromFile, readAndAppend, removeNote } = require('../helpers/fsFuncs');
const uuid = require('../helpers/uuid');
const noteData = require('../db/db.json');

// GET Route for getting the notes
notes.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for new note
notes.post('/', (req, res) => {
    console.info(`${req.method} request received to add note`);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json('Note added successfully');
    } else {
        res.error('Error in adding new note');
    }
});

// DELETE route for removing note
notes.delete('/:id', (req, res) => {
    let requestedNote = req.params.id;
    console.info(`${req.method} request received to delete note`);
    removeNote(requestedNote);
    console.info(`${req.method} request successful`);
    res.json();
});

module.exports = notes;
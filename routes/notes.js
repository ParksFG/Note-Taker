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
    // console.log(req.body);

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

notes.get('/:id', (req, res) => {
    const resquestedNote = req.params.id;
    console.info(`${resquestedNote}`)
    if (resquestedNote) {
        for (let i = 0; i < noteData.length; i++) {
            if (resquestedNote === noteData[i].id) {
                return res.json(noteData[i]);
            }
        }
    }

    return res.json('No note found')

});

notes.delete('/:id', (req, res) => {
    const requestedNote = req.params.id;

});

module.exports = notes;
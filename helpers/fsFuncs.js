const fs = require('fs');
const util = require('util');
const noteData = require('../db/db.json');



const readFromFile = util.promisify(fs.readFile);

// funciton for writing to the db.json
const writeToFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
        err ? console.error(err) : console.info(`\nData written to ${destination}`)
    );

// function for reading and appending the db.json
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, note) => {
        const parsedNote = JSON.parse(note);
        parsedNote.push(content);
        writeToFile(file, parsedNote)
    });
};

// function for removing a note.
const removeNote = (noteId) => {
    fs.readFile('./db/db.json', 'utf8', (err, note) => {
        const currentNotes = JSON.parse(note);
        const noteFound = currentNotes.findIndex(obj => obj.id == noteId);
        currentNotes.splice(noteFound, 1);
        writeToFile('./db/db.json', currentNotes);
    });
};

module.exports = { readFromFile, writeToFile, readAndAppend, removeNote };

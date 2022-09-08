const fs = require('fs');
const util = require('util');
const path = require('path');

const readFromFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
        err ? console.error(err) : console.info(`\nData written to ${destination}`)
    );

const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, note) => {
        const parsedNote = JSON.parse(note);
        parsedNote.push(content);
        writeToFile(file, parsedNote)
    });
};

const removeNote = (noteId, notesJson) => {
    const deletedNote = notesJson.map(x => x.id).indexOf(noteId)
    notesJson.splice(deletedNote, 1);
    fs.writeFile(path.join(__dirname, ))
};

module.exports = { readFromFile, writeToFile, readAndAppend, removeNote };

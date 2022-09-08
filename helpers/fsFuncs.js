const fs = require('fs');
const util = require('util');


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

const removeNote = (noteId, notes) => {
    const stringy = JSON.stringify(notes)
    console.info(`${stringy}`);
    const noteFound = notes.findIndex(obj => obj.id == noteId);
    console.log(noteFound);
    // let newArray = notes.filter(function(note) {
    //     return note.id != noteId 
    // });
    notes.splice(noteFound, 1);
    console.log(notes)
    // const stringy2 = JSON.stringify(newArray)
    // console.info(`${stringy2}`);
    writeToFile('./db/db.json', notes);
};

module.exports = { readFromFile, writeToFile, readAndAppend, removeNote };

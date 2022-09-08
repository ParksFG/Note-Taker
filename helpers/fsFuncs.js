const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content), (err) =>
        err ? console.error(err) : console.info(`\nData written to ${destination}`)
    );

const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, note) => {
        if (err) {
            console.error(err);
        } else {
            const parsedNote = JSON.parse(note);
            parsedNote.push(content);
            writeToFile(file, parsedNote)
        }
    });
};

module.exports = { readFromFile, writeToFile, readAndAppend };

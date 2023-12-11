const fs = require('fs/promises');

fs.writeFile('./05-fs/first.txt', 'First FILE TEXT')
    .then(() => console.log('file first.txt was written'))
    .then(() => fs.appendFile('./05-fs/first.txt', '\nOne more lone'))
    .then(() => console.log('Appended text to the first.txt file'))
    .then(() => fs.rename('./05-fs/first.txt', './renamed-first.txt'))
    .then(() => console.log('File was renamed'))
    .catch((err) => console.log(err));
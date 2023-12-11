const fs = require('fs');

// Avoid using sync versions They block event loop
try {
    fs.writeFileSync('./05-fs/first.txt', 'First FILE TEXT');
    console.log('file first.txt was written');
    fs.appendFileSync('./05-fs/first.txt', '\nOne more lone');
    console.log('Appended text to the first.txt file');
    fs.renameSync('./05-fs/first.txt', './renamed-first.txt');
    console.log('File was renamed');
} catch (error) {
    console.log(error);
}

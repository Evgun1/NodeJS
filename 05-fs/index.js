const fs = require('fs');

fs.writeFile('./05-fs/first.txt', 'First file text', (err) => {
    if (err) console.log(err);
    else {
        console.log('file first.txt was written');
        fs.appendFile('./05-fs/first.txt', '\nOne more lone', (err) => {
            if (err) console.log(err);
            else {
                console.log('Appended text to the first.txt file');
                fs.rename('./05-fs/first.txt', './renamed-first.txt', (err) => {
                    if (err) console.log(err);
                    else console.log('File was renamed');
                });
            }
        });
    }
});

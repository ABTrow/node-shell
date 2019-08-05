const fs = require('fs');

module.exports = function(file) {
    fs.readFile(`${process.cwd()}/${file}`, (err, data) => {
        if (err) {
            throw err;
        }
        process.stdout.write(data);
        process.stdout.write(`\nprompt > `);
    });
};
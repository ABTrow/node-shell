const fs = require('fs');

module.exports = function(file, done) {
    fs.readFile(`${process.cwd()}/${file}`, (err, data) => {
        if (err) {
            done('Something went wrong!');
        }
        done(data);
    });
};

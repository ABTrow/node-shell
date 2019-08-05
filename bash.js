const path = require('path');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    if (cmd === 'pwd') {
        process.stdout.write(`Current working directory: ${process.cwd()}`);
    }

    process.stdout.write(`\nYou typed: ${cmd}`);
    process.stdout.write(`\nprompt > `);
});
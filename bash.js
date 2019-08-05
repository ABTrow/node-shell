const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().replace('\n', '').split(' ');

    function done(output) {
      process.stdout.write(output);
      process.stdout.write(`\nprompt > `);
    }

    if (cmd[0] === 'pwd') {
      pwd(done);
    }
    if (cmd[0] === 'ls') {
      ls(done);
    }
    if (cmd[0] === 'cat') {
        for (let i = 1; i < cmd.length; i++) {
            cat(cmd[i], done);
        }
    }
    if (cmd[0] === 'curl') {
      curl(cmd[1], done);
    }
});

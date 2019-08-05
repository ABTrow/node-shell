const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().replace('\n', '').split(' ');

    if (cmd[0] === 'pwd') {
      pwd();
    }
    if (cmd[0] === 'ls') {
      ls();
    }
    if (cmd[0] === 'cat') {
        for (let i = 1; i < cmd.length; i++) {
            cat(cmd[i]);
        }
    }
    if (cmd[0] === 'curl') {
      curl(cmd[1]);
    }
});

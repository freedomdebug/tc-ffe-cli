const chalk = require('chalk');
const readline = require('readline');

const clearConsole = function (color, str) {
  if (process.stdout.isTTY) {
    const blank = '\n'.repeat(process.stdout.rows)
    console.log(blank)
    readline.cursorTo(process.stdout, 0, 0)
    readline.clearScreenDown(process.stdout)
  }
  console.info(chalk[color](str));
}

exports = module.exports = clearConsole;
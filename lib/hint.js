const chalk = require('chalk');

const hint = {
  line: () => {
    console.info();
    console.info(chalk.gray('---------------------------------------'));
    console.info();
  },
  print: (color, text, br) => {
    if(br === 'top') {
      console.info();
    }
    console.info(chalk[color](text));
    if(br === 'bottom') {
      console.info();
    }
  },
  docs: () => {
    console.info(chalk.green(' [开发文档] https://freedomdebug.github.io/'));
  },
  issues: () => {
    console.info(chalk.green('[问题留言] https://github.com/freedomdebug/tc-ffe/issues'));
  },
  fail: (spinner, str, err) => {
    spinner.fail([chalk.bgRed(str)])
    console.info('')
    if(err) {
      console.error(err)
      console.info('')
    }
    console.info(chalk.blue('[问题留言] https://github.com/freedomdebug/tc-ffe/issues'));
    process.exit()
  }
}

exports = module.exports = hint;
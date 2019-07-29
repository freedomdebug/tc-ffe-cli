const os = require('os');
const cmd = require('node-cmd');

function cmdSystem(arr, spinner, installStr) {
  return new Promise((resolve, reject) => {
    let cmdStr = '';
    if(os.type() === 'Windows_NT') {
      arr.forEach((item, index) => {
        index === 0 ? cmdStr += item : cmdStr = cmdStr + ' & ' + item
      });
    } else {
      arr.forEach((item, index) => {
        index === 0 ? cmdStr += item : cmdStr = cmdStr + '\n' + item
      });
    }

    let processRef = cmd.get(cmdStr, function (err, data, stderr) {
        if (!err) {
          resolve()
        } else {
          reject(err)
        }
      }
    );
    // 监听安装信息
    let data_line = installStr + '\n';
    processRef.stdout.on(
      'data',
      function(data) {
        data_line += data;
        spinner.start([data_line])
      }
    );
  })
}

exports = module.exports = cmdSystem;
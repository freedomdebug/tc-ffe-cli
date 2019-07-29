const semver = require('semver')

const getVersion = require('./getVersion');
const hint = require('./hint');
const packageVersion = require('../package.json').version;

function checkVersion(){
  return new Promise((resolve, reject) => {
    getVersion(`https://registry.npmjs.org/tc-ffe-cli/latest`)
    .then(version => {
      let isNew = semver.lte(version, packageVersion)
      if(isNew){
        resolve()
      } else {
        reject(version)
      }
    })
  })
}

exports = module.exports = checkVersion;
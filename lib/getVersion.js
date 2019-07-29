const request = require('request');

function getVersion(url) {
  return new Promise(resolve => {
    request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        resolve(JSON.parse(body).version)
      }
    })
  })
}

exports = module.exports = getVersion;
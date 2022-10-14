const path = require('path')

exports.reportConfig = (config) => {
  console.dir(config, { depth: null, colors: true }) + console.log('\r')

  const fs = require('fs')
  const file = path.resolve('./webpack/setup/config.json')
  fs.writeFile(file, (data = JSON.stringify(config)), function (err) {
    if (err) {
      return console.log(err)
    }
  })
}

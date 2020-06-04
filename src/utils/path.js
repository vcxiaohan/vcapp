const path = require('path')

const appPath = process.cwd()
const tempFilePath = path.join(__dirname, '../../templates')

module.exports = {
  appPath,
  tempFilePath,
}
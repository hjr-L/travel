// vue.config.js
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('styles', resolve('src/assets/style'))
  },
  devServer: {
    // 调试端口
    // port: 8989
  }
}

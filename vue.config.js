// const express = require('express')
// const app = express()

// var indexJ = require('./public/mock/indexJ.json')
// // 本地json文件数据
// var apiRoutes = express.Router()
// app.use('/api', apiRoutes)
// module.exports = {
//   devServer: {
//     before (app) {
//       app.get('/api/indexJ', (req, res) => {
//         res.json({
//           errno: 0,
//           // 这里是你的json内容
//           data: indexJ
//         })
//       })
//     }
//   }
// }
// 作为配置文件，直接导出配置对象即可
module.exports = {
  devServer: {
    // 设置主机地址
    // host: 'http://192.168.10.146',
    // 设置默认端口
    port: 8080,
    //默认打开浏览器
    open: true,
    // 设置代理
    proxy: {
      '/api': {
        // 目标 API 地址
        target: 'http://localhost:8080',
        //真实的api地址
        // 如果要代理 websockets
        // ws: true,
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
}

const express = require('express')
const app = express()

var indexJ = require('./public/mock/indexJ.json')
// 本地json文件数据
var apiRoutes = express.Router()
app.use('/api', apiRoutes)
module.exports = {
  devServer: {
    before (app) {
      app.get('/api/indexJ', (req, res) => {
        res.json({
          errno: 0,
          // 这里是你的json内容
          data: indexJ
        })
      })
    }
  }
}

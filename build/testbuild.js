// 访问压缩后的文件 npm运行node server.js
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname,'..', 'dist')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname,'..', 'dist', 'index.html'))
})

app.listen(8888, function (err) {
  if (err) {
    console.log(err)
  }
  console.log('localhost:8888')
})

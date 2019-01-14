var express = require('express')
var app = express();
var allowCrossDomain = function (req, res, next) {//设置response头部的中间件
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS")
    next(); 
};
app.use(allowCrossDomain);


// fen返回的json
app.get("/vue-cli-server/data/Fen", function (request, response) {
    var data = require('./data/Fen.json');//要获取的json文件
    response.send(data);
})

// hot返回的json
app.get("/vue-cli-server/data/Hot", function (request, response) {
    var data = require('./data/Hot.json');//要获取的json文件
    response.send(data);
})


app.listen('3000', function () {
    console.log('listening on 3000')
});
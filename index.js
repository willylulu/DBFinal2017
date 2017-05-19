//使用express撰寫Rest API
var express = require('express');

//body-parser是用來parse post封包裡面的內容
var bodyParser = require('body-parser');

var app = express();

app.set('port', (process.env.PORT || 5000));

//設定封包解析格式為json
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json());

//指定root頁面檔案
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

// 用來和postgres連線的libary
// var pg = require('pg');
// var conString = "postgres://YourUserName:YourPassword@localhost:5432/YourDatabase";
// var client = new pg.Client(conString);
// client.connect();
// client.query("INSERT INTO junk(name, a_number) values('Ted',12)");
// var query = client.query("SELECT * FROM junk");

//上面都可以不要動
//以下是撰寫Rest API

//當有人用Rest API get <網址>/peoples觸發函式
app.get('/peoples', function(request, response) {
    var peoples = [{
            name: "dick",
            age: 28,
            gender: "male",
            money: 1000000
        },
        {
            name: "Feng",
            age: 21,
            gender: "male",
            money: -10000000
        },
        {
            name: "Jean",
            age: 21,
            gender: "male",
            money: 1.25E10
        },
    ];

    //將json資料回傳
    response.send(peoples);
});

//當有人用Rest API post <網址>/text觸發函式
app.post('/text', function(request, response) {

    //擷取post封包內容
    var data = request.body;
    var text = data.text;

    //將json資料回傳
    response.send("You send text " + text);
});
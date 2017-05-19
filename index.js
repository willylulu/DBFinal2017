var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json());

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

//under this line is the rest api backend part

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
    response.send(peoples);
});

app.post('/text', function(request, response) {
    var data = request.body;
    var text = data.text;
    response.send("You send text " + text);
});
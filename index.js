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
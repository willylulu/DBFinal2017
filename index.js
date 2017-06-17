var express = require('express');

var bodyParser = require('body-parser');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json());

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});
app.get('/sql', function(request, response) {
    response.sendFile(__dirname + '/sql.html');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

var Postgres = require('./lib/db');

var postgres = new Postgres('db4','db4','db004','140.114.77.23','5432','10',30000);

app.post('/sql',(request,response)=>{
	var data = request.body;
	var text = data.text;
	postgres.query(text,(result)=>{
		response.send(result);
	});
});

// app.post('/sql', function(request, response) {
	
//     //擷取post封包內容
//     var data = request.body;
//     var text = data.text;

//     //將json資料回傳

// 	const pool = require('./lib/db'); 
// 	//for one or more queries
// 	var queries = text.split(';');
// 	pool.query_more(queries, function(err, results){
// 		if(err)
// 			return console.error('error running query', err);

// 		//use results to do something
// 		//console.log('-------results------------');
// 		//console.log(results);
// 		//console.log("end of queries");
//     	//response.send(results);
//     	response.send(results);
// 	});
// });

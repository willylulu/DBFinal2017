const pool = require('db');

//to run a query we just pass it to the pool
//after we're done nothing has to be taken care of
//we don't have to return any client to the pool or close a connection
//pool.query('SELECT $1::int AS number', ['2'], function(err, res) {
/*
//for only one query
pool.query('SELECT * from sensor', function(err, res) {
	if(err) {
		return console.error('error running query', err);
	}
	console.log(res.rows[0].route_id);
  //console.log('number:', res.rows[0].number);
});
*/

//for one or more queries
var queries = ['SELECT * FROM zz', 'SELECT * FROM highway', 'SELECT * from sensor'];
pool.query_more(queries, function(err, results){
	if(err)
		return console.error('error running query', err);

	//use results to do something
	console.log('-------results------------');
	console.log(results);

	console.log("end of queries");
});


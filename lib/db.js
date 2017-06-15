const pg = require('pg');


var config = {
	user: 'db4', //env var: PGUSER
	database: 'db4', //env var: PGDATABASE
	password: 'db004', //env var: PGPASSWORD
	host: '140.114.77.23', // Server hosting the postgres database
	port: 5432, //env var: PGPORT
	max: 10, // max number of clients in the pool
	idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};


//this initializes a connection pool
//it will keep idle connections open for 30 seconds
//and set a limit of maximum 10 idle clients
const pool = new pg.Pool(config);


pool.on('error', function (err, client) {
  // if an error is encountered by a client while it sits idle in the pool
  // the pool itself will emit an error event with both the error and
  // the client which emitted the original error
  // this is a rare occurrence but can happen if there is a network partition
  // between your application and the database, the database restarts, etc.
  // and so you might want to handle it and at least log it out
  console.error('idle client error', err.message, err.stack);
});


//export the query method for passing queries to the pool
module.exports.query = function (text, values, callback) {
  console.log('query:', text, values);
  return pool.query(text, values, callback);
};

module.exports.query = function (text, callback) {
  console.log('query:', text);
  return pool.query(text, callback);
};


// the pool also supports checking out a client for
// multiple operations, such as a transaction
module.exports.connect = function (callback) {
  return pool.connect(callback);
};

module.exports.query_more = function(queries, callback){
	pool.connect((err, client, done) => {
		if(err){
			return console.error('fetching client from pool', err);
		}
		results = [];
		for (i in queries){
			client.query(queries[i], (err, res) =>{
				if(err){
					return console.error('error running query', err);
				}
				//console.log(res.rows[0]);
				results.push(res.rows[0]);
			});
		}
		time = 100 * queries.length;
		setTimeout(() => {
			callback(undefined, results);
			//console.log(results);
			//console.log('done');
		}, time);
	});
}

/*
pool.connect((err, client, done) =>{
	if(err){
		return console.error('error fetching client from pool', err);
	}

	//user the client for executing the query
	client.query('SELECT * from sensor', (err, res) =>{
	   //call `done(err)` to release the client back to the pool (or //destroy it if there is an error)
	   if(err){
		   return console.error('error running query', err);
	   }
	   console.log(res.rows[0]);
	});
	//user the client for executing the query
	client.query('SELECT * from highway', (err, res) =>{
	   //call `done(err)` to release the client back to the pool (or //destroy it if there is an error)
	   if(err){
		   return console.error('error running query', err);
	   }
	   console.log(res.rows[0]);
	});
})
*/

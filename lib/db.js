const pg = require('pg');


// var config = {
// 	user: 'db4', //env var: PGUSER
// 	database: 'db4', //env var: PGDATABASE
// 	password: 'db004', //env var: PGPASSWORD
// 	host: '140.114.77.23', // Server hosting the postgres database
// 	port: 5432, //env var: PGPORT
// 	max: 10, // max number of clients in the pool
// 	idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
// };

class Postgres{

	constructor(user,database,password,host,port,max,idleTimeoutMillis){
		this.config = {
			user: user, //env var: PGUSER
			database: database, //env var: PGDATABASE
			password: password, //env var: PGPASSWORD
			host: host, // Server hosting the postgres database
			port: port, //env var: PGPORT
			max: max, // max number of clients in the pool
			idleTimeoutMillis: idleTimeoutMillis, // how long a client is allowed to remain idle before being closed
		};
		this.pool = new pg.Pool(this.config);
		this.pool.on('error', function (err, client) {
			console.error('idle client error', err.message, err.stack);
		});

		this.query = this.query.bind(this);
	}

	query(text , callback){
		this.pool.connect((err, client, done)=>{
			client.query(text,(err, result)=>{
				done(err);

				if(err) {
				return console.error('error running query', err);
				}
			
    			callback(result);
			});
		});
	}
}

module.exports = Postgres;

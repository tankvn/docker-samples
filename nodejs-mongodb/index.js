// Importing http core package/module provided by nodejs
const http = require('http');

// Lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

// We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

const hostname = '127.0.0.1';
const port = 3000;

// Create a database named "testdb":
var url = "mongodb://localhost:27017/testdb";

MongoClient.connect(url, function(err, db) {
	if (err) {
		console.log('Unable to connect to the mongoDB server. Error:', err);
	} else {
		//HURRAY!! We are connected. :)
		console.log('Connection established to', url);

		// do some work here with the database.
		console.log("Database created!");

		//Close connection
		db.close();
	}
});

// Creating a server
const server = http.createServer((req, res) => {
	res.statusCode = 200;
	// Write response as Html(text)
	res.setHeader('Content-Type', 'text/plain');
	// Writing static text
	res.end('Hello World');
});

// Server listening on port number 3000
server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
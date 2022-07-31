'use strict';

// Require Express
const express = require('express');

// Lets require/import the mongodb native drivers.
const mongodb = require('mongodb');

// Connection URI
// const url = "mongodb://localhost:27017/";
const url = "mongodb://mongo_db:27017/";

// Constants
const HOST = '0.0.0.0';
const PORT = 8080;

// We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Create a new MongoClient
const client = new MongoClient(url);

var databases = [];

// Creating a server
const app = express();
app.get('/', (req, res) => {
	res.send('Hello World: ' + status);
	if (databases.length > 0) {
		let htmlStr = 'Databases:<ul>';
		databases.forEach(db => {
			htmlStr += "<li>" + db.name + "</li>";
		});
		htmlStr += "</ul>";
		res.end(htmlStr);
	} else {
		// Writing static text
		res.send('Hello World');
	}
});

// Server listening on port number 8080
app.listen(PORT, HOST, () => {
	console.log(`Server running on http://${HOST}:${PORT}`);
});

async function listDatabases(client) {
	let databasesList = await client.db().admin().listDatabases();
	databases = databasesList.databases;
};

async function run() {
	try {
		// Connect the client to the server (optional starting in v4.7)
		await client.connect();

		// Establish and verify connection
		// await client.db("admin").command({ ping: 1 });

		await listDatabases(client);
	} catch (e) {
		console.error(e);
	} finally {
		// Ensures that the client will close when you finish/error
		await client.close();
	}
}
run().catch(console.error);
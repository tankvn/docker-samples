'use strict';

// Require Express
const express = require('express');

// Lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

// We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// Create a database named "testdb":
var url = "mongodb://mongo-db:27017/testdb";

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("client:", client);
  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

MongoClient.connect(url, function(err, db) {
	if (err) {
		console.log('Unable to connect to the mongoDB server. Error:', err);
	} else {
		// HURRAY!! We are connected. :)
		console.log('Connection established to', url);

		// do some work here with the database.
		console.log("Database created!");

    await listDatabases(db);

		// Close connection
		db.close();
	}
});

// App
const app = express();
app.get('/', (req, res) => {
  // Writing static text
  res.send('Hello World');
});

// Server listening on port number 8080
app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
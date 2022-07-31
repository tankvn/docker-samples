// Importing http core package/module provided by nodejs
const http = require('http');

// Lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

// Connection URI
// const url = "mongodb://localhost:27017/";
const url = "mongodb://mongo_db:27017/";
const hostname = '0.0.0.0';
const port = 8080;

// We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Create a new MongoClient
const client = new MongoClient(url);

var databases = [];


// Creating a server
const server = http.createServer((req, res) => {
	res.statusCode = 200;
	// Write response as Html(text)
	res.setHeader('Content-Type', 'text/html;charset=utf-8');
	if (databases.length > 0) {
		let htmlStr = 'Databases:<ul>';
		databases.forEach(db => {
			htmlStr += "<li>" + db.name + "</li>";
		});
		htmlStr += "</ul>";
		res.end(htmlStr);
	} else {
		// Writing static text
		res.end('Hello World');
	}
});

// Server listening on port number 3000
server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});

async function listDatabases(db) {
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
	} finally {
		// Ensures that the client will close when you finish/error
		await client.close();
	}
}

run().catch(console.dir);
// Importing http core package/module provided by nodejs
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

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
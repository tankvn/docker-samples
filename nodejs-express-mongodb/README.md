## Simple Docker samples
### NodeJS application with a NodeJS backend and a MongoDB database

#### Step 1 - Installing Mongoose on a Node.js environment

Create and navigate to a new folder by running the following commands on a terminal.
```bat
mkdir nodejs-express-mongodb
cd nodejs-express-mongodb
```

Instantly initialize a project
```bat
npm init --yes
```

Then install Express by executing the following command on a terminal.
```bat
npm install express --save
```

#### Step 2 – Creating the connection

Then connect to a local `MongoDB` instance using the `MongoClient` function.
```javascript
MongoClient.connect('mongodb://localhost:27017/testdb');
```

#### Step 3 – Run or Execute JavaScript File in Node.js
Now, run your web server using `node index.js`.

Visit http://127.0.0.1:3000 and you will see a message saying "Hello World".

### Step 4 - Build and run your app with Docker Compose
From the directory in which the file resides, run the docker-compose command.
```bat
docker compose up
```

If you would like to re-build it add --build flag, detach mode add -d, it looks like:
```bat
docker-compose up -d --build
```
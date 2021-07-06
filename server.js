const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');
const hubsRouter = require('./hubs/hubs-router.js');


const server = express();


function dateLogger(req, res, next) {
  console.log(new Date().toISOString());

  next();
}

function myLogger (req, res, next) {
  console.log(`The Logger: [${new Date().toISOString()}] ${req.method} to ${req.url}`);

  next();
}

function gateKeeper(req, res, next) {
  //data can come in the body, url paramaters, query string, headers
  const password = req.headers.password;

  if(password.toLowerCase() === 'mellon') {
    next();
  } else {
    if(password.toLowerCase() === null) {
      res.status(400).json({ message: 'please enter a password' })
  } else {
    res.status(401).json({ you: 'cannot pass!!' })
  } 

  }
}

// global middleware
server.use(gateKeeper);
server.use(helmet());  // third party
server.use(express.json());  // built in
server.use(dateLogger); //custom middleware
server.use(myLogger); // import custom middelware

server.use('/api/hubs', hubsRouter);

server.get('/', (req, res) => {
  const nameInsert = (req.name) ? ` ${req.name}` : '';

  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome${nameInsert} to the Lambda Hubs API</p>
    `);
});

module.exports = server;

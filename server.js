// server.js
// where your node app starts
const http = require('http');
const PORT = 3000;

// init project
const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "index.html");
});

// Express server listening...
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

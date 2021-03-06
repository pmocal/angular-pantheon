var express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;

var app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname + "/dist/angular-tour-of-heroes"));

// send the user to index html page in spite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + "/dist/angular-tour-of-heroes/index.html"));
});

app.listen(port);
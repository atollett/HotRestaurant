
// Express server listening on PORT 3000
// var http = require("http");
var express = require("express");
var path = require("path");

// code from Dane, more requirements
// require('./routes/apiRoutes')(app);
// require('./routes/htmlRoutes')(app);

var app = express();
var PORT = 3000;

const reservations = require("./tables");


app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/make", function (req, res) {
  res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Displays Reserved Table JSON
app.get("/api/tables", function (req, res) {
  return res.json(reservations);
});

app.post("/api/tables", function (req, res) {
  // This works because of our body parsing middleware
  let newTable = req.body;
  console.log(newTable);
  reservations.push(newTable);
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  // if (tables.json < 5) {
  //   push to tables.json
  // } else {
  //   push to waitlist.json
  // }
});


// Listener
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
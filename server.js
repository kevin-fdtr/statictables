var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var tables = [
  {
    id: 1,
    name: "O2 Depletion Tollerance - Beginner"
  },
  {
    id: 2,
    name: "CO2 Tollerance - Beginner"
  }
];

app.get('/', function(req, res) {
  res.send('FDTR - Static Tables');
});

// GET /tables
app.get('/tables', function(req,res) {
  res.json(tables);
});

// GET /tables/:id
//app.get(/tables/)

app.listen(PORT, function() {
  console.log('Express is listening on PORT ' + PORT);
});

var express = require('express');

var app = express();

app.use(express.static('public'));
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log("Express server running on port " + PORT);
})

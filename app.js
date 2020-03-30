const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody! vTekton-take #5 dave brubeck this time!");
});
 
module.exports.app = app;

const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody! vTekton-take #3");
});
 
module.exports.app = app;

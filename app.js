const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody! vTekton-take #2");
});
 
module.exports.app = app;

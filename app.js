const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody! vIBM Cloud");
});
 
module.exports.app = app;

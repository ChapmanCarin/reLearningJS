const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 8000;

app.get('/'), (req, res) => {
  res.send("Hello world!")
};

app.listen(port, () => {
  console.lot(`Example app listening on port ${port}"`)
});

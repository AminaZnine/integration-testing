const express = require('express');
const converter = require('../src/converter');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/hex-to-rgb', (req, res) => {
   const hex = req.query.hexValue;
   const rgb = converter.HexTorgb(hex);
   res.send(rgb);
});

if (process.env.NODE_ENV == 'test'){
  module.exports = app;
}else {
  app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
  });
}

    



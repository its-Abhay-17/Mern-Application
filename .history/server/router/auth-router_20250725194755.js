const express = require('express');
const router = express.Router();

app.get('/route', (req, res) => {
  res.send('Hello World!, ABHAY by router')
});


module.exports = router;
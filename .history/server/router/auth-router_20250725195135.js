const express = require('express');
const router = express.Router();

router.route.("/").get('/', (req, res) => {
  res.send('Hello World!, ABHAY by router')
});

module.exports = router;
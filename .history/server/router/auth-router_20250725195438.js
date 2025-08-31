const express = require('express');
const router = express.Router();

router.route("/").get((req, res) => {
  res.send('Hello World!, ABHAY by router')
});

router.route("/register").get((req,res)=>{
    res.send("Hii i am a register")
});
module.exports = router;
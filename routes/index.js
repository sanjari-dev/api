const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send({
    nama: "sanjari",
    NIM: "11180910000083"
  })
});

module.exports = router;
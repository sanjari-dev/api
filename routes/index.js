const express = require('express');

const router = express.Router();

router.get('/', function (req, res, next) {
  res.send({
    message: "Selamat Datang Di Program SANS-API"
  })
});

module.exports = router;
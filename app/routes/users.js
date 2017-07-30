const express = require('express')
const router = express.Router()
const User = require('../models').User

/* GET home page. */
router.get('/', function(req, res, next) {
  User.findAll().then(users => {
    res.json(users)
  })
});

module.exports = router;

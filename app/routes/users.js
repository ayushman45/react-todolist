var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
    console.log("A post request was made")
    res.send('respond with a resource');
});

module.exports = router;

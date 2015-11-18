var express = require('express');
var router = express.Router();

/* GET mentors page. */
router.get('/', function(req, res) {
  res.render('template');
}); 

module.exports = router;

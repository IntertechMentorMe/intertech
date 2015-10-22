var express = require('express');
var router = express.Router();

/* GET mentors page. */
router.get('/', function(req, res) {
  res.render('mentors');
}); 

module.exports = router;

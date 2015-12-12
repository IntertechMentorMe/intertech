var express = require('express');
var router = express.Router();
var db = require('../db.js');

/* GET mentors page. */
router.get('/', function(req, res) {
  db.Users.listMentors()
  .then(mentors => res.render('mentors', {mentors}));
}); 

module.exports = router;

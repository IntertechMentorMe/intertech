var express = require('express');
var router = express.Router();
var db = require('../db.js');

var controller = function(req, res) {
  db.Users.listMentors()
  .then(mentors => res.render('mentors', {mentors}));
};


router.get('/', controller);

module.exports = router;

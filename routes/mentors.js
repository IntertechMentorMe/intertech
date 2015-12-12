var express = require('express');
var router = express.Router();
var db = require('../db.js');

/* GET mentors page. */
router.get('/', function(req, res) {
  db.Users.listMentors().then(mentors => {
    res.render("mentors", {mentors: mentors});
  });
});

router.get('/profile', function(req, res) {
  db.Users.getById(req.query.id).then(passport => {
    res.render('user', {
        helpers: {
          firstName: function() { return passport.first_name; },
          lastName: function() { return passport.last_name; },
          headline: function() { return passport.headline; },
          summary: function() { return passport.summary; },
          photo: function() { return passport.photo; }
        }
      });
  });
});

module.exports = router;

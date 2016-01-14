var express = require('express');
var router = express.Router();
var db = require('../db.js');

/* GET mentors page. */
router.get('/', function(req, res) {
  db.Users.listMentors().then(function(mentors) {

    var mentors_new = {};

    mentors.forEach(function(mentor) {
      mentors_new[mentor.first_name] = mentor;
    });

    mentors = Object.keys(mentors_new).map(function(key) {
      return mentors_new[key];
    });

    res.render("mentors", {mentors: mentors});
  });
});

router.use('/:user/:name', function(req, res) {
  db.Users.getById(req.params.user).then(function(passport) {
    res.render('profile', {
        sent: req.method != "GET",
        helpers: {
          firstName: function() { return passport.first_name; },
          lastName: function() { return passport.last_name; },
          headline: function() { return passport.headline; },
          summary: function() { return passport.summary; },
          skills: function() { return passport.skills; },
          experience: function() { return passport.experience; },
          photo: function() { return passport.photo; }
        }
      });
  });
});

module.exports = router;

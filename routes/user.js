var express = require('express');
var router = express.Router();
var db = require("../db.js");

/* GET user listing. */
router.use('/', function(req, res) {
    var passport = req.session.passport.user;

    if (req.method != "GET") {
      var user = {
        id: passport.id,
        first_name: passport.first_name,
        last_name: passport.last_name,
        headline: passport.headline,
        photo: passport.photo,
        summary: req.body.summary,
        skills: req.body.skills,
        experience: req.body.experience,
        email: req.body.email,
        isMentor: 1
      };
      db.Users.update(user).then(x => {
        user.firstName = user.first_name;
        user.lastName = user.last_name;
        res.render('user', {user: user, saved: true});
      });
      return;
    }

    db.Users.getById(passport.id).then(passport => {

      if (!passport.isMentor) {
        res.redirect("/mentors");
        return;
      }

      res.render('user', {
        helpers: {
            firstName: function() { return passport.first_name; },
            lastName: function() { return passport.last_name; },
            headline: function() { return passport.headline; },
            summary: function() { return passport.summary; },
            photo: function() { return passport.photo; }
        },
        user: passport
    });
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET user listing. */
router.get('/', function(req, res) {
    var passport = req.session.passport.user;
    console.log(passport);
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

module.exports = router;

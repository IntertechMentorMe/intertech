var express = require('express');
var router = express.Router();

var controller = function(req, res) {
  var hidden = req.query.action=="signup"? "" : "hidden";
  res.render("index", {showTerms: hidden, end: req.query.end});
};

router.get('/', controller);

res.render('user', {
  helpers: {
    firstName: function() { return passport.first_name; },
    lastName: function() { return passport.last_name; },
    headline: function() { return passport.headline; },
    summary: function() { return passport.summary; },
    photo: function() { return passport.photo; }
  }
});

module.exports = router;

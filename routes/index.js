var express = require('express');
var router = express.Router();

var controller = function(req, res) {
  var hidden = req.query.action=="signup"? "" : "hidden";
  var end = req.query.end;
  res.render("index", {showTerms: hidden, end: req.query.end, mentee: end=="" || end=="mentee", mentor: end=="" || end=="mentor"});
};

router.get('/', controller);

router.get('/mentor', function(req, res) {
  var session = req.session;
  session.isMentor = true;
  req.session.save();
  res.redirect('/auth/login');
});

router.get('/mentee', function(req, res) {
  var session = req.session;
  session.isMentor = false;
  req.session.save();
  res.redirect('/auth/login');
});

module.exports = router;

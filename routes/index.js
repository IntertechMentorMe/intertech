var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

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

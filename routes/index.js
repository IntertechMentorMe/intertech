var express = require('express');
var router = express.Router();

var controller = function(req, res) {
  var hidden = req.query.action=="signup"? "" : "hidden";
  res.render("index", {showTerms: hidden, end: req.query.end});
};

router.get('/', controller);

module.exports = router;

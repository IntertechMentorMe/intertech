var express = require('express');
var router = express.Router();

var controller = function(req, res) {
  res.render("faq", {});
};

router.get('/', controller);

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET user listing. */
router.get('/', function(req, res) {
    res.render('user');
});

module.exports = router;

var mountPoint = "/";
var controller = function(req, res) {
  var hidden = req.query.action=="signup"? "" : "hidden";
  res.render("index", {showTerms: hidden, end: req.query.end});
};

module.exports = function(router) {
  router.get(mountPoint, controller);

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

};

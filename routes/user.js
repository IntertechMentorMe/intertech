var mountPoint = "/user";
var controller = function(req, res) {
    res.render('user', req.session.passport);
};

module.exports = function(router) {
  router.use(mountPoint, controller);
};

var mountPoint = "/users";
var controller = function(req, res) {
    res.render("users", {});
};

module.exports = function(router) {
  router.use(mountPoint, controller);
};
